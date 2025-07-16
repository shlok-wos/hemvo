"use client";
import { Button, Card, Loader, Modal, PriceCard } from "@/components";
import { usePlanListHook } from "@/hooks/plan/planlist.hook";
import moment, { Moment } from "moment";
import {
  ArrowRight,
  CheckCircle,
  SealCheck,
  X,
  XCircle,
} from "@phosphor-icons/react";
import styles from "./Subscription.module.css";
import { cx } from "class-variance-authority";
import Script from "next/script";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const Subscription = () => {
  const searchParams = useSearchParams();
  const router: any = useRouter();
  const {
    isLoader,
    planList,
    planDetails,
    isCancelModal,
    handleOnClickPlan,
    handleCancelPlan,
    handleCancelPlanModal,
    subscriptionEventHandler,
    getSubscribedPlanDetails,
  } = usePlanListHook();

  const sessionId = searchParams?.get("session_id");
  useEffect(() => {
    if (sessionId) {
      subscriptionEventHandler(sessionId);
      getSubscribedPlanDetails();
      router.push("/dashboard/subscription");
    }
  }, [sessionId]);

  const expiryDate = moment(planDetails?.expire_date).format("DD/MM/YYYY");
  const isPlanActive = planDetails?.hasOwnProperty("is_active")
    ? planDetails?.is_active
    : false;

  useEffect(() => {
    // Check if the query parameter 'payment=success' exists in the URL
    const urlParams = new URLSearchParams(window.location.search);
    // console.log({ urlParams });

    if (urlParams.get("payment") === "success") {
      window.ADDREVENUE.sendEvent("purchase");
    }
  }, []);

  return (
    <>
      <Script
        src="https://app.ilonsi.com/script/purchase.min.js"
        strategy="beforeInteractive" // Ensures the script is loaded before rendering
        onLoad={() => {
          // Optional: Callback to confirm that the script has loaded
          console.log("purchase.js has been loaded");
        }}
      />
      <Script
        src="https://app.ilonsi.com/script/main.min.js"
        strategy="beforeInteractive" // Ensures the script is loaded before rendering
        onLoad={() => {
          // Optional: Callback to confirm that the script has loaded
          console.log("purchase.js has been loaded");
        }}
      />
      <Loader show={isLoader} />
      <Card className="mb-3" contentClassName="d-flex align-items-center justify-content-between">
        <h2 className="text-2xl fw-bold">Medlemskap</h2>
      </Card>
      {!isLoader && planDetails?.hasOwnProperty("is_active") && (
        <Card>
          <div className="d-flex align-items-center justify-content-between flex-wrap mb-3 gap-2">
            {isPlanActive ? (
              <div className="bg-lightgray fw-medium px-3 py-1 radius-sm">
                Aktiv Plan
              </div>
            ) : (
              <div className="text-danger bg-danger-light bg-accent fw-medium px-3 py-1 radius-sm">
                Din prenumeration har gått ut.
              </div>
            )}
            <div className="bg-lightgray fw-medium px-3 py-1 radius-sm">
              {planDetails?.daysLeft && (
                <>
                  {planDetails?.daysLeft} dagar kvar{" "}
                  <span className="text-gray mx-1">|</span>{" "}
                </>
              )}
              Utgångsdatum : <span className="text-danger">{expiryDate}</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-xl-row align-items-xl-center justify-content-xl-between mb-4 gap-2">
            <div className="w-xl-50">
              <div className="d-flex align-items-center mb-2">
                <h4 className="text-xl fw-bold">
                  {planDetails?.SubscriptionPlan?.name}
                </h4>
                {planDetails?.SubscriptionPlan?.is_popular && (
                  <div className="bg-accent text-sm text-g2 radius-sm px-3 fw-medium py-1 ms-2">
                    Populärast
                  </div>
                )}
              </div>
              <p className="text-sm text-gray lh-base">
                {planDetails?.SubscriptionPlan?.description}
              </p>
            </div>
            <div className="text-sm w-xl-50 text-xl-end">
              <span className="text-lg fw-bold">{planDetails?.amount}</span>
              /månaden
            </div>
          </div>
          <ul
            className={cx(
              styles.featureList,
              "ps-0 fw-medium d-flex flex-wrap column-gap-4"
            )}
          >
            {planDetails?.SubscriptionPlan?.features &&
              planDetails?.SubscriptionPlan?.features?.map(
                (listItem: any, listIndex: number) => {
                  return (
                    <li
                      className="d-flex align-items-center mb-3"
                      // key={`features-${priceItem?.id}-${priceDataIndex}-${listIndex}`}
                    >
                      <SealCheck
                        size={22}
                        color="#2A6EF4"
                        weight="duotone"
                        className="flex-shrink-0 me-2 icon-top-translateY"
                      />
                      {listItem}
                    </li>
                  );
                }
              )}
          </ul>
          <div className="text-end">
            {planDetails?.isCancelled ? (
              <span
                className={cx(
                  styles.planCancelled,
                  "text-danger bg-danger-light fw-medium px-3 py-1 radius-sm"
                )}
              >
                Din plan är uppsagd, men förmånerna fortsätter tills den löper
                ut.
              </span>
            ) : (
              <Modal
                open={isCancelModal}
                trigger={
                  <Button
                    variant={"danger"}
                    icon={<ArrowRight size={22} />}
                    iconPosition="end"
                    onClick={handleCancelPlanModal}
                  >
                    Avbryt plan
                  </Button>
                }
              >
                <div className={cx(styles.closeIcon, "p-3 mb-3")}>
                  <X size={60} weight="duotone" />
                </div>

                <h6 className="text-lg mb-5 text-center">
                  Är du säker på att du vill avbryta planen?
                </h6>

                <div className="d-flex align-items-center justify-content-center gap-3">
                  <Button
                    variant={"danger"}
                    icon={<CheckCircle size={22} weight="duotone" />}
                    iconPosition="end"
                    onClick={handleCancelPlan}
                  >
                    Ja
                  </Button>
                  <Button
                    variant={"accent"}
                    icon={<XCircle size={22} weight="duotone" />}
                    iconPosition="end"
                    onClick={handleCancelPlanModal}
                  >
                    inga
                  </Button>
                </div>
              </Modal>
            )}
          </div>
        </Card>
      )}

      {!isLoader && !isPlanActive && planList && planList.length > 0 && (
        <PriceCard planData={planList} handleOnClickPlan={handleOnClickPlan} />
      )}
    </>
  );
};
