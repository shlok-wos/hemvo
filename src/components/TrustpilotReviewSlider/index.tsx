"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./TrustpilotReviewSlider.module.css";
import {
  ArrowLeft,
  ArrowRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import { trustPilot } from "@/assets/images";
import Image from "next/image";
import { reviewTypes } from "@/types/review.types";
import { Icons } from "../../Const/Icons";
import { Button } from "../Button";

export const TrustpilotReviewSlider: React.FC<reviewListProps> = ({
  reviewListData,
  observerScroll,
}) => {
  return (
    <div className={`${styles.wrapper} space-top-md space-bottom-md`}>
      <div className="container">
        <div className={styles.sliderContainer}>
          <div
            className={`${styles.navBtnWrapper} d-flex w-full justify-content-between gap-2 mb-3`}
          >
            <button
              className={`${styles.navBtn} ${styles.navBtnPrev} review-prev`}
            >
              <ArrowLeft
                size={20}
                style={{ minHeight: "20px", minWidth: "20px" }}
                weight="duotone"
              />
            </button>
            <button
              className={`${styles.navBtn} ${styles.navBtnNext} review-next`}
            >
              <ArrowRight
                size={20}
                style={{ minHeight: "20px", minWidth: "20px" }}
                weight="duotone"
              />
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".review-prev",
              nextEl: ".review-next",
            }}
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            onReachEnd={() => observerScroll()}
          >
            {reviewListData?.rows?.map((review: any, index: number) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <div className={`${styles.stars} d-flex gap-1`}>
                    {Array.from(
                      { length: review?.ratings ?? 0 },
                      (_, index) => (
                        <div
                          key={index}
                          className={`${styles.star} ${styles.theme}`}
                        >
                          {Icons.iconStar}
                        </div>
                      )
                    )}
                  </div>
                  <h4 className={`${styles.title} clamp`}>{review.title}</h4>

                  <p className={`${styles.description} clamp clamp-3`}>
                    {review.description}
                  </p>
                  <p className={styles.byline}>{review.review_by}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className={`${styles.footer} d-flex flex-column justify-content-center align-items-center mt-3`}
        >
          <p>
            Betyg
            <strong> {reviewListData?.averageRating}</strong> baserat på{" "}
            <strong>{reviewListData?.totalItems} omdömen</strong>. Här är några
            av våra favoriter.
          </p>

          {/* <Image  
            width={120}
            height={40}
            src={trustPilot}
            className={styles.logo}
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

interface reviewListProps {
  reviewListData?: reviewTypes;
  observerScroll: () => void;
}
