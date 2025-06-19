import { axiosApi } from "@/axiosApi";

export const userCreateRentalProfile = async (rentalProfilePayload: any) => {
   try {
      const rentalProfileResponse = await axiosApi.post("/v1/user/rental/create-profile", rentalProfilePayload);
      return rentalProfileResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};

export const rentalProfileDetails = async () => {
   try {
      const rentalProfileResponse = await axiosApi.get("/v1/user/rental/details");
      return rentalProfileResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};
