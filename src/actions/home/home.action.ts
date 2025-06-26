import { axiosApi } from "@/axiosApi";

export const fetchVideoList = async (
  isPaginate = true,
  currentPage = 1,
  pagesize = 3
) => {
  try {
    const videoListResponse = await axiosApi.get(
      `v1/video/list?pageSize=${pagesize}&currentPage=${currentPage}&isPaginate=${isPaginate}`
    );
    return videoListResponse.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
