"use client";
import { House, User } from "@phosphor-icons/react";
import { Button } from "../Button";
import { HeroImage, heroPhone, opengraphImage } from "@/assets/images";
import { cx } from "class-variance-authority";
import { FC, ReactNode } from "react";
import styles from "./Hero.module.css";
import { Icons } from "@/Const/Icons";
import Link from "next/link";
import { RotatingRings } from "../RotatingRings";
import { heroRting } from "@/Const/data";
interface labelProps {
  labelTitle: string;
}
interface heroProps {
  title: ReactNode;
  description: string;
  isShowBtn: boolean;
  heroLabel: labelProps[];
}
export const Hero: FC<heroProps> = ({
  title,
  description,
  isShowBtn,
  heroLabel,
}) => {
  return (
    <>
      <div className="d-flex flex-xl-row flex-column align-items-center gap-xs">
        <div className="d-flex flex-column gap-2xs align-items-center align-items-xl-start">
          <ul className="ms-0 ps-0 d-flex gap-2 flex-wrap justify-content-center justify-content-lg-start ">
            {heroLabel.map((labelItem: any, labelIndex: number) => {
              return (
                <li
                  className={cx(
                    styles.heroLabelList,
                    "text-base text-white fw-medium bg-sugar-crystal px-2 py-1 px-sm-4 py-sm-2 list-style-none"
                  )}
                  key={`labsd-${labelIndex}`}
                >
                  {labelItem.labelTitle}
                </li>
              );
            })}
          </ul>
          <h1 className="text-4xl fw-bold  text-white">{title}</h1>
          <p className="text-md text-center text-xl-start text-white lh-base  ">
            {description}
          </p>
          <div
            className={cx(
              styles.heroCard,
              "space-2xs-p bg-white radius-xs d-flex flex-column gap-3xs"
            )}
          >
            <span className="text-xl fw-bold">Omdömen</span>
            <div className="d-flex gap-3xs">
              {heroRting.map((item) => (
                <span key={item.id}>{item.icon}</span>
              ))}
            </div>
            <p className="text-base fw-medium">TrustScore 4.6 1 060 omdömen</p>
          </div>
          {isShowBtn && (
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3">
              <Button
                href="/create-account"
                icon={<House size={20} weight="duotone" />}
              >
                Find a Property
              </Button>
              <Button
                variant={"accent"}
                icon={<User size={20} weight="duotone" />}
              >
                Activate Account
              </Button>
            </div>
          )}
        </div>
        <div className=" w col-lg-6 text-center text-lg-end mb-4 mb-sm-0">
          <picture
            className={cx(
              styles.heroImage,
              "object-fit-contain d-flex justify-content-center "
            )}
          >
            {/* <source media="(min-width:992px)" srcSet={HeroImage.src} /> */}
            <img
              src={heroPhone.src}
              alt={"Flat listings in iPhone"}
              className=""
            />
          </picture>
          <img src={opengraphImage.src} className="opengraph-image d-none" />
        </div>
      </div>
    </>
  );
};
