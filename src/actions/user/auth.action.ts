import { axiosApi } from "@/axiosApi";

export const userRegistration = async (registrationPayload: any) => {
   try {
      const registerUserResponse = await axiosApi.post("/v1/user/auth/register", registrationPayload);
      return registerUserResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};

export const userLogin = async (loginPayload: any) => {
   try {
      const registerUserResponse = await axiosApi.post("/v1/user/auth/login", loginPayload);
      return registerUserResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};

export const userSendOtp = async (emailPayload: any) => {
   try {
      const emailVerifyResponse = await axiosApi.post("/v1/user/auth/send-otp", emailPayload);
      return emailVerifyResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};

export const verifyOtp = async (verificationPayload: any) => {
   try {
      const verificationResponse = await axiosApi.post("/v1/user/auth/verify-otp", verificationPayload);
      return verificationResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};

export const resetPassword = async (passwordPayload: any) => {
   try {
      const resetPasswordResponse = await axiosApi.post("/v1/user/auth/reset-password", passwordPayload);
      return resetPasswordResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};

export const updatePassword = async (passwordPayload: any) => {
   try {
      const updatePasswordResponse = await axiosApi.post("/v1/user/auth/change-password", passwordPayload);
      return updatePasswordResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};

export const fetchUserDetails = async () => {
   try {
      const userDetailsResponse = await axiosApi.get("/v1/user/auth/user-details");
      return userDetailsResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};

export const updateUser = async (userPayload: any) => {
   try {
      const userDetailsResponse = await axiosApi.post("/v1/user/auth/edit-profile", userPayload);
      return userDetailsResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};