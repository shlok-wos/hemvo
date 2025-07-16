import { axiosApi } from "@/axiosApi";

export const housingControlListDetails = async (
  isPaginate: boolean = false,
  currentPage: number = 1,
  pageSize: number = 10,
  search: string = ""
) => {
  try {
    const housingControlListResponse = await axiosApi.get(
      `/v1/user/queue/landlords?isPaginate=${isPaginate}&currentPage=${currentPage}&pageSize=${pageSize}&search=${search}`
    );
    return housingControlListResponse.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const housingControlCountDetails = async () => {
  try {
    const housingControlResponse = await axiosApi.get(
      "/v1/user/queue/landlord-analytics"
    );
    return housingControlResponse.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
