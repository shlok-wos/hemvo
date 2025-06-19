import { axiosApi } from "@/axiosApi";

export const blogList = async (apiUrl: string) => {
   try {
      const bloglistResp = await axiosApi.get(`/v1/blog/list${apiUrl}`);
      return bloglistResp.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};

export const blogDetailsByID = async (blogId: string) => {
   try {
      const bloglistResp = await axiosApi.get(`/v1/blog/details/${blogId}`);
      return bloglistResp.data;
   } catch (error: any) {
      return error?.response?.data;
   }
};