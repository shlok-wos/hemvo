"use client";
import {
  CityDome,
  LivingRoom,
  logoHere,
  WhatCustomersSayAboutUs,
} from "@/assets/images";
import { cx } from "class-variance-authority";
import {
  ArrowRight,
  House,
  IdentificationBadge,
  Info,
  ShieldCheck,
} from "@phosphor-icons/react";
import { AssistanceSlider } from "@/components/Sliders";
import {
  Accordion,
  AppInfoCard,
  Button,
  Card,
  Collage,
  CustomerParallax,
  PriceCard,
  Hero,
  ScrollToTop,
  TrustpilotReviewSlider,
  VideoSlider,
} from "@/components";
import {
  faqAccordionData,
  firstInSwedenContentData,
  homeHeroLabelData,
} from "@/static";
import { usePlanListHook } from "@/hooks/plan/planlist.hook";
import { useBlogListHook } from "@/hooks/user/blogs/blogList.hook";
import styles from "./page.module.css";
import { useHomeHook } from "@/hooks/common/home.hook";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  const { planList, handleOnClickPlan, isLoader } = usePlanListHook();
  const { blogListData } = useBlogListHook();
  const {
    reviewList,
    observerScroll,
    videoList,
    hasMore,
    triggerNextPage,
    isLoadingMore,
  } = useHomeHook();
  return (
    <>
      <ScrollToTop />
      <section
        className={cx(
          styles.hero,
          "d-flex align-items-center py-4 py-sm-5 py-lg-4"
        )}
      >
        <div className="container">
          <Hero
            title={
              <>
                Först i kön, först till <br /> hemmet
              </>
            }
            description={
              "dioz är första tjänsten som sköter ditt bostadsköande åt dig. Här kan du ställa dig i ko med några klick och slappna av medan vi håller varje köplats säker genom regelbundna kö-uppdateringar."
            }
            isShowBtn={false}
            heroLabel={homeHeroLabelData}
          />
        </div>
      </section>
      <div className="container">
        <div
          className={cx(
            styles.heroReviewCards,
            "bg-white space-xs-p position-relative z-1 radius-md "
          )}
        >
          <div className="d-flex  gap-2xs">
            <Image height={60} width={60} src={logoHere.src} alt="logo" />
            <div className="">
              <h3 className="text-xl fw-bold mb-2">Hemvo.se</h3>
              <p className="text-gray text-base">
                Jag har inte kunnat hitta någon information om en webbplats med
                domänen "hemvo.se".
              </p>
            </div>
          </div>
          <div className="d-flex  gap-2xs">
            <Image height={60} width={60} src={logoHere.src} alt="logo" />
            <div className="">
              <h3 className="text-xl fw-bold mb-2">User reviews</h3>
              <p className="text-gray text-base">
                Om du har ytterligare information eller kan specificera vad du
                söker, hjälper jag dig gärna vidare.
              </p>
            </div>
          </div>
          <div className="d-flex  gap-2xs">
            <Image height={60} width={60} src={logoHere.src} alt="logo" />
            <div className="">
              <h3 className="text-xl fw-bold mb-2">Hemvo.se</h3>
              <p className="text-gray text-base">
                Jag har inte kunnat hitta någon information om en webbplats med
                domänen "hemvo.se".
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className={cx(styles.customers, "space-top-sm")}>
        <div className={styles.customersIllustration}>
          <div className="container position-relative text-center">
            <h2 className="text-3xl mb-2 mb-xxl-3">
              Vad våra medlemmar säger om oss
            </h2>
            <p className="text-md text-gray pb-2 pb-lg-0">
              Så tycker våra medlemmar
            </p>
            {reviewList?.totalItems > 0 && (
              <TrustpilotReviewSlider
                reviewListData={reviewList}
                observerScroll={observerScroll}
              />
            )}
            {/* <img
              src={WhatCustomersSayAboutUs.src}
              alt={"IPhone with notifications"}
              className={cx(
                styles.customersSayImg,
                "mx-auto position-relative z-1 mt-4 mt-lg-5"
                )}
                />
                <CustomerParallax /> */}
          </div>
        </div>
        {/* <ReviewSlider /> */}
      </section>
      {videoList.length > 0 && (
        <VideoSlider
          videoList={videoList}
          hasMore={hasMore}
          triggerNextPage={triggerNextPage}
          isLoadingMore={isLoadingMore}
        />
      )}{" "}
      <section
        id="plans"
        className={cx(styles.plans, "space-top-sm space-bottom-lg")}
      >
        <div className="container">
          <div className="text-center mb-3 mb-md-5">
            <h2 className="text-3xl mb-2 mb-xxl-3">
              Priser för dig som vill hitta en bostad.
            </h2>
            <p className="text-md text-gray">
              Enkel prissättning för dig som letar efter ett hem.
            </p>
          </div>
          {planList.length > 0 && !isLoader && (
            <PriceCard
              planData={planList}
              handleOnClickPlan={handleOnClickPlan}
              buttonText="Bli medlem"
              buttonIcon={<House size={20} weight="duotone" />}
            />
          )}
        </div>
      </section>
      <section
        id="about"
        className={cx(
          styles.firstInSweden,
          "bg-accent space-top-md space-bottom-md"
        )}
      >
        <div className="container">
          <h2 className="text-3xl mb-3 mb-md-4">Så funkar Hemvo?</h2>
          <div className={cx(styles.firstInSwedenContent)}>
            <p className="text-md lh-base text-gray">
              <strong>Vi letar aktivt bostäder åt dig</strong>– och kontaktar
              hyresvärdar baserat på din profil.
            </p>
            <p className="text-md lh-base text-gray">
              <strong>Du får en plats i vår interna bostadskö</strong> - där
              bostäder matchas med aktiva medlemmar.
            </p>
          </div>

          <div className="row">
            {firstInSwedenContentData.map(
              (FISwedenItem: any, FISwedenIndex: number) => {
                return (
                  <div
                    className="col-sm-6 col-lg-4 d-flex align-items-stretch mt-4 mt-lg-5"
                    key={`Swed-${FISwedenIndex}`}
                  >
                    <Card interactive>
                      <h4 className="text-xl fw-bold mb-3">
                        {FISwedenItem.title}
                      </h4>
                      <p className="text-base text-gray">
                        {FISwedenItem.description}
                      </p>
                    </Card>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <section className="space-top-lg">
        <div className="container">
          <AppInfoCard />
        </div>
      </section>
      <section className="bg-accent space-top-sm space-bottom-sm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6 col-xl-5">
              <div
                className={cx(
                  styles.flatquestHelpImage,
                  "ratio ratio-4x3 mx-auto ms-lg-0"
                )}
              >
                <img
                  src={LivingRoom.src}
                  alt="Living Room"
                  className="radius-xl"
                />
              </div>
            </div>

            <div className="col-md-12 col-lg-6 col-xl-7 mt-4 mt-lg-0">
              <h2 className="text-3xl mb-2 mb-xxl-4">
                Hemvo hjälper dig att hitta din nästa hyresgäst - helt utan
                kostnad.
              </h2>
              <p className="text-md text-gray lh-base">
                Vi sköter det administrativa och matchar din bostad med
                kvalificerade hyresgäster inom 24 timmar. Med vår expertis och
                marknadskunskap hjälper vi dig att maximera din hyresinkomst och
                frigöra tid för det som betyder mest för dig.
              </p>

              <ul className="mt-4 mt-xxl-4 ps-0">
                <li className="fw-medium d-flex align-items-start mb-3 mb-xxl-3">
                  <IdentificationBadge
                    size={20}
                    weight="duotone"
                    className="me-1 flex-0-auto ico-translateY"
                  />
                  Bred exponering - vår robot matchar din bostad med en stor
                  publik av potentiella hyresgäster.
                </li>
                <li className="fw-medium d-flex align-items-start mb-3 mb-xxl-3">
                  <Info
                    size={20}
                    weight="duotone"
                    className="me-1 flex-0-auto ico-translateY"
                  />
                  Effektiv hantering - vi tar hand om all kommunikation och
                  förberedelser inför visningen.
                </li>
                <li className="fw-medium d-flex align-items-start mb-3 mb-xxl-3">
                  <ShieldCheck
                    size={20}
                    weight="duotone"
                    className="me-1 flex-0-auto ico-translateY"
                  />
                  Trygghet och säkerhet - vi säkerställer att hyresgäster är
                  verifierade och pålitliga.
                </li>
              </ul>

              <Button
                href="/rent-out"
                icon={<ArrowRight size={20} weight="duotone" />}
                className="mt-4"
                iconPosition="end"
              >
                Läs mer
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="assistance" className="space-top-lg position-relative">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="section-title-right-space w-100">
            <h2 className="text-3xl fw-bold mb-2 mb-xxl-3">Hyreshjälpen</h2>
            <p className="text-md text-gray">
              Guider, inspiration, tips och intervjuer för ditt nya hem.
            </p>
          </div>
        </div>
        <div className="mt-4 mt-sm-5">
          <AssistanceSlider blogListData={blogListData} />
        </div>
      </section>
      <section className="space-top-lg space-bottom-lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <h2 className="text-3xl fw-bold mb-2 mb-xxl-3">
                Inga köer. Bara hem.
              </h2>
              <p className="text-md text-gray">
                Bli medlem och kom ett steg närmare ditt hem.
              </p>
              <Button
                href="/create-account"
                icon={<House size={20} weight="duotone" />}
                className="mt-4"
              >
                Bli medlem
              </Button>
            </div>
            <div className="d-flex justify-content-center d-lg-block col-xl-8 col-xxl-7 offset-xxl-1 mt-4 mt-sm-0 px-0 px-md-2">
              <Collage />
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="bg-accent space-top-md space-bottom-md">
        <div className="container">
          <h2 className="text-3xl fw-bold mb-2 mb-xxl-3">Frågor och svar </h2>
          <p className="text-md text-gray">
            Hitta svar på vanliga frågor här. För ytterligare hjälp, tveka inte
            att kontakta oss.
          </p>
          <Accordion
            data={faqAccordionData}
            className={clsx(styles.accoroadionItems, " space-top-sm")}
            itemClassName="mb-4 radius-lg"
          />
        </div>
      </section>
      <section className="space-top-lg space-bottom-lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6 pe-xxl-5">
              <div className="ratio ratio-16x9 overflow-hidden">
                <img
                  src={CityDome.src}
                  alt="Large dome in center of the city"
                  className={cx(styles.dome, "object-fit-cover radius-md")}
                  width={615}
                />
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 ps-xl-5 mt-4 mt-lg-0">
              <h2 className="text-3xl fw-bold mb-4">
                Bli en Hemvo - användare
              </h2>
              <p className="text-md text-gray">
                Kom igång idag och kom närmare ditt nya hem.
              </p>
              <Button
                href="/create-account"
                icon={<House size={20} weight="duotone" />}
                className="mt-4"
              >
                Bli medlem
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
