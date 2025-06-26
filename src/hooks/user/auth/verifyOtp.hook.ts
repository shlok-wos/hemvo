"use client";
import { userSendOtp, verifyOtp } from "@/actions";
import {
  UseResetPasswordErrorType,
  UseVerifyOtpType,
} from "@/types/user.types";
import { validateOnSubmitEmailResetPassword } from "@/validations";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { deleteCookie, getCookie } from "cookies-next";

export const useVerifyOtpHook = () => {
  const router = useRouter();

  const email = getCookie("fqEmail");
  deleteCookie("_token");
  deleteCookie("authToken");

  // const email = window?.localStorage.getItem("fqEmail")

  const [resetPasswordData, setResetPasswordData] = useState<UseVerifyOtpType>({
    email: email,
    otp: "",
  } as UseVerifyOtpType);
  const [errorMessage, setErrorMessage] = useState<UseResetPasswordErrorType>(
    {} as UseResetPasswordErrorType
  );
  const [showTimer, setShowTimer] = useState(true);
  const [time, setTime] = useState(0);

  const handleInputChange = (value: any) => {
    setResetPasswordData((prevData) => ({ ...prevData, otp: value }));
  };

  const onVerifyEmail = async (event: any) => {
    try {
      event.preventDefault();
      const errors = validateOnSubmitEmailResetPassword(resetPasswordData);
      setErrorMessage(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      const loggedInUser = await verifyOtp(resetPasswordData);
      if (loggedInUser.success) {
        router.push("/create-new-password");
      } else {
        toast.error(loggedInUser?.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const sendOTP = async () => {
    try {
      // Simulate sending OTP
      setShowTimer(true);
      setTime((prevTime) => prevTime + 1);
      await userSendOtp(resetPasswordData);
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleTimerExpire = () => {
    setShowTimer(false);
    // Optionally, you could also trigger a resend OTP action here
  };

  return {
    time,
    showTimer,
    resetPasswordData,
    errorMessage,
    handleInputChange,
    onVerifyEmail,
    sendOTP,
    handleTimerExpire,
  };
};
