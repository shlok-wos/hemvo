"use client";
import { AssistanceSlider, Button, Input } from "@/components";
import { Icons } from "@/Const/Icons";
import clsx from "clsx";

import styles from "../page.module.css";
import Image from "next/image";

import { cityDetailCard, cityQueue } from "@/Const/data";
import { useBlogListHook } from "@/hooks/user/blogs/blogList.hook";
import { ArrowRight } from "@phosphor-icons/react";
export default function CityDetail() {
  const { blogListData } = useBlogListHook();
  return (
    <>
      <section className="city-detail space-sm-mt">
        <div className="container">
          <div className="space-xs-mb ">
            <Input
              className={clsx(styles.secInput, styles.bigInput)}
              secInput={true}
              id="searchBox"
              type="text"
              name="search"
              // label="E-post*"
              placeholder="Sök på stad eller område"
              icon={
                <>
                  <span className="d-flex align-items-center justify-content-center">
                    {Icons.search}
                  </span>
                </>
              }
              parentClassName="mb-2 mb-xl-3"
              iconClassCommon="email-ico-translateY"
              // errorMessage={errorMessage?.email}
              // value={userData?.email}
              // onChange={handleInputChange}
              autoFocus
            />
          </div>
          <p className="text-lg text-dark fw-semibold space-xs-mb">
            24 bostadsköer{" "}
            <span className="text-gray"> (206 tillgängliga totalt)</span>
          </p>

          <div className={clsx(styles.cityCardWrapper)}>
            {cityDetailCard.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className={clsx(
                      styles.citydetailCard,
                      "card space-xs-p d-flex flex-column gap-2xs radius-xs"
                    )}
                  >
                    <Image src={item.image} alt="city" width={60} height={40} />
                    <div>
                      <p className="text-lg text-dark fw-semibold mb-2">
                        {item.title}
                      </p>
                      <p className="text-base text-gray fw-medium clamp clamp-2">
                        {item.text}
                      </p>
                    </div>
                    <div className="d-flex gap-3xs flex-wrap flex-md-nowrap">
                      <button
                        className={clsx(
                          styles.cityDetailBtn,
                          styles.joinBtn,
                          "cursor-pointer text-theme bg-accent fw-semibold border-0 "
                        )}
                      >
                        Gå med
                      </button>
                      <button
                        className={clsx(
                          styles.cityDetailBtn,
                          styles.readMoreBtn,
                          "fw-semibold cursor-pointer"
                        )}
                      >
                        Läs mer
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <section id="assistance" className="space-lg-py position-relative">
            <div className="container d-flex align-items-center justify-content-between">
              <div className="section-title-right-space w-100 mb-sm-3  ">
                <h2 className="text-3xl fw-bold mb-2 mb-xxl-3">
                  Utforska köerna
                </h2>
              </div>
            </div>
            <div className={clsx(styles.onlyImgSlider, "  position-relative")}>
              <AssistanceSlider blogListData={cityQueue} variant="imgslide" />
            </div>
            <Button
              href="/rent-out"
              icon={<ArrowRight size={20} weight="duotone" />}
              className="mt-4"
              iconPosition="end"
            >
              Se alla köer
            </Button>
          </section>
        </div>
      </section>
    </>
  );
}
