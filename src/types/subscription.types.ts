export type SubscriptionPlanType = [
  {
    features?: [{}];
  }
];

export interface PlanList {
  plan: string;
  label: string;
  price: string;
  isPopular: boolean;
  variant: boolean;
  features: string;
  gatewayPlanId: string;
  subscriptionPlanId: string;
}

export interface PlanDetails {
  SubscriptionPlan?: any;
  amount?: string;
  auto_renew?: boolean;
  createdAt?: string;
  currency?: string;
  expire_date?: string;
  id?: number
  is_active?: boolean;
  payload?: string;
  payment_status?: string;
  start_date?: string;
  subscription_plan_id?: number;
  transaction_id?: string;
  updatedAt?: string;
  user_id?: number;
  daysLeft?: number;
  isCancelled?: boolean
}
