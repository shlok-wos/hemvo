"use client";
import { Card } from "@/components/Card";
import { LineChart } from "@/components/LineChart";
import { chartCardData, chartSampleData } from "@/Const/data";
import clsx from "clsx";
import styles from "./OverView.module.css";
export const OverView = () => {
  return (
    <>
      <div
        className={clsx(
          styles.chartWrapperMain,
          "d-flex flex-xl-row flex-column-reverse gap-2xs"
        )}
      >
        <div className={clsx(styles.lineChart)}>
          <Card>
            <div className="mb-0 mb-sm-3 d-flex justify-content-between align-items-center">
              <h3 className="text-3xl text-black fw-bold ">Köpoäng </h3>
              <button
                className={clsx(
                  styles.myQueuesBtn,
                  "bg-transparent fw-semibold text-theme text-lg radius-2xs transition-smooth"
                )}
              >
                Mina köer
              </button>
            </div>
            <h2 className="text-4xl text-black fw-semibold">3</h2>
            <div className={clsx(styles.chartWrapper)}>
              <LineChart
                data={chartSampleData}
                isLabel={true}
                isDataLabelVisible={true}
              />
            </div>
          </Card>
        </div>
        <div
          className={clsx(
            styles.chartCard,
            "d-flex flex-column flex-sm-row flex-xl-column  gap-2xs"
          )}
        >
          {chartCardData.map((item, index) => {
            return (
              <>
                <Card key={index} className="space-xs-p">
                  <div className="d-flex flex-column gap-3xs">
                    <p className="text-xl fw-medium text-gray">{item.label}</p>
                    <p className="text-2xl fw-bold text-dark">{item.data}</p>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
