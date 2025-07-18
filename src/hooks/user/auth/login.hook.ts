"use client";
import { userLogin } from "@/actions";
import { setAuthHeader } from "@/axiosApi";
import { UserLoginErrorType, UserLoginType } from "@/types/user.types";
import {
  validateOnSubmitUserLogin,
  validateOnUserLogin,
} from "@/validations/userLogin.validate";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";

export const useUserLoginHook = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [userData, setUserData] = useState<UserLoginType>({} as UserLoginType);
  const [errorMessage, setErrorMessage] = useState<UserLoginErrorType>(
    {} as UserLoginErrorType
  );

  const token = searchParams?.get("token");
  const sessionId = searchParams?.get("session_id");

  useEffect(() => {
    if (token) {
      setCookie("_token", token);
      setCookie("authToken", token);
      router.push(
        `/dashboard/subscription?token=${token}&session_id=${sessionId}`
      );
    }
  }, [token]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    const errors = validateOnUserLogin(name, value, errorMessage);
    setErrorMessage(errors);
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitLogin = async (event: any) => {
    try {
      event.preventDefault();
      const errors = validateOnSubmitUserLogin(userData);
      setErrorMessage(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      const loggedInUser = await userLogin(userData);
      if (loggedInUser.success) {
        // window?.localStorage.setItem("_token", loggedInUser?.data?.token);
        setCookie("_token", loggedInUser?.data?.token);
        setCookie("authToken", loggedInUser?.data?.token);

        setAuthHeader(loggedInUser?.data?.token);
        router.push("/dashboard/how-work");
      } else {
        toast.error(loggedInUser?.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return {
    router,
    userData,
    errorMessage,
    handleInputChange,
    onSubmitLogin,
  };
};
