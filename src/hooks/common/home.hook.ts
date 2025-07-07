"use client";
import {
  blogList,
  cancelPlan,
  checkoutSession,
  fetchVideoList,
  reviewsList,
  subscribedPlan,
  subscriptionPlansList,
} from "@/actions";
import { trackTikTokEvent } from "@/services/tiktokEvents";
import { BlogListTypes, BlogPaginationData } from "@/types/blog.types";
import { reviewTypes } from "@/types/review.types";
import { PlanDetails, PlanList } from "@/types/subscription.types";
import { getCookie } from "cookies-next";
import moment, { Moment } from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePathname, useSearchParams } from "next/navigation";

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
  const [blogListData, setBlogListData] = useState<BlogListTypes>(
    {} as BlogListTypes
  );
  const [blogPaginationData, setBlogPaginationData] =
    useState<BlogPaginationData>({} as BlogPaginationData);
  const [isBlogLoader, setIsBlogLoader] = useState<boolean>(true);

  const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const isblogsListPage = true;
  // const pathname = true;
  const isblogsListPage = pathname.includes("/blogspot");
  const router: any = useRouter();
  const [planDetails, setPlanDetails] = useState<PlanDetails>(
    {} as PlanDetails
  );
  const [planList, setPlanList] = useState<PlanList[]>([{}] as PlanList[]);
  const [isPlanListLoader, setIsPlanListLoader] = useState<boolean>(false);
  const [isCancelModal, setIsCancelModal] = useState<boolean>(false);
  const token = getCookie("_token");

  useEffect(() => {
    loadMoreVideos(page);
  }, [page]);

  useEffect(() => {
    getReviewList(paginationData);
  }, [paginationData?.currentPage]);

  useEffect(() => {
    getSubscriptionList();
    getSubscribedPlanDetails();
  }, []);

  const observerScroll = () => {
    setPaginationData((prevState) => ({
      ...prevState,
      currentPage: prevState?.currentPage + 1,
    }));
  };

  useEffect(() => {
    let defaultPaginationData = {
      currentPage: 1,
      pageSize: 12,
      totalItems: 0,
    };
    if (!isblogsListPage) {
      defaultPaginationData = {
        currentPage: 1,
        pageSize: 8,
        totalItems: 0,
      };
    }
    setBlogPaginationData(defaultPaginationData);
    if (defaultPaginationData?.pageSize) {
      getBlogList(
        defaultPaginationData?.currentPage,
        defaultPaginationData?.pageSize
      );
    }
  }, [pathname]);

  // useEffect(() => {
  //   const hash = window.location.hash;

  //   if (hash) {
  //     const el = document.querySelector(hash);
  //     if (el) {
  //       setTimeout(() => {
  //         el.scrollIntoView({ behavior: "smooth" });
  //       }, 100);
  //     }
  //   }
  // }, [pathname, searchParams]);

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

  const getBlogList = async (currentPage: any, pageSize: any = 9) => {
    try {
      setIsBlogLoader(true);
      let apiUrl = `?currentPage=${currentPage}&pageSize=${pageSize}`;
      apiUrl += !isblogsListPage ? `&isHome=1` : "";
      const getBlogList = await blogList(apiUrl);
      if (getBlogList.success) {
        setBlogListData(getBlogList.data);
        if (isblogsListPage) {
          setBlogPaginationData({
            ...blogPaginationData,
            pageSize: pageSize,
            currentPage: currentPage,
            totalItems: Number(getBlogList.data.totalItems),
          });
        }
      }
      setIsBlogLoader(false);
    } catch (error) {
      setIsBlogLoader(false);
      console.log(error);
    }
  };

  const handlePageChange = (currentPage: any) => {
    getBlogList(currentPage, blogPaginationData?.pageSize);
    setBlogPaginationData((prevBlogPaginationData) => {
      return { ...prevBlogPaginationData, currentPage: currentPage };
    });
  };

  const getSubscribedPlanDetails = async () => {
    try {
      if (token) {
        const subscribedPlanResponse = await subscribedPlan();
        const planData = subscribedPlanResponse?.data;
        const planfeatures = planData?.SubscriptionPlan?.features
          .split(",")
          .map((item: any) => item.trim());

        const subscribedPlanFeatures = {
          SubscriptionPlan: {
            ...planData?.SubscriptionPlan,
            features: planfeatures,
          },
        };
        const updatedPlanList: PlanDetails = {
          ...planData,
          ...subscribedPlanFeatures,
        };
        updatedPlanList.daysLeft = await getExpiryDays(planData?.expire_date);
        updatedPlanList.isCancelled = planData?.payment_status === "CANCELLED";
        setPlanDetails(updatedPlanList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getExpiryDays = (expiryDate: any) => {
    const todayDate: Moment = moment();
    const endDate: Moment = moment(expiryDate);

    const dateDuration = moment.duration(endDate.diff(todayDate));
    let daysLeft: number = Math.ceil(dateDuration.asDays());
    return daysLeft;
  };

  const getSubscriptionList = async () => {
    try {
      // if (pathname.includes("/subscription") || pathname.includes("/plans")) {
      setIsPlanListLoader(true);
      // if (storedPlans?.length === 0) {
      const subscriptionPlanListResp = await subscriptionPlansList();
      if (subscriptionPlanListResp.success) {
        const updatedPlanList: PlanList[] = subscriptionPlanListResp?.data?.map(
          (element: any, key: number) => {
            const resultArray = element?.features
              .split(",")
              .map((item: any) => item.trim());
            return {
              plan: element?.name,
              label: element?.description,
              price: element?.price,
              isPopular: element?.is_popular,
              variant: element?.is_popular,
              features: resultArray,
              gatewayPlanId: element?.gateway_plan_id,
              subscriptionPlanId: element?.id,
            };
          }
        );

        // dispatch(subscriptionPlanList(updatedPlanList))
        setPlanList(updatedPlanList);
      }
      // } else {
      //   setPlanList(storedPlans);
      // }
      setIsPlanListLoader(false);
      // }
    } catch (error) {
      setIsPlanListLoader(false);
      console.log(error);
    }
  };

  const handleOnClickPlan = async (
    subscriptionPlanId: number,
    gatewayPlanId: string
  ) => {
    try {
      if (token) {
        const checkoutSessionData = {
          subscriptionPlanId: subscriptionPlanId,
          gatewayPlanId: gatewayPlanId,
        };
        trackTikTokEvent("clickedPlanButton", checkoutSessionData);
        // setIsLoader(true);
        const checkoutSessionResp = await checkoutSession(checkoutSessionData);
        if (checkoutSessionResp.success && typeof window !== "undefined") {
          window.location.href = checkoutSessionResp?.data?.returnUrl;
        } else {
          toast.error(checkoutSessionResp?.message);
          // router.push("/dashboard")
        }
      } else {
        router.push("/create-account");
      }
      // setIsLoader(false);
    } catch (error: any) {
      setIsLoader(false);
      console.log(error);
      // toast.error("Something Went Wrong")
    }
  };

  const handleCancelPlan = async () => {
    try {
      const cancelPlanResponse: any = await cancelPlan({
        paymentId: planDetails?.id,
      });
      if (cancelPlanResponse?.success) {
        const cancelPlanData = cancelPlanResponse?.data;
        toast.success(cancelPlanResponse.message);
        setPlanDetails((prevPlanDetails) => ({
          ...prevPlanDetails,
          isCancelled: cancelPlanData?.payment_status === "CANCELLED",
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelPlanModal = () => {
    setIsCancelModal(!isCancelModal);
  };

  return {
    hasMore,
    isLoader,
    planList,
    videoList,
    reviewList,
    blogListData,
    isBlogLoader,
    isLoadingMore,
    isPlanListLoader,
    observerScroll,
    triggerNextPage,
    handleOnClickPlan,
  };
};
