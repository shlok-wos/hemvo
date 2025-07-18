"use client";
import { userSendOtp } from "@/actions";
import {
  UseResetPasswordErrorType,
  UseResetPasswordType,
} from "@/types/user.types";
import {
  validateOnEmailResetPassword,
  validateOnSubmitEmailResetPassword,
} from "@/validations";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";

export const useResetPasswordHook = () => {
  const router = useRouter();
  const [resetPasswordData, setResetPasswordData] =
    useState<UseResetPasswordType>({} as UseResetPasswordType);
  const [errorMessage, setErrorMessage] = useState<UseResetPasswordErrorType>(
    {} as UseResetPasswordErrorType
  );

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    const errors = validateOnEmailResetPassword(name, value, errorMessage);
    setErrorMessage(errors);
    setResetPasswordData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onVerifyEmail = async (event: any) => {
    try {
      event.preventDefault();
      const errors = validateOnSubmitEmailResetPassword(resetPasswordData);
      setErrorMessage(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      const loggedInUser = await userSendOtp(resetPasswordData);
      if (loggedInUser.success && typeof window !== "undefined") {
        // window?.localStorage.setItem("fqEmail", resetPasswordData?.email);
        setCookie("fqEmail", resetPasswordData?.email);
        // setCookie("_token", resetPasswordData?.email);
        router.push("/verify-code");
      } else {
        toast.error(loggedInUser?.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return {
    router,
    resetPasswordData,
    errorMessage,
    handleInputChange,
    onVerifyEmail,
  };
};
