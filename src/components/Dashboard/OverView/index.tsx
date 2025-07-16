"use client";

import { Card } from "@/components/Card";
import { cx } from "class-variance-authority";
import styles from "./OverView.module.css";
import { FLSkeleton } from "@/components";
import { LineChart } from "@/components/LineChart";
import { useQueueDetailsHook } from "@/hooks/user/queues/queueDetails.hook";
import {
  calendarIllustration,
  mapIllustration,
  queueIllustration,
} from "@/assets/images";
import clsx from "clsx";

export const OverView = () => {
  const { isLoader, queuesData } = useQueueDetailsHook();

  return (
    <div className={cx(styles.queueWrapper, "d-flex flex-column")}>
      <div className={cx(styles.chartSideCardContent, "flex-column d-flex")}>
        <Card contentClassName="d-flex align-items-center justify-content-between">
          <h2 className="text-2xl fw-bold">Bostadspoäng</h2>
        </Card>

        <div className={cx(styles.sideCardWrapper, "d-grid")}>
          <Card className="h-100 w-100">
            <div className="d-flex align-items-start justify-content-between flex-column flex-xl-row">
              <div>
                <p className="text-md mb-1">Dagar med FlatQuest</p>
                <h2 className="text-2xl">{queuesData?.daysPassed}</h2>
              </div>
              <div
                className={clsx(
                  styles.housingPointIcon,
                  "ratio ratio-1x1 d-flex align-items-center justify-content-center"
                )}
              >
                <img
                  className="w-100 h-100"
                  src={calendarIllustration.src}
                  alt="calndar"
                />
              </div>
            </div>
          </Card>
          <Card className="h-100 w-100">
            <div className="d-flex align-items-start justify-content-between flex-column flex-xl-row">
              <div>
                <p className="text-md mb-1">Dina områden</p>
                <h2 className="text-2xl">{queuesData?.yourAreas}</h2>
              </div>
              <div
                className={clsx(
                  styles.housingPointIcon,
                  "ratio ratio-1x1 d-flex align-items-center justify-content-center"
                )}
              >
                <img
                  className="w-100 h-100"
                  src={mapIllustration.src}
                  alt="map"
                />
              </div>
            </div>
          </Card>
          <Card className="h-100 w-100">
            <div className="d-flex align-items-start justify-content-between flex-column flex-xl-row">
              <div>
                <p className="text-md mb-1">Aktiva köer</p>
                <h2 className="text-2xl">{queuesData?.activeQueues || 0}</h2>
              </div>
              <div
                className={clsx(
                  styles.housingPointIcon,
                  "ratio ratio-1x1 d-flex align-items-center justify-content-center"
                )}
              >
                <img
                  className="w-100 h-100"
                  src={queueIllustration.src}
                  alt="queue"
                />
              </div>
            </div>
          </Card>
        </div>
        <Card>
          <div>
            <h3 className="text-xxl mb-1">Köpoäng</h3>
          </div>
          <h2 className="text-2xxl mt-2">
            {queuesData?.points ? queuesData?.points : 0}
          </h2>
          <div className={cx(styles.chartWrapper, "")}>
            {isLoader ? (
              <FLSkeleton isChart height={400} />
            ) : (
              <LineChart data={queuesData?.chartData} />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
