"use client";
import styles from "../DashboardBlogspot.module.css";
import { useBlogDetailsHook } from "@/hooks/user/blogs/blogDetails.hook";
import moment from "moment";
import { Button, Card, Loader } from "@/components";
import { ArrowLeft, CloudFog } from "@phosphor-icons/react";
import clsx from "clsx";

export const DashboardBlogpost = () => {
  const { blogData, isLoader } = useBlogDetailsHook();
  const formattedDate = blogData?.updatedAt
    ? moment(blogData?.updatedAt).format("MMMM D, YYYY")
    : null;

  return (
    <div>
      <Loader show={isLoader} />
      <Card contentClassName={clsx("d-flex align-items-start")}>
        {!isLoader && (
          <>
            <Button
              href="/dashboard/blogspot"
              title="Back"
              icon={<ArrowLeft size={24} weight="duotone" />}
              shape={"round"}
            />
            <div className={clsx(styles.postContainer, "w-100 m-auto")}>
              <div className="ratio ratio-16x9 mb-3">
                {blogData?.blog_image && (
                  <img
                    src={blogData?.blog_image}
                    alt="Post Banner"
                    className="object-fit-cover radius-2xs"
                    width={800}
                    height={450}
                  />
                )}
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h1 className="text-2xl">{blogData?.title}</h1>
                <p className="text-gray mb-0">{formattedDate}</p>
              </div>
              <div className={styles.content}>
                <div
                  dangerouslySetInnerHTML={{ __html: blogData?.description }}
                />
              </div>
              <hr className="my-3" />
              <div className={clsx(styles.authorInfo, "")}>
                <h2 className="mb-2 text-lg">Posted By : </h2>
                <div className="d-flex align-items-center gap-2">
                  <div
                    className={clsx(styles.blogPostedByImg, "ratio ratio-1x1")}
                  >
                    {blogData?.posted_by_image && (
                      <img
                        src={blogData?.posted_by_image}
                        alt="Post Banner"
                        className="object-fit-cover rounded-circle"
                        width={800}
                        height={450}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="mb-1">{blogData?.posted_by}</h3>
                    <p className="mb-0">{blogData?.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
