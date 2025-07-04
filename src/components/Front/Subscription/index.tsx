"use client";
import { sistaStegetData, subscribeFaqAccordionData } from "@/static";
import { cx } from "class-variance-authority";
import {
  klarnaBlack,
  klarnaPink,
  masterCard,
  visa,
  WhatCustomersSayAboutUs,
} from "@/assets/images";
import {
  Accordion,
  AssistanceSlider,
  Button,
  CustomerParallax,
  Input,
  PriceCard,
  ReviewSlider,
} from "@/components";
import { Envelope, Globe, House } from "@phosphor-icons/react";
import Link from "next/link";
import styles from "./Subscription.module.css";

export const SubscriptionPage = () => {
  return (
    <>
      <section className="space-top-md">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl mb-2 mb-xxl-3">
              Sista steget, sedan är du igång!
            </h2>
            <p className="text-md text-gray">
              Aktivera ditt konto på denna sida för att komma närmare din
              hyresrätt.
            </p>
            <div className="row pt-3 pt-lg-0">
              {sistaStegetData.map((SSItem: any, SSindex: number) => {
                return (
                  <div
                    className="col-md-6 col-lg-4 mt-4 mt-lg-5 pt-lg-4 text-center"
                    key={`ddsfs-${SSindex}`}
                  >
                    <h4 className="fw-bold text-lg text-dark mb-3">
                      {SSItem.title}
                    </h4>
                    <p className="fw-normal text-base text-gray mb-0">
                      {SSItem.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <section className={cx(styles.customers, "space-top-lg")}>
				<div className={styles.customersIllustration}>
					<div className="container position-relative text-center">
						<h2 className="text-3xl mb-2 mb-xxl-3">
							Vad våra medlemmar säger om oss
						</h2>
						<p className="text-md text-gray pb-2 pb-lg-0">
							Så tycker våra medlemmar
						</p>
						<img
							src={WhatCustomersSayAboutUs.src}
							alt={"IPhone with notifications"}
							className={cx(
								styles.customersSayImg,
								"mx-auto position-relative z-1 mt-4 mt-lg-5"
							)}
						/>
						<CustomerParallax />
					</div>
				</div>
				<ReviewSlider />
			</section> */}
      <section className="space-top-md position-relative">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="section-title-right-space w-100">
            <h2 className="text-3xl fw-bold mb-2 mb-xxl-3">Hyreshjälpen</h2>
            <p className="text-md text-gray">
              Guider, inspiration, tips och intervjuer för ditt nya hem.
            </p>
          </div>
        </div>
        <div className="mt-4 mt-sm-5">
          <AssistanceSlider
            slidePerView={{
              0: { slidesPerView: 1.3, spaceBetween: 15 },
              576: { slidesPerView: 2.2, spaceBetween: 20 },
              768: { slidesPerView: 2.8, spaceBetween: 20 },
              1200: { slidesPerView: 3, spaceBetween: 20 },
            }}
          />
        </div>
      </section>
      <section id="plans" className={cx(styles.plans, "space-top-lg")}>
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl mb-2 mb-xxl-3">
              Priser för dig som vill hitta en bostad.
            </h2>
            <p className="text-md text-gray">
              Enkel prissättning för dig som letar efter ett hem.
            </p>
          </div>
          <PriceCard
            buttonText="Bli medlem"
            buttonIcon={<House size={20} weight="duotone" />}
          />
        </div>
      </section>
      {/* <section className="space-top-lg">
        <div className="container">
          <div className={cx(styles.payPurchaseCardWrap, "mx-auto")}>
            <h4 className="text-dark fw-bold text-xl mb-2">Your information</h4>
            <p className="text-base fw-normal text-gray">
              The address should be in Sweden.
            </p>
            <div className="d-flex flex-column gap-3 mt-4">
              <Input
                icon={<Envelope size={20} weight="duotone" />}
                id="payPurchaseMejladress"
                type="email"
                name="Mejladress"
                placeholder="Mejladress"
                iconClassCommon="email-ico-translateY"
              />
              <Input
                icon={<Globe size={20} weight="duotone" />}
                id="payPurchasePostnummer"
                type="text"
                name="Postnummer"
                placeholder="Postnummer"
              />
            </div>
            <h6 className="mt-4 mt-md-5 mb-0 text-center fw-normal text-base">
              <Link href={"/"} className="text-dark">
                Autofill settings
              </Link>
              &nbsp;
              <b className="px-2">•</b>&nbsp;
              <Link href={"/"} className="text-dark">
                Klarna's privacy notice
              </Link>
            </h6>
            <div className="d-flex align-items-center gap-3 mt-4 mt-md-5">
              <h6 className="fw-normal text-base w-50">
                Total&nbsp;&nbsp;
                <Link href={"/"} className="text-dark">
                  View details
                </Link>
              </h6>
              <h5 className="fw-bold text-lg mb-0 text-dark text-end ms-auto w-50">
                349 kr
              </h5>
            </div>
            <Button
              icon={<House size={20} weight="duotone" />}
              iconPosition="start"
              className="mt-4"
              full
            >
              Pay purchase
            </Button>
            <div className="w-100 text-center mt-4">
              <img src={klarnaBlack.src} className="img-fluid mx-auto" />
              <div className="d-flex align-items-center justify-content-center gap-3 gap-sm-5 mt-4">
                <Link
                  href={"/"}
                  className="text-base fw-medium gradient-text mb-0"
                >
                  Privacy
                </Link>
                <Link
                  href={"/"}
                  className="text-base fw-medium gradient-text mb-0"
                >
                  Cookies
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3 gap-sm-5 mt-4">
                <img src={klarnaPink.src} className="img-fluid" />
                <img src={visa.src} className="img-fluid" />
                <img src={masterCard.src} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-accent space-top-md space-bottom-md space-margin-top-lg space-margin-bottom-lg">
        <div className="container">
          <h2 className="text-3xl fw-bold mb-2 mb-xxl-3">Frågor och svar</h2>
          <p className="text-md text-gray">
            Hitta svar på vanliga frågor här. För ytterligare hjälp, tveka inte
            att kontakta oss.
          </p>

          <Accordion
            data={subscribeFaqAccordionData}
            className="space-top-sm"
            itemClassName="mb-4 radius-lg"
          />
        </div>
      </section>
    </>
  );
};
