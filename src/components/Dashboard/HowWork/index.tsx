"use client";
import { howWork } from "@/assets/images";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { LineChart } from "@/components/LineChart";
import { chartSampleData, howWorkData } from "@/Const/data";
import { Icons } from "@/Const/Icons";

import Image from "next/image";

export const HowWork = () => {
  return (
    <>
      <Card className="overflow-x-hidden">
        <h1 className="text-3xl fw-bold space-bottom-md text-center">
          Litet team. Stora hjärtan.
        </h1>
        <div className="d-flex flex-column-reverse flex-xl-row gap-xs">
          <div className="m-auto">
            <Image
              className="object-fit-cover radius-xs object-position-center "
              src={howWork}
              height={496}
              width={786}
              alt={"How to work"}
            />
          </div>
          <div className="d-flex flex-column gap-xs justify-content-center align-items-start">
            <h4 className="text-2xl fw-bold text-dark ">Viktig information</h4>
            <ul className="list-style-none ps-0 d-flex flex-column gap-xs">
              {howWorkData.map((item, index) => {
                return (
                  <>
                    <li
                      key={index}
                      className="d-flex gap-2xs align-items-start"
                    >
                      <span>{Icons.tringleArrow}</span>
                      <p className="text-base text-black fw-medium">
                        {item.text}
                      </p>{" "}
                    </li>
                  </>
                );
              })}
            </ul>
            <Button href="/">Bli medlem</Button>
          </div>
        </div>
      </Card>
    </>
  );
};
