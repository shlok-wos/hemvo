"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./VideoSider.module.css";
import {
  ArrowLeft,
  ArrowRight,
  CaretLeft,
  CaretRight,
  Play,
} from "@phosphor-icons/react";
import clsx from "clsx";

const VideoCard = ({ video, index }) => {
  const videoRef = React.useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showPoster, setShowPoster] = React.useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowPoster(false);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoClick = () => {
    isPlaying ? handlePause() : handlePlay();
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowPoster(true);
  };

  return (
    <div className={styles.videoCard}>
      <div
        className={`${styles.videoWrapper} ratio ratio-9x16`}
        onClick={handleVideoClick}
      >
        {/* {showPoster && (
          <img
            src={video.video_thubnail}
            alt={video.title}
            className={`${styles.customPoster} custom-poster`}
          />
        )} */}
        <video
          ref={videoRef}
          src={video.video_src}
          className={styles.video}
          muted
          playsInline
          onEnded={handleVideoEnded}
        />
        {!isPlaying && (
          <button
            className={`${styles.playButton} play-btn`}
            onClick={handlePlay}
            aria-label={`Play ${video.title}`}
          >
            <Play style={{ minHeight: "20px", minWidth: "20px" }} size={32} />
          </button>
        )}
      </div>

      <div className={styles.cardBody}>
        <h4 className="text-center">{video.title}</h4>
      </div>
    </div>
  );
};

export const VideoSlider = ({
  videoList,
  hasMore,
  triggerNextPage,
  isLoadingMore,
}) => {
  return (
    <div
      className={`${styles.videoSliderWrapper} bg-accent space-top-md space-bottom-md`}
    >
      <div className="container">
        <div className={clsx(styles.videoSliderInner,"position-relative")}>
            <button
              className={`${styles.navBtn} ${styles.navBtnPrev} video-prev position-absolute top-50 translate-middle-y z-3`}
              aria-label="Previous videos"
            >
              <ArrowLeft
                size={20}
                weight="duotone"
                style={{ minHeight: "20px", minWidth: "20px" }}
              />
            </button>
            <button
              className={`${styles.navBtn} ${styles.navBtnNext} video-next position-absolute top-50 translate-middle-y z-3`}
              aria-label="Next videos"
            >
              <ArrowRight
                size={20}
                weight="duotone"
                style={{ minHeight: "20px", minWidth: "20px" }}
              />
            </button>
          

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            navigation={{
              prevEl: ".video-prev",
              nextEl: ".video-next",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            onReachEnd={() => {
              if (hasMore && !isLoadingMore) {
                triggerNextPage();
              }
            }}
          >
            {videoList.map((video, index) => {
              const isLast = index === videoList.length - 1;
              return (
                <SwiperSlide key={video.id || index}>
                  <div style={{ width: "100%" }}>
                    <VideoCard
                      video={{
                        title: video.title,
                        video_src: video.url + video.mediaName,
                        // video_thubnail: video.thumbnail,
                      }}
                      index={index}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
