"use client";
import { fetchUserDetails, updatePassword, updateUser } from "@/actions";
import {
  UpdateUserDetailsErrorType,
  UpdateUserDetailsType,
  UseChangePasswordType,
  UserCreateAccountType,
  UseUpdatePasswordErrorType,
  UseUpdatePasswordType,
} from "@/types/user.types";
import {
  validateOnChangeUpdatePassword,
  validateOnSubmitChangeUpdatePassword,
  validateOnSubmitContactDetails,
  validateOnUpdateContactDetails,
} from "@/validations/settings.validate";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useSettingsHook = () => {
  const defaultUserData = {
    phoneCode: "+46",
  };
  const [userData, setUserData] = useState<UpdateUserDetailsType>(
    defaultUserData as UpdateUserDetailsType
  );
  const [passwordData, setPasswordData] = useState<UseUpdatePasswordType>(
    {} as UseUpdatePasswordType
  );
  const [errorMessage, setErrorMessage] = useState<UpdateUserDetailsErrorType>(
    {} as UpdateUserDetailsErrorType
  );
  const [passwordErrorMessage, setPasswordErrorMessage] =
    useState<UseUpdatePasswordErrorType>({} as UseUpdatePasswordErrorType);

  const [isLoader, setIsLoader] = useState<boolean>(true);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      setIsLoader(true);
      const userDetails = await fetchUserDetails();
      if (userDetails?.success) {
        const { first_name, last_name, email, phone_code, phone_number } =
          userDetails?.data;
        const newUserDetails: any = {
          firstName: first_name,
          lastName: last_name,
          email: email,
          phoneCode: phone_code || defaultUserData.phoneCode,
          phoneNumber: phone_number || null,
        };
        setUserData(newUserDetails);
      }
      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.log(error);
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    const errors = validateOnUpdateContactDetails(name, value, errorMessage);
    setErrorMessage(errors);
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnChangeCountryCode = (value: any) => {
    setUserData((prevData: any) => ({ ...prevData, phoneCode: value.value }));
  };

  const onSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const errors = validateOnSubmitContactDetails(userData);
      setErrorMessage(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      setIsLoader(true);
      const registerUser = await updateUser(userData);
      if (registerUser.success) {
        toast.success(registerUser?.message);
      } else {
        toast.error(registerUser?.message);
      }
      setIsLoader(false);
    } catch (error: any) {
      setIsLoader(false);
      console.log(error);
    }
  };

  const handlePasswordChange = (event: any) => {
    const { name, value } = event.target;
    const errors = validateOnChangeUpdatePassword(name, value, errorMessage);
    setPasswordErrorMessage(errors);
    setPasswordData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitPassword = async (event: any) => {
    try {
      event.preventDefault();
      const errors = validateOnSubmitChangeUpdatePassword(passwordData);
      setPasswordErrorMessage(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      setIsLoader(true);
      const updatePasswordResp = await updatePassword(passwordData);
      if (updatePasswordResp.success) {
        setPasswordData({ oldPassword: '', newPassword: '' })
        toast.success(updatePasswordResp?.message);
      } else {
        toast.error(updatePasswordResp?.message);
      }
      setIsLoader(false);
    } catch (error: any) {
      setIsLoader(false);
      console.log(error);
    }
  };
  return {
    isLoader,
    userData,
    errorMessage,
    passwordData,
    passwordErrorMessage,
    handleInputChange,
    onSubmit,
    handlePasswordChange,
    onSubmitPassword,
    handleOnChangeCountryCode,
  };
};
