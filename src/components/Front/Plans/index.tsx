"use client";
import { Loader, PriceCard } from "@/components";
import { cx } from "class-variance-authority";
import { ArrowRight } from "@phosphor-icons/react";
import { usePlanListHook } from "@/hooks/plan/planlist.hook";
export const Plans = () => {
  const { isLoader, planList, handleOnClickPlan } = usePlanListHook();
  return (
    <div>
      <Loader show={isLoader} />
      <section className={cx("bg-accent space-margin-bottom-sm space-top-sm space-bottom-lg")}>
        <div className="container">
          <div className="text-center mb-3 mb-lg-5">
            <h2 className="text-3xl mb-2 mb-xxl-3">Priser för dig som vill hitta en bostad.</h2>
            <p className="text-md text-gray">Enkel prissättning för dig som letar efter ett hem.</p>
          </div>
          {planList.length > 0 && !isLoader && (
            <PriceCard
              planData={planList}
              handleOnClickPlan={handleOnClickPlan}
              buttonText="Bli medlem"
              buttonIcon={<ArrowRight size={20} weight="duotone" />}
            />
          )}
        </div>
      </section>
    </div>
  );
};
