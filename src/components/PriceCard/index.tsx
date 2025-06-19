"use client";
import { Button, Card } from "@/components";
import { cx } from "class-variance-authority";
import { ReactNode } from "react";
import { ArrowRight, SealCheck } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { PlanList } from "@/types/subscription.types";
import styles from "./PriceCard.module.css";

export const PriceCard: React.FC<PriceCardProps> = ({
  buttonText = "Bli medlem",
  planData,
  buttonIcon = <ArrowRight weight="duotone" size={22} />,
  handleOnClickPlan,
}) => {
  const pathname = usePathname();
  const dSubscriptionPriceCard = ["/dashboard/subscription"];

  return (
    <>
      <div
        className={cx(styles.pricingGrid, {
          [styles.dashboardGrid]: pathname.includes("dashboard"),
        })}
      >
        {planData &&
          planData?.length > 0 &&
          planData?.map((priceItem: any, priceDataIndex: number) => {
            return (
              <div
                className={styles.pricingCard}
                key={`price-${priceItem?.id}${priceDataIndex}`}
              >
                <Card
                  interactive
                  className={cx(
                    styles.popularPlan,
                    "h-100",
                    dSubscriptionPriceCard?.includes(pathname) &&
                      styles.adminCardWrap
                  )}
                  active={priceItem?.isPopular}
                >
                  <div className="d-flex flex-column h-100">
                    <div className="d-flex flex-column flex-xxl-row align-items-start justify-content-xxl-between mb-4 gap-2">
                      <div className={styles.pricingTitle}>
                        <h4 className="text-lg fw-bold mb-2">
                          {priceItem?.plan}
                          {priceItem?.isPopular && (
                            <span className="bg-accent text-sm text-g2 radius-sm px-3 fw-medium py-1 ms-2">
                              Populärast
                            </span>
                          )}
                        </h4>
                        <p className="text-sm text-gray lh-base">
                          {priceItem?.label}
                        </p>
                      </div>
                      <div className="text-sm text-xl-end d-flex justify-content-xl-end align-items-center flex-wrap">
                        <span className={cx(styles.planPrice, "fw-bold")}>
                          {priceItem?.price} KR
                        </span>
                        /månaden
                      </div>
                    </div>
                    <ul className="ps-0 fw-medium">
                      {priceItem?.features &&
                        priceItem?.features?.map(
                          (listItem: any, listIndex: number) => {
                            return (
                              <li
                                className="d-flex align-items-center mb-3"
                                key={`features-${priceItem?.id}-${priceDataIndex}-${listIndex}`}
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
                  </div>
                  <Button
                    icon={buttonIcon}
                    full
                    onClick={() =>
                      handleOnClickPlan(
                        priceItem?.subscriptionPlanId,
                        priceItem?.gatewayPlanId
                      )
                    }
                    variant={priceItem.variant ? undefined : "accent"}
                  >
                    {buttonText}
                  </Button>
                  <p className="mt-3">
                    Gäller enligt våra villkor -{" "}
                    <a
                      className="fw-medium"
                      href="https://flatquest.se/terms-and-conditions"
                      target="_blank"
                    >
                      läs här
                    </a>
                  </p>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

interface PriceCardProps {
  buttonText?: string;
  buttonIcon?: ReactNode;
  planData?: PlanList[];
  handleOnClickPlan?: any;
}
