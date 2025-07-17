"use client";
import { Accordion } from "@/components";
import { faqPageAccordionData } from "@/static";
import clsx from "clsx";
import styles from "../page.module.css";
import { Icons } from "@/Const/Icons";
import Link from "next/link";

export default function faq() {
  return (
    <>
      <section id="faq" className="bg-white space-top-md ">
        <div className="container">
          {/* <div className="d-flex justify-content-start flex-column gap-2xs">
            <div className="d-flex gap-4 align-items-center">
              {" "}
              <Link
                href={"/"}
                className="link-hover text-lg text-dark fw-semibold text-decoration-none"
              >
                Hem
              </Link>
              <span className="d-flex align-items-center">
                {Icons.forwardTringle}
              </span>
              <p className="text-lg text-dark fw-semibold">Kontakt </p>{" "}
            </div>
            <div
              className={clsx(
                styles.profileIcon,
                "bg-doctor-light d-flex justify-content-center align-items-center radius-md"
              )}
            >
              {Icons.person}
            </div>
            <h1 className="text-5xl fw-bolder text-dark">Familjekonton</h1>
            <p className="text-md fw-medium text-gray">
              Information om familjekonto
            </p>
            <p className="text-md fw-medium text-gray">13 artiklar</p>
          </div> */}
          <div
            className={clsx(
              styles.faqPageQuestions,
              "space-bottom-md radius-sm "
            )}
          >
            <h2 className="text-3xl fw-bold text-center">Vanliga frågor</h2>

            {/* <p className="text-md fw-medium text-gray">Vanliga frågor</p> */}

            <Accordion
              data={faqPageAccordionData}
              className={clsx(styles.accoroadionItems, " space-top-sm")}
              itemClassName="mb-4 radius-xs"
            />
          </div>
        </div>
        {/* <div
          className={clsx(
            styles.bottomMoreInfo,
            "text-center space-lg-py px-2 position-relative "
          )}
        >
          <p className="text-2xl text-white fw-medium z-1 position-relative">
            Har du några frågor? Kontakta oss via e-post{"  "}{" "}
            <Link
              target="blank"
              href={"mailto:hemvo123@gmail.com"}
              className="text-3xl fw-bolder text-white"
            >
              hemvo123@gmail.com
            </Link>
          </p>
        </div> */}
      </section>
    </>
  );
}
