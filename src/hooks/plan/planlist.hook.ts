import { cancelPlan, checkoutSession, subscribedPlan, subscriptionPlansList } from "@/actions";
import { PlanDetails, PlanList } from "@/types/subscription.types";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import moment, { Moment } from "moment";
import { trackTikTokEvent } from "@/services/tiktokEvents";
// import { useAppDispatch, useAppSelector } from "@/store";
// import { subscriptionPlanList } from "@/reducers/staticData.reducer";

export const usePlanListHook = () => {
  const router: any = useRouter();
  // const pathname = usePathname()
  const [planDetails, setPlanDetails] = useState<PlanDetails>({} as PlanDetails);
  const [planList, setPlanList] = useState<PlanList[]>([{}] as PlanList[]);
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const [isCancelModal, setIsCancelModal] = useState<boolean>(false);
  const token = getCookie("_token");
  // const storedPlans = useAppSelector((state) => state.staticData.subscriptionPlanList);
  // const dispatch = useAppDispatch()

  useEffect(() => {
    getSubscriptionList();
    getSubscribedPlanDetails();
  }, []);

  const getSubscribedPlanDetails = async () => {
    try {
      if (token) {
        const subscribedPlanResponse = await subscribedPlan();
        const planData = subscribedPlanResponse?.data;
        const planfeatures = planData?.SubscriptionPlan?.features.split(",").map((item: any) => item.trim());

        const subscribedPlanFeatures = { SubscriptionPlan: { ...planData?.SubscriptionPlan, features: planfeatures } };
        const updatedPlanList: PlanDetails = { ...planData, ...subscribedPlanFeatures };
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
      setIsLoader(true);
      // if (storedPlans?.length === 0) {
      const subscriptionPlanListResp = await subscriptionPlansList();
      if (subscriptionPlanListResp.success) {
        const updatedPlanList: PlanList[] = subscriptionPlanListResp?.data?.map((element: any, key: number) => {
          const resultArray = element?.features.split(",").map((item: any) => item.trim());
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
        });

        // dispatch(subscriptionPlanList(updatedPlanList))
        setPlanList(updatedPlanList);
      }
      // } else {
      //   setPlanList(storedPlans);
      // }
      setIsLoader(false);
      // }
    } catch (error) {
      setIsLoader(false);
      console.log(error);
    }
  };

  const handleOnClickPlan = async (subscriptionPlanId: number, gatewayPlanId: string) => {
    try {
      if (token) {
        const checkoutSessionData = {
          subscriptionPlanId: subscriptionPlanId,
          gatewayPlanId: gatewayPlanId,
        };
        trackTikTokEvent("clickedPlanButton", checkoutSessionData)
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
      const cancelPlanResponse: any = await cancelPlan({ paymentId: planDetails?.id });
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
    isLoader,
    planDetails,
    planList,
    isCancelModal,
    handleOnClickPlan,
    handleCancelPlan,
    handleCancelPlanModal,
  };
};
