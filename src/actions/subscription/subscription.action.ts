import { axiosApi } from "@/axiosApi";

export const subscriptionPlansList = async () => {
  try {
    const subscriptionPlanListResponse = await axiosApi.get(
      "/v1/subscription-plan/list"
    );
    return subscriptionPlanListResponse.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const checkoutSession = async (checkoutSessionPayload: any) => {
  try {
    const checkoutSessionResponse = await axiosApi.post(
      "/v1/user/payment/checkout-session",
      checkoutSessionPayload
    );
    return checkoutSessionResponse.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const subscribedPlan = async () => {
  try {
    const subscriptionPlanListResponse = await axiosApi.get(
      "/v1/user/payment/details"
    );
    return subscriptionPlanListResponse.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const cancelPlan = async (cancelPlanPayload: any) => {
  try {
    const cancelPlanResponse = await axiosApi.post(
      "/v1/user/payment/cancel-plan",
      cancelPlanPayload
    );
    return cancelPlanResponse.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const eventHandler = async (sessionId: any) => {
  try {
    const subscriptionPlanListResponse = await axiosApi.get(
      `v1/user/payment/event-handle?session_id=${sessionId}`
    );
    return subscriptionPlanListResponse.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
