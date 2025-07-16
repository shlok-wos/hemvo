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
    minRooms: 1,
    maxRooms: 4,
    minSize: 10,
    maxSize: 60,
    minrent: 1000,
    maxrent: 2000,
    guardianChildrenCount: 0,
    accomodationType: "",
    incomeAmount: 0,
    typeOfIncome: "",
  };
  const [rentalProfileData, setRentalProfileData] = useState<RentalProfileType>(
    defaultRoomValue as RentalProfileType
  );
  const [cities, setcities] = useState<any>([]);
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
          city_id,
          is_first_hand,
          is_sub_contract,
          minRoom,
          maxRoom,
          minSize,
          maxSize,
          minRent,
          maxRent,
          accomodation_type,
          guardian_children_count,
          income_amount,
          type_of_income,
        } = rentalProfileDetailsResp?.data;

        const roomValue: any = {
          cityId: city_id,
          isFirstHand: is_first_hand,
          isSubContract: is_sub_contract,
          minRooms: minRoom,
          maxRooms: maxRoom,
          minSize: minSize,
          maxSize: maxSize,
          minrent: minRent,
          maxrent: maxRent,
          guardianChildrenCount: guardian_children_count,
          accomodationType: accomodation_type,
          incomeAmount: income_amount,
          typeOfIncome: type_of_income,
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

    const errors = validateOnChangeRentalProfile(
      name,
      value,
      errorMessage,
      rentalProfileData
    );
    setErrorMessage(errors);
    setRentalProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnchangeSwitch = (value: Boolean, name: string) => {
    setRentalProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnChangeSelect = (value: any, name: string) => {
    const errors = validateOnChangeRentalProfile(
      name,
      value,
      errorMessage,
      rentalProfileData
    );
    setErrorMessage(errors);
    setRentalProfileData((prevData) => ({
      ...prevData,
      [name]: name === "cityId" ? value.id : value,
    }));
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
    errorMessage,
    rentalProfileData,
    onSaveRentalData,
    handleInputChange,
    handleOnchangeSwitch,
    handleOnChangeSelect,
  };
};
