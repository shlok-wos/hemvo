"use client";

import { resetPassword } from "@/actions";
import { UseResetPasswordErrorType, UseResetPasswordType } from "@/types/user.types";
import { validateOnChangePassword, validateOnSubmitChangePassword } from "@/validations/createNewPassword.validate";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { deleteCookie, getCookie } from "cookies-next";

export const useUserCreateNewPasswordHook = () => {
  const router = useRouter();
  // const getEmail = window?.localStorage.getItem("fqEmail")
  const getEmail : any = getCookie("fqEmail")
  const [email, setEmail] = useState<string | null>(getEmail);
  const [newPasswordData, setNewPasswordData] = useState<UseResetPasswordType>(
    {} as UseResetPasswordType
  );
  const [errorMessage, setErrorMessage] = useState<UseResetPasswordErrorType>(
    {} as UseResetPasswordErrorType
  );

  useEffect(() => {
    if (!email) {
      router.push("/login")
    }
    setEmail(getEmail)
  }, [email])

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    const errors = validateOnChangePassword(name, value, errorMessage, newPasswordData?.newPassword)
    setErrorMessage(errors);
    setNewPasswordData((prevData) => ({ ...prevData, [name]: value }))
  };

  const onSubmit = async (event: any) => {
    try {
      event.preventDefault()
      const errors = validateOnSubmitChangePassword(newPasswordData)
      setErrorMessage(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      if (email) {
        let updatedNewPasswordData = newPasswordData
        if (updatedNewPasswordData.confirmPassword) {
          delete updatedNewPasswordData.confirmPassword;
        }
        const newPasswordPayload = { ...updatedNewPasswordData, email: email }
        const resetPasswordResponse = await resetPassword(newPasswordPayload);
        if (resetPasswordResponse.success) {
          toast.success(resetPasswordResponse?.message);
          deleteCookie("fqEmail");
          router.push('/login')
        } else {
          toast.error(resetPasswordResponse?.message);
        }
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  return {
    newPasswordData,
    errorMessage,
    handleInputChange,
    onSubmit
  };
};
