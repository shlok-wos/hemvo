"use client";
import { BlogCard, Button } from "@/components";
// import { FrontBlogPost } from "@/components/Front/FrontBlogPost";
import { blogCard, housingqueue, overView } from "@/Const/data";
import clsx from "clsx";
// import { Metadata } from "next";
import Image from "next/image";
import styles from "../page.module.css";
import { housingQueue, leadyWithLaptop, personOne } from "@/assets/images";
import { Icons } from "@/Const/Icons";
// export const metadata: Metadata = {
//   title: "Blog | Hemvo",
// };

export default function Blog() {
  return (
    <>
      {/* BLOG HERO SECTION  */}
      <section className="hero ">
        <div className="container">
          <div className="">
            <h1 className="text-5xl fw-bolder text-dark text-center space-xs-mt space-md-mb ">
              Din insider på kö-marknadens
            </h1>
            <div className="grid-primary">
              <Image
                className={clsx(styles.blogImage, "radius-md")}
                width={690}
                height={450}
                src={leadyWithLaptop}
                alt="city-img"
              />

              <div className="d-flex flex-column gap-xs justify-content-center ">
                <div className="d-flex flex-column gap-2xs">
                  <h4 className="text-xl text-dark fw-bolder">
                    Få förstahandskontrakt: Den ultimata guiden
                  </h4>
                  <p className="text-md text-gray fw-medium">
                    Vi tipsar om sex olika vägar till ett förstahandskontrakt -
                    Följ dessa steg för att maximera dina chanser till passande
                    hyreslägnhet. Den som systematiskt bostadsköar, ansöker,
                    nätverkar och håller ögonen öppna har goda chanser att till
                    slut lägga väntarna på ett bra förstahandskontrakt.
                  </p>
                </div>
                <div className="d-flex gap-3xs">
                  <Image
                    height={60}
                    width={60}
                    src={personOne}
                    alt="person-img"
                  />
                  <div className="d-flex flex-column justify-content-center">
                    <p className="text-lg text-dark fw-bolder ">
                      {" "}
                      Lovisa Qvarner{" "}
                    </p>
                    <p className="text-sm text-gray fw-medium">VD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BLOG CARDS SECTIONS  */}
      <section id="blog " className="space-lg-py">
        <div className="container">
          <div className="space-margin-bottom-sm  d-flex justify-content-between align-items-center">
            <h4 className="text-3xl text-dark fw-medium">Senaste artiklar</h4>
            <p className="text-xl text-gray fw-medium">Välj kategori</p>
          </div>
          <div className="grid-secondary">
            {blogCard.map((item, index) => {
              return (
                <>
                  <BlogCard
                    key={index}
                    time={item.time}
                    date={item.date}
                    imgSrc={item.imgSrc}
                    title={item.title}
                    personImg={item.personImg}
                    personName={item.personName}
                    personPos={item.personPos}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* EVENIT SECTION TEMP */}
      <section className="space-bottom-sm">
        <div className="container">
          <div className="d-flex flex-column gap-2xs  ">
            <div className="d-flex gap-2 align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <span className="d-flex align-items-center">
                  {Icons.calander}
                </span>
                <p className="text-base text-gray fw-medium">04 mars 2025</p>
              </div>{" "}
              -
              <div className="d-flex gap-2 align-items-center">
                <span className="d-flex align-items-center">{Icons.clock}</span>
                <p className="text-base text-gray fw-medium">10 min.</p>
              </div>
            </div>
            <h4 className="text-2xl text-dark fw-bold">
              Bostadsmarknaden i Navigera på Sverige: En Guide för Alla
            </h4>
            <p className="text-md text-gray fw-medium">
              En omfattande överblick över bostadsmarknaden i Sverige, inklusive
              insikter om hur man hanterar bostadsköer och säkrar boende.
            </p>
          </div>
        </div>
      </section>
      {/* USER DETAIL SECTION  */}
      <section className="space-top-sm space-bottom-sm bg-errigal-white ">
        <div className="container">
          <div className="d-flex gap-3xs">
            <Image src={personOne} height={60} width={60} alt="person" />
            <div className="d-flex flex-column gap-3xs">
              {" "}
              <h4 className="text-xl text-dark fw-bold">
                Richard Valleryd{" "}
              </h4>{" "}
              <p className="text-base text-gray fw-medium">Operationell chef</p>
            </div>
          </div>
        </div>
      </section>
      {/* OVERVIEW AND SUMMARY SECTION  */}
      <section className="space-top-sm ">
        <div className="container">
          <div className="d-flex flex-column gap-sm">
            {overView.map((item) => {
              return (
                <>
                  <div className="d-flex flex-column gap-2xs ">
                    <h4 className="text-3xl text-dark fw-bold">{item.title}</h4>
                    <p className="text-md text-gray fw-medium">{item.text}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* HOUSING QUEUE SECTION  */}
      <section className="space-lg-py">
        <div className="container">
          <div
            className={clsx(
              styles.housingWrapper,
              "d-flex flex-column flex-xl-row justify-content-between radius-2xs"
            )}
          >
            <div
              className={clsx(
                styles.housingQueue,
                "d-flex flex-column gap-xs align-items-start"
              )}
            >
              <h2 className="text-4xl text-white fw-bolder ">
                Joint 200+ housing queues today
              </h2>
              <button className={clsx(styles.lightBtn, "text-md ")}>
                try homvo for free
              </button>
              <div>
                <p className="text-lg text-white fw-semibold mb-2">
                  One months free, then
                </p>
                <p className="text-xl text-white fw-bolder">35 SEK per month</p>
              </div>
            </div>
            <div className={clsx(styles.housingQueuesImg)}>
              <Image
                className="m-auto "
                src={housingQueue}
                width={700}
                height={460}
                alt="Housing-poster"
              />
            </div>
          </div>
        </div>
      </section>
      {/* HOUSING QUEUE ARTICAL  */}
      <section className="space-bottom-lg">
        <div className="container">
          <div className="grid-secondary">
            {housingqueue.map((item, index) => {
              return (
                <>
                  <BlogCard
                    key={index}
                    time={item.time}
                    date={item.date}
                    imgSrc={item.imgSrc}
                    title={item.title}
                    personImg={item.personImg}
                    personName={item.personName}
                    personPos={item.personPos}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
