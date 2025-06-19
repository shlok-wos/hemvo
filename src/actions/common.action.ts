import { axiosApi } from "@/axiosApi";

export const fetchCities = async () => {
   try {
      const fetchCitiesResponse = await axiosApi.get("/v1/city/list");
      return fetchCitiesResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};

export const fetchFaqs = async () => {
   try {
      const fetchCitiesResponse = await axiosApi.get("/v1/setting/detail/faqs");
      return fetchCitiesResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};
export const createInquiry = async (inquiryPayload: any) => {
   try {
      const storeInquiryResponse = await axiosApi.post("/v1/inquiry/create", inquiryPayload);
      return storeInquiryResponse.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};