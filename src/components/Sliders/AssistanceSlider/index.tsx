import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FQSwiper } from "..";
import { cx } from "class-variance-authority";
import styles from "./AssistanceSlider.module.css";
import Link from "next/link";
import DOMPurify from "dompurify";
import Image from "next/image";
import clsx from "clsx";

interface IAssistanceSlider {
  blogListData?: any;
  variant?: "primary" | "imgslide"; // Add this
  slidePerView?: any;
}

export const AssistanceSlider: React.FC<IAssistanceSlider> = ({
  blogListData,
  variant = "primary", // Default to primary
  slidePerView,
}) => {
  return (
    <FQSwiper
      isCustomArrow={true}
      config={{
        spaceBetween: 15,
        centeredSlides: false,
        loop: true,
        grabCursor: true,
        autoplay: {
          duration: 1000,
        },
        modules: [Autoplay],
        breakpoints: slidePerView,
      }}
      isCustomArrowClass={cx([styles.assistanceSliderArrowWrap])}
    >
      {blogListData?.rows?.map((post: any, idx: number) => {
        const description = post.description
          ? DOMPurify.sanitize(post.description, {
              ALLOWED_TAGS: [],
              ALLOWED_ATTR: [],
            })
          : "";

        return (
          <SwiperSlide key={`blogs-${idx}`}>
            {variant === "primary" && (
              <Link
                href={`/blogspot/${post?.slug || post?.idx}`}
                className={cx(
                  [styles.card],
                  "text-decoration-none w-100 h-100"
                )}
              >
                <div className="ratio ratio-1x1 mb-3 bg-white-gray radius-md">
                  <img
                    src={
                      post.blog_image ||
                      `${post.url}${post.url.endsWith("/") ? "" : "/"}${
                        post.media
                      }`
                    }
                    alt={post.title || post?.name}
                    className="radius-inherit object-fit-cover"
                  />
                </div>

                <h4 className="text-lg text-dark clamp clamp-3 fw-bold mb-2">
                  {post.title || post?.name}
                </h4>
                <div
                  className="text-gray text-sm lh-base clamp clamp-3"
                  dangerouslySetInnerHTML={{ __html: description || "" }}
                />
              </Link>
            )}

            {variant === "imgslide" && (
              <div className="position-relative w-100 h-100">
                <Image
                  height={320}
                  width={455}
                  src={
                    post.blog_image ||
                    `${post.url}${post.url.endsWith("/") ? "" : "/"}${
                      post.media
                    }`
                  }
                  alt={post.title || post.name}
                  className=" object-fit-cover radius-md w-100"
                  unoptimized
                />
                <div
                  className={clsx(
                    styles.imgTitle,
                    "space-xs-p position-absolute"
                  )}
                >
                  <p className="space-3xs-mb text-xl text-white fw-bolder">
                    {post.imageTitle || post.name}
                  </p>
                  <p className="text-base text-white fw-medium ">
                    {post.queue || ""}
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </FQSwiper>
  );
};
