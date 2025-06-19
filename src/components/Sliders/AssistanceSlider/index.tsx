import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FQSwiper } from "..";
import { cx } from "class-variance-authority";
import styles from "./AssistanceSlider.module.css";
import Link from "next/link";
import DOMPurify from "dompurify";

export const AssistanceSlider: React.FC<any> = ({
  blogListData,
}: IAssistanceSlider) => {
  return (
    <FQSwiper
      config={{
        slidesPerView: 1.5,
        spaceBetween: 20,
        centeredSlides: false,
        loop: true,
        grabCursor: true,
        autoplay: true,
        modules: [Autoplay],
        breakpoints: {
          0: {
            slidesPerView: 1.3,
            spaceBetween: 15,
          },
          375: {
            slidesPerView: 1.6,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3.8,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1800: {
            slidesPerView: 5,
            spaceBetween: 64,
          },
        },
      }}
      isCustomArrow={true}
      isCustomArrowClass={cx([styles.assistanceSliderArrowWrap])}
    >
      {blogListData?.rows?.map((post: any, idx: any) => {
        const description = post.description
          ? DOMPurify.sanitize(post.description, {
              ALLOWED_TAGS: [],
              ALLOWED_ATTR: [],
            })
          : "";
        return (
          <SwiperSlide key={`blogs-${idx}`}>
            <Link
              href={"/blogspot/" + post?.slug}
              className={cx([styles.card], "text-decoration-none w-100 h-100")}
            >
              <div className="ratio ratio-1x1 mb-3 bg-white-gray radius-md">
                <img
                  src={post.blog_image}
                  alt={post.title}
                  className="radius-inherit object-fit-cover"
                />
              </div>

              <h4 className="text-lg text-dark clamp clamp-3 fw-bold mb-2">
                {post.title}
              </h4>
              <div
                className="text-gray text-sm lh-base clamp clamp-3"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </FQSwiper>
  );
};

interface IAssistanceSlider {
  blogListData?: any;
}
