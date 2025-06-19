import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MapPinLine, Star } from "@phosphor-icons/react/dist/ssr";
import { reviewSliderData } from "@/static";
import { cx } from "class-variance-authority";
import { Card, FQSwiper } from "@/components";
import styles from "./ReviewSlider.module.css";

export const ReviewSlider: React.FC<any> = () => {
  return (
    <FQSwiper
      className={styles.reviewSlider}
      config={{
        modules: [Autoplay],
        speed: 4000,
        autoplay: {
          delay: 0,
        },
        slidesPerView: 1,
        spaceBetween: 12,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        wrapperClass: "space-top-sm space-bottom-sm",
        breakpoints: {
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          350: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 1.4,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3.1,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 3.5,
            spaceBetween: 48,
          },
        },
      }}
    >
      {reviewSliderData &&
        reviewSliderData.map((item: any, idx: number) => {
          return (
            <SwiperSlide key={`sdf-${idx}`}>
              <Card className={styles.reviewCard}>
                <div className={cx(styles.rating, "mb-3")}>
                  {new Array(item.rating).fill("").map((star: any, sidx: number) => {
                    return <Star key={`shgd-${idx}-${sidx}`} size={20} weight="duotone" color="#C6B626" />;
                  })}
                </div>

                <p className="text-md text-gray mb-4">{item.review}</p>

                <h6 className="text-lg mb-2">
                  {item.name} <span className="text-gray fw-normal text-base">({item.plan})</span>
                </h6>
                <div className="text-base d-flex align-items-center">
                  <MapPinLine size={20} weight="duotone" className="me-1" />
                  {item.location}
                </div>
              </Card>
            </SwiperSlide>
          );
        })}
    </FQSwiper>
  );
};
