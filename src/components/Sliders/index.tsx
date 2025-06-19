"use client";
import { ReactNode } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "../Button";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import "swiper/css";
import "swiper/css/navigation";
import { cx } from "class-variance-authority";

SwiperCore.use([Navigation]);

export const FQSwiper: React.FC<any> = ({
  config,
  children,
  className,
  isCustomArrow,
  isCustomArrowClass,
  ...rest
}: FQSwiperProps) => {
  return (
    <>
      <Swiper
        className={className}
        {...config}
        {...rest}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
      >
        {children}
      </Swiper>
      {isCustomArrow && (
        <div
          className={cx(
            isCustomArrowClass,
            "mt-4 mt-sm-0 text-center text-sm-end"
          )}
        >
          <Button
            variant={"accent"}
            icon={<ArrowLeft size={20} weight="duotone" />}
            shape={"round"}
            className="arrow-right arrow p-1"
          />
          <Button
            variant={"accent"}
            icon={<ArrowRight size={20} weight="duotone" />}
            shape={"round"}
            className="ms-3 arrow-left arrow p-1"
          />
        </div>
      )}
    </>
  );
};

interface FQSwiperProps {
  config: SwiperProps;
  children: ReactNode;
  className?: string;
  isCustomArrow?: boolean;
  isCustomArrowClass?: string;
}

export { AssistanceSlider } from "./AssistanceSlider/";
export { ReviewSlider } from "./ReviewSlider/";
