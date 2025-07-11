"use client";
import { createInquiry } from "@/actions";
import {
  UpdateUserDetailsErrorType,
  UpdateUserDetailsType,
} from "@/types/user.types";
import { validateUserInquiryOnChange, validateUserInquirySubmit } from "@/validations/rentOutUser.validate";
import { useState } from "react";
import toast from "react-hot-toast";

export const useRentHook = () => {
  const defaultUserData = {
    phoneCode: "+46",
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };
  const [userData, setUserData] = useState<UpdateUserDetailsType>(
    defaultUserData as UpdateUserDetailsType
  );
  const [errorMessage, setErrorMessage] = useState<UpdateUserDetailsErrorType>(
    {} as UpdateUserDetailsErrorType
  );

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    const errors = validateUserInquiryOnChange(name, value, errorMessage);
    setErrorMessage(errors);
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnChangeCountryCode = (value: any) => {
    setUserData((prevData: any) => ({ ...prevData, phoneCode: value.value }));
  };

  const onSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const errors = validateUserInquirySubmit(userData);
      setErrorMessage(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      const userInquiry = await createInquiry(userData);
      if (userInquiry.success) {
        setUserData(defaultUserData as UpdateUserDetailsType);
        toast.success(userInquiry?.message);
      } else {
        toast.error(userInquiry?.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };



  return { userData, errorMessage, onSubmit, handleInputChange, handleOnChangeCountryCode };
};
