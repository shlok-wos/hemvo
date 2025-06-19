import { about, aboutPartnership } from "@/Const/data";
import { Icons } from "@/Const/Icons";
import { Question } from "@phosphor-icons/react";
import clsx from "clsx";
import { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Hemvo",
};

export default function About() {
  return (
    <>
      <main className=" space-top-sm ">
        <div className="container text-center">
          <h1 className="text-5xl fw-bolder space-2xs-mb">
            Litet team. Stora hjärtan.
          </h1>
          <p className="text-md text-gray fw-medium">
            Vårt fokus ligger på att hjälpa svenska folket till smarta beslut
            och en ljusare framtid. Vi innoverar för din skull.
          </p>

          <div className="space-lg-py grid-primary">
            {about.map((item, index) => {
              return (
                <>
                  <div key={index} className="d-flex gap-xs">
                    <span className="mt-1">{item.icon}</span>
                    <div className="text-start">
                      <p className="text-lg fw-bold text-dark mb-1 ">
                        {item.title}
                      </p>
                      <p className="text-md text-gray fw-medium">{item.text}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="space-margin-bottom-sm">
            <h3 className="text-3xl text-dark fw-bold space-2xs-mb">
              Partnerskap
            </h3>
            <p className="text-md text-gray fw-medium">
              Har du en digital kö- ta kontakt med oss! Vi på dibz jobbar
              tillsammans med köer för att skapa en modern och socialt hållbar
              kö-marknad.
            </p>
          </div>
          <div className="grid-primary space-bottom-lg">
            {aboutPartnership.map((item, index) => {
              return (
                <>
                  <div key={index} className="d-flex gap-xs">
                    <span className="mt-1">{item.icon}</span>
                    <div className="text-start">
                      <p className="text-lg fw-bold text-dark mb-1 ">
                        {item.title}
                      </p>
                      <p className="text-md text-gray fw-medium">{item.text}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div
          className={clsx(
            styles.bottomMoreInfo,
            "text-center space-lg-py position-relative "
          )}
        >
          <p className="text-2xl text-white fw-medium z-1 position-relative">
            Har du några frågor? Kontakta oss i chatten så hjälper vi dig där!
            {"  "}{" "}
          </p>
        </div>
      </main>
    </>
  );
}
