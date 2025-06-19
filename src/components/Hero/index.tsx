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
      <div className="row d-flex align-items-center  hero">
        <div className="col-lg-6 text-center text-lg-start pb-0 pb-sm-4 pb-lg-0 mt-1 mt-sm-0  pe-xxl-5 test d-flex flex-column align-items-start">
          <ul className="ms-0 ps-0 d-flex gap-2 flex-wrap justify-content-center justify-content-lg-start mb-4">
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
          <h1 className="text-4xl fw-bold mb-4 text-white">{title}</h1>
          <p className="text-md text-white lh-base mb-4 ">{description}</p>
          <div
            className={cx(
              styles.heroCard,
              "space-2xs-p bg-white radius-xs d-flex flex-column gap-3xs"
            )}
          >
            <Link href={""}>
              <span className="">{Icons.trustPilot}</span>
            </Link>
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
        <div className="col-lg-6 text-center text-lg-end mb-4 mb-sm-0">
          <picture
            className={cx(
              styles.heroImage,
              "object-fit-contain mx-auto ms-lg-auto me-lg-0"
            )}
          >
            {/* <source media="(min-width:992px)" srcSet={HeroImage.src} /> */}
            <img
              src={heroPhone.src}
              alt={"Flat listings in iPhone"}
              className="ms-lg-auto"
            />
          </picture>
          <img src={opengraphImage.src} className="opengraph-image d-none" />
        </div>
      </div>
    </>
  );
};
