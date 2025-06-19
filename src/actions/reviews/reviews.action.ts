import { axiosApi } from "@/axiosApi";

export const reviewsList = async (
  isPaginate = true,
  currentPage = 1,
  pagesize = 10
) => {
  try {
    const reviewListResponse = await axiosApi.get(
      `/v1/review/list?isPaginate=${isPaginate}&currentPage=${currentPage}&pageSize=${pagesize}`
    );
    return reviewListResponse.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
