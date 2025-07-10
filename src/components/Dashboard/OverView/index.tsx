"use client";

import { Card } from "@/components/Card";
import { cx } from "class-variance-authority";
import styles from "./OverView.module.css";
import { FLSkeleton } from "@/components";
import { LineChart } from "@/components/LineChart";
import { useQueueDetailsHook } from "@/hooks/user/queues/queueDetails.hook";

export const OverView = () => {
  const { isLoader, queuesData } = useQueueDetailsHook();

  return (
    <div className={cx(styles.queueWrapper, "d-flex flex-column")}>
      <div
        className={cx(
          styles.chartSideCardContent,
          "row flex-column-reverse flex-xxl-row"
        )}
      >
        <div className="col-12 col-xxl-8">
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
        <div
          className={cx(
            styles.sideCardWrapper,
            "col-12 col-xxl-4 d-flex flex-column flex-sm-row flex-xxl-column"
          )}
        >
          <Card className="h-100 w-100">
            <p className="text-md mb-1">Dagar med FlatQuest</p>
            <h2 className="text-2xl">{queuesData?.daysPassed}</h2>
          </Card>
          <Card className="h-100 w-100">
            <p className="text-md mb-1">Dina områden</p>
            <h2 className="text-2xl">{queuesData?.yourAreas}</h2>
          </Card>
          <Card className="h-100 w-100">
            <p className="text-md mb-1">Aktiva köer</p>
            <h2 className="text-2xl">{queuesData?.activeQueues || 0}</h2>
          </Card>
        </div>
      </div>
    </div>
  );
};
