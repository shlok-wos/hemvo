import Image, { StaticImageData } from "next/image";
import styles from "./BlogCard.module.css";
import { Icons } from "@/Const/Icons";
import clsx from "clsx";
import dayjs from "dayjs";

interface BlogCardProps {
  imgSrc: string;
  date: string;
  time: string;
  title: string;
  personImg: string | StaticImageData;
  personName: string;
  personPos: string;
  description: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  time = "",
  date = "",
  imgSrc,
  title,
  description = "",
  personImg,
  personName,
  personPos,
}) => {
  return (
    <>
      <div className={clsx("d-flex flex-column gap-2xs", styles.blogCardWrapper, "cursor-pointer")}>
        <img className={clsx(styles.blogImage)} height={220} width={430} src={imgSrc} alt="city-img" />
        {/* <Image
          className={clsx(styles.blogImage, "radius-md")}
          height={220}
          width={430}
          src={imgSrc as StaticImageData}
          alt="city-img"
        /> */}
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2 align-items-center">
            <span>{Icons.calander}</span>
            <p className="text-base text-gray fw-medium">{dayjs(date)?.format("DD MMM, YYYY")}</p>
          </div>
          {/* <div className="d-flex gap-2 align-items-center">
            <span>{Icons.clock}</span>
            <p className="text-base text-gray fw-medium">{time}</p>
          </div> */}
        </div>

        {/* dangerouslySetInnerHTML={{
                __html: blogDetails?.description,
              }} */}
        <h4 className="text-xl text-dark fw-bolder">{title}</h4>
        <div
          className="d-flex flex-column gap-3xs text-limit"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
        {/* <div className="d-flex gap-3xs">
          <Image height={60} width={60} src={personImg} alt="person-img" />
          <div className="d-flex flex-column justify-content-center ">
            <p className="text-lg text-dark fw-bolder"> {personName} </p>
            <p className="text-sm text-gray fw-medium">{personPos}</p>
          </div>
        </div> */}
      </div>
    </>
  );
};
