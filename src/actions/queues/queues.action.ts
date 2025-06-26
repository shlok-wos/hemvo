import { axiosApi } from "@/axiosApi";

export const queuesListByArea = async (
  areaId: number | "" = "",
  isPaginate: boolean = true,
  currentPage: number = 1,
  pageSize: number = 12
): Promise<any> => {
  try {
    const queryParams = new URLSearchParams({
      areaId: areaId.toString(),
      isPaginate: String(isPaginate),
      currentPage: String(currentPage),
      pageSize: String(pageSize),
    });

    const response = await axiosApi.get(
      `/v1/user/queue/list?${queryParams.toString()}`
    );
    return response.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const queuesJoin = async (queueId: number | "" = ""): Promise<any> => {
  try {
    const response = await axiosApi.get(`/v1/user/queue/join/${queueId}`);
    return response.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const fetchQueuesDetail = async (
  queueId: number | "" = ""
): Promise<any> => {
  try {
    const response = await axiosApi.get(`/v1/user/queue/details/${queueId}`);
    return response.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
