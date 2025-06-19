import { fetchVideoList, reviewsList } from "@/actions";
import { reviewTypes } from "@/types/review.types";
import { useEffect, useState } from "react";

export const useHomeHook = () => {
  const [reviewList, setReviewList] = useState<reviewTypes>({} as reviewTypes);
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const [videoList, setVideoList] = useState<any[]>([]);
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageSize: 10,
  });

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const pageSize = 3;

  useEffect(() => {
    loadMoreVideos(page);
  }, [page]);

  useEffect(() => {
    getReviewList(paginationData);
  }, [paginationData?.currentPage]);

  const observerScroll = () => {
    setPaginationData((prevState) => ({
      ...prevState,
      currentPage: prevState?.currentPage + 1,
    }));
  };

  const loadMoreVideos = async (pageNum: number) => {
    try {
      setIsLoadingMore(true);
      const response = await fetchVideoList(true, pageNum, pageSize);

      if (response.status === 200) {
        const newVideos = response.data?.rows || [];
        const pageSizeUsed = response.data?.pageSize ?? pageSize;

        if (newVideos.length > 0) {
          setVideoList((prev) => [...prev, ...newVideos]);
        }

        if (newVideos.length < pageSizeUsed) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Video fetch error:", error);
      setHasMore(false);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const getReviewList = async (data: any) => {
    try {
      setIsLoader(true);
      const reviewListResp = await reviewsList(
        true,
        data?.currentPage,
        data?.pagesize
      );

      if (reviewListResp?.success) {
        const updatedReviewListData = {
          ...reviewListResp?.data,
          rows:
            data?.currentPage > 1
              ? [...reviewList?.rows, ...reviewListResp?.data?.rows]
              : reviewListResp?.data?.rows,
        };
        setReviewList(updatedReviewListData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoader(false);
    }
  };
  const triggerNextPage = () => setPage((prev) => prev + 1);

  return {
    isLoader,
    reviewList,
    videoList,
    isLoadingMore,
    hasMore,
    triggerNextPage,
    observerScroll,
  };
};
