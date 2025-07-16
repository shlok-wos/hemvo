import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import clsx from "clsx";
import React from "react";

type FLSkeletonProps = {
  count?: number;
  width?: number | string;
  height?: number | string;
  className?: string;
  styleWidth?: string;
  widthOne?: number | string;
  widthTwo?: number | string;
  widthTwo2?: number | string;
  widthThree?: number | string;
  heightOne?: number | string;
  heightTwo?: number | string;
  heightThree?: number | string;
  isChart?: boolean;
  isCard?: boolean;
  isCardCompact?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const FLSkeleton: React.FC<FLSkeletonProps> = ({
  count = 1,
  width,
  height,
  className,
  styleWidth,
  widthOne,
  widthTwo,
  widthTwo2,
  widthThree,
  heightOne,
  heightTwo,
  heightThree,
  isChart,
  isCard,
  isCardCompact = true,
  ...rest
}) => {
  return (
    <>
      {isChart ? (
        <div className="chart-skeleton-wrapper">
          <Skeleton
            width={"100%"}
            height={height}
            baseColor="#f7f5fa"
            highlightColor="#efefef"
            duration={1}
            style={{ borderRadius: "8px" }}
          />
        </div>
      ) : isCard ? (
        <div>
          <div className="mb-3" style={{ width: "56px", height: "56px" }}>
            <Skeleton width={"100%"} height={"100%"} borderRadius={8} />
          </div>

          <h5 className="card-title mb-2">
            <Skeleton width="60%" height={20} />
          </h5>

          <p className="card-text mb-3">
            <Skeleton count={2} height={12} />
          </p>

          {isCardCompact && (
            <>
              <div className="mb-3">
                <Skeleton width={80} height={12} />
              </div>
              <div className="d-flex gap-3">
                <Skeleton height={34} width={100} borderRadius={12} />
                <Skeleton height={34} width={100} borderRadius={12} />
              </div>
            </>
          )}
        </div>
      ) : (
        <Skeleton
          count={count}
          className={clsx(className, "w-size-100")}
          baseColor="#f7f5fa"
          highlightColor="#efefef"
          duration={1}
          width={width}
          height={height}
          {...rest}
        />
      )}
    </>
  );
};
