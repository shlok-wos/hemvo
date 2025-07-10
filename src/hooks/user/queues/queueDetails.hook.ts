"use client";
import { queuesAnalyticsList, queuesJoin } from "@/actions";
import {
  AreaType,
  QueueDataType,
  QueueItemType,
  QueuePaginationData,
} from "@/types/queue.types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useQueueDetailsHook = () => {
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

  useEffect(() => {
    getQueuesDetails(paginationData);
  }, [paginationData?.areaId, paginationData?.currentPage]);

  const handleSelectChange = (value: any, name: string) => {
    setPaginationData((prevData: any) => ({
      ...prevData,
      [name]: value.value,
    }));
  };

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
      const getQueuesDetails = await queuesAnalyticsList(data?.areaId, false);

      if (getQueuesDetails.success) {
        setQueuesData(getQueuesDetails?.data);
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

  return {
    isLoader,
    queuesData,
    isJoinModal,
    areaListData,
    selectedQueue,
    paginationData,
    isReadMoreModal,
    isQueueJoinLoader,
    doQueueJoin,
    handlePageChange,
    readMoreHandler,
    joinModalHandler,
    handleSelectChange,
    cancelJoinModalHandler,
  };
};
