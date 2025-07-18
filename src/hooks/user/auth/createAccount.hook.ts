"use client";

import { userRegistration } from "@/actions";
import {
  UserCreateAccountErrorType,
  UserCreateAccountType,
} from "@/types/user.types";
import {
  validateOnSubmitUserRegistration,
  validateOnUserRegistration,
} from "@/validations/userRegisteration.validate";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import { setAuthHeader } from "@/axiosApi";

export const useUserCreateAccountHook = () => {
  const router = useRouter();
  const [authData, setAuthData] = useState<UserCreateAccountType>(
    {} as UserCreateAccountType
  );
  const [errorMessage, setErrorMessage] = useState<UserCreateAccountErrorType>(
    {} as UserCreateAccountErrorType
  );

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    const errors = validateOnUserRegistration(name, value, errorMessage);
    setErrorMessage(errors);
    setAuthData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event: any) => {
    try {
      event.preventDefault();

      const errors = validateOnSubmitUserRegistration(authData);
      setErrorMessage(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      const registerUser = await userRegistration(authData);
      if (registerUser.success) {
        setCookie("_token", registerUser?.data?.token);
        setCookie("authToken", registerUser?.data?.token);
        // setCookie("_token", registerUser?.data?.token, {
        //   path: "/",
        //   // sameSite: "lax", // "Lax" is safest cross-browser
        //   // secure: true, // true only in production (Safari requires Secure with SameSite=None)
        //   maxAge: 60 * 60 * 24 * 365, // 1 year
        //   domain: '.flatquest.se',
        // });
        // setCookie("authToken", registerUser?.data?.token, {
        //   path: "/",
        //   // sameSite: "lax", // "Lax" is safest cross-browser
        //   // secure: true, // true only in production (Safari requires Secure with SameSite=None)
        //   maxAge: 60 * 60 * 24 * 365, // 1 year
        //   domain: '.flatquest.se',
        // });

        setAuthHeader(registerUser?.data?.token);
        router.push("/dashboard");
      } else {
        toast.error(registerUser?.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return {
    router,
    authData,
    errorMessage,
    onSubmit,
    handleInputChange,
  };
};
