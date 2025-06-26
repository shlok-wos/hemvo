"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePlanListHook } from "../plan/planlist.hook";
import { getCookie } from "cookies-next";

export const useDashboardLayout = () => {
  const router = useRouter();
  const token = getCookie("_token");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const subscriptionPage = pathname.includes("/subscription");

  const { planDetails, isLoader } = usePlanListHook();
  const isActivate = planDetails?.hasOwnProperty("is_active")
    ? planDetails?.is_active
    : false;

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);

  return {
    sidebarOpen,
    setSidebarOpen,
    subscriptionPage,
    isLoader,
    isActivate,
  };
};
