"use client";
import { fetchQueuesDetail } from "@/actions";
import { QueueDetailType } from "@/types/queue.types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useQueueDetailsHook = () => {
  const params = useParams();

  const [queuesData, setQueuesData] = useState<QueueDetailType>(
    {} as QueueDetailType
  );
  const [isLoader, setIsLoader] = useState<boolean>(true);

  useEffect(() => {
    if (params?.detail) {
      doFetchQueueDetails(params?.detail);
    }
  }, [params?.detail]);

  const doFetchQueueDetails = async (id: any) => {
    try {
      setIsLoader(true);
      const queuesDetailsResponse = await fetchQueuesDetail(id);

      if (queuesDetailsResponse?.success) {
        setQueuesData(queuesDetailsResponse?.data);
      }
      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.log(error);
    }
  };

  return {
    isLoader,
    queuesData,
  };
};
