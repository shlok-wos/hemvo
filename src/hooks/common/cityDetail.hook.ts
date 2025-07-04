"use client";
import { doFetchAreas, doFetchQueuesByArea, queuesJoin } from "@/actions";
import {
  AreaListType,
  AreaType,
  QueueDataType,
  QueueItemType,
  QueuePaginationData,
} from "@/types/cityQueue.types";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useCityDetailHook = () => {
  const router = useRouter();

  const [queuesData, setQueuesData] = useState<QueueDataType>(
    {} as QueueDataType
  );
  const [areaListData, setAreaListData] = useState<AreaType[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const [isQueueJoinLoader, setIsQueueJoinLoader] = useState<boolean>(false);
  const [paginationData, setPaginationData] = useState<QueuePaginationData>({
    areaId: "",
    currentPage: 1,
    pageSize: 12,
    isPaginate: true,
    search: "",
  });
  const [isJoinModal, setIsJoinModal] = useState<boolean>(false);
  const [isReadMoreModal, setIsReadMoreModal] = useState<boolean>(false);
  const [selectedQueue, setSelectedQueue] = useState<QueueItemType>(
    {} as QueueItemType
  );
  const [allAreaList, setAllAreaList] = useState<AreaListType[]>([]);
  const [isAreaLoader, setIsAreaLoader] = useState<boolean>(true);

  useEffect(() => {
    getAreasList();
  }, []);

  useEffect(() => {
    getQueuesDetails(paginationData);
  }, [paginationData?.areaId, paginationData?.currentPage]);

  const handleSelectChange = (value: any, name: string) => {
    setPaginationData((prevData: any) => ({
      ...prevData,
      [name]: value.value,
    }));
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event?.target;

    setPaginationData((prevData: any) => ({
      ...prevData,
      [name]: value.value,
    }));

    debounceSearchHandler({
      ...paginationData,
      [name]: value,
      currentPage: 1,
    });
  };

  const debounceSearchHandler = useCallback(
    debounce(async (data) => {
      await getQueuesDetails(data);
    }, 1000),
    []
  );

  const joinModalHandler = (data: any = {}) => {
    if (data && !data?.joined) {
      doQueueJoin(data);
    }

    if (data && data?.joined) {
      setSelectedQueue(data);
      setIsJoinModal(!isJoinModal);
    }
  };

  const readMoreHandler = (data: any = {}) => {
    setIsReadMoreModal(!isReadMoreModal);
    if (Object?.keys(data)?.length > 0) {
      setSelectedQueue(data);
    }

    if (isReadMoreModal) {
      setSelectedQueue({} as QueueItemType);
    }
  };

  const cancelJoinModalHandler = () => {
    setIsJoinModal(!isJoinModal);
  };

  const getQueuesDetails = async (data: QueuePaginationData) => {
    try {
      setIsLoader(true);
      const getQueuesAreaDetails = await doFetchQueuesByArea(
        data?.areaId,
        data?.isPaginate,
        data?.currentPage,
        data?.pageSize,
        data?.search
      );
      if (getQueuesAreaDetails.success) {
        const areaListResponse = [
          {
            id: "",
            value: "",
            label: "Hemvo Bostadsköer",
          },
          ...getQueuesAreaDetails?.data?.areas?.map((data: any) => ({
            id: data?.id,
            value: data?.id,
            label: data?.name,
          })),
        ];

        setAreaListData(areaListResponse);
        setQueuesData({
          ...getQueuesAreaDetails?.data,
          areas: areaListResponse,
        });
      }
      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.log(error);
    }
  };

  const doQueueJoin = async (data: any = {}) => {
    try {
      setIsQueueJoinLoader(true);

      const getQueuesJoinDetails = await queuesJoin(
        data?.id ? data?.id : selectedQueue?.id
      );
      if (getQueuesJoinDetails?.success) {
        if (data?.joined) {
          setIsJoinModal(!isJoinModal);
        }
        setSelectedQueue({} as QueueItemType);
        getQueuesDetails(paginationData);
        toast?.success(getQueuesJoinDetails?.message);
      } else {
        toast?.error(getQueuesJoinDetails?.message);
        if (getQueuesJoinDetails?.data?.buyPlan) {
          router.push("/dashboard/subscription");
        }
      }
      setIsQueueJoinLoader(false);
    } catch (error) {
      setIsQueueJoinLoader(false);
      console.log(error);
    }
  };

  const handlePageChange = (currentPage: any) => {
    setPaginationData((prevData) => ({
      ...prevData,
      currentPage: currentPage,
    }));
  };

  const getAreasList = async () => {
    try {
      setIsAreaLoader(true);
      const areasListResponse = await doFetchAreas();

      if (areasListResponse.success) {
        setAllAreaList(areasListResponse?.data);
      }
      setIsAreaLoader(false);
    } catch (error) {
      setIsAreaLoader(false);
      console.log(error);
    }
  };

  return {
    router,
    isLoader,
    queuesData,
    allAreaList,
    isJoinModal,
    isAreaLoader,
    areaListData,
    selectedQueue,
    paginationData,
    isReadMoreModal,
    isQueueJoinLoader,
    doQueueJoin,
    readMoreHandler,
    joinModalHandler,
    handlePageChange,
    handleInputChange,
    handleSelectChange,
    cancelJoinModalHandler,
  };
};
