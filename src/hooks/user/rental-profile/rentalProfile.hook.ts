"use client";
import {
  fetchCities,
  rentalProfileDetails,
  userCreateRentalProfile,
} from "@/actions";
import { RentalProfileType } from "@/types/rentalProfile.types";
import {
  validateOnChangeRentalProfile,
  validateOnSaveRentalProfile,
} from "@/validations/rentalProfile.validate";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useRentalProfileHook = () => {
  const defaultRoomValue = {
    cityId: "",
    isFirstHand: false,
    isSubContract: false,
    minRooms: 0,
    maxRooms: 0,
    minSize: 0,
    maxSize: 0,
    minrent: 0,
    maxrent: 0,
  };
  const [rentalProfileData, setRentalProfileData] = useState<RentalProfileType>(
    defaultRoomValue as RentalProfileType
  );
  const [cities, setcities] = useState<any>([]);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>(
    {} as { [key: string]: string }
  );
  const [isLoader, setIsLoader] = useState<boolean>(true);

  useEffect(() => {
    getCitiesList();
    getRentalProfileDetails();
  }, []);

  const getCitiesList = async () => {
    try {
      const cityList = await fetchCities();
      if (cityList?.success) {
        const cityData = cityList?.data?.map((city: any, index: number) => {
          return {
            id: city?.id,
            key: index,
            value: city.id,
            label: city?.display_name,
          };
        });
        setcities(cityData);
      }
    } catch (error) {
      console.log(error);
      // toast.error("Something went wrong");
    }
  };

  const getRentalProfileDetails = async () => {
    try {
      setIsLoader(true);
      const rentalProfileDetailsResp = await rentalProfileDetails();

      if (rentalProfileDetailsResp?.success && rentalProfileDetailsResp?.data) {
        const {
          personal_prefrence,
          city_id,
          is_first_hand,
          is_sub_contract,
          noOfRooms,
          size,
          rent,
          minRoom,
          maxRoom,
          minSize,
          maxSize,
          minRent,
          maxRent,
        } = rentalProfileDetailsResp?.data;

        const roomValue: any = {
          personalPrefrence: personal_prefrence,
          cityId: city_id,
          isFirstHand: is_first_hand,
          isSubContract: is_sub_contract,
          minRooms: minRoom,
          maxRooms: maxRoom,
          minSize: minSize,
          maxSize: maxSize,
          minrent: minRent,
          maxrent: maxRent,
        };

        if (rentalProfileDetailsResp?.data?.id) {
          roomValue.rentalId = rentalProfileDetailsResp?.data?.id;
        }

        setRentalProfileData(roomValue);
      }
      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.log(error);
      // toast.error("Something went wrong");
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    // const errors = validateUserInquiryOnChange(name, value, errorMessage);
    // setErrorMessage(errors);
    setRentalProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnchangeRange = (value: [number, number], name: string) => {
    setRentalProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnchangeSwitch = (value: Boolean, name: string) => {
    setRentalProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnChangeSelect = (value: any, name: string) => {
    const errors = validateOnChangeRentalProfile(name, value, errorMessage);
    setErrorMessage(errors);
    setRentalProfileData((prevData) => ({
      ...prevData,
      [name]: name === "cityId" ? value.id : value,
    }));
  };
  const handleOnChangeTextArea = (event: any) => {
    const { name, value } = event?.target;
    setRentalProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirmModal = () => {
    setIsSuccessModalOpen(!isSuccessModalOpen);
  };

  const onSaveRentalData = async () => {
    try {
      const errors = validateOnSaveRentalProfile(rentalProfileData);
      setErrorMessage(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      const createRentalProfileResp = await userCreateRentalProfile(
        rentalProfileData
      );
      if (createRentalProfileResp.success) {
        handleConfirmModal();
        toast?.success(createRentalProfileResp?.message);
      } else {
        toast.error(createRentalProfileResp.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return {
    isLoader,
    cities,
    rentalProfileData,
    isSuccessModalOpen,
    errorMessage,
    handleConfirmModal,
    handleOnchangeRange,
    handleOnchangeSwitch,
    handleOnChangeSelect,
    onSaveRentalData,
    handleInputChange,
    handleOnChangeTextArea,
  };
};
