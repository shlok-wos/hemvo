"use client";
import { Card, Loader, Pagination } from "@/components";
import Link from "next/link";
import styles from "./DashboardBlogspot.module.css";
import { useBlogListHook } from "@/hooks/user/blogs/blogList.hook";
import { Icons } from "@/Const/Icons";
import clsx from "clsx";
import dayjs from "dayjs";
import { user } from "@/assets/images";

export const DashboardBlogspot = () => {
  const { blogListData, paginationData, isLoader, handlePageChange } =
    useBlogListHook();
  return (
    <>
      <Loader show={isLoader} />
      <div>
        {!isLoader && (
          <Card>
            <h1 className="text-2xl mb-2 mb-sm-3">Utforska guider</h1>
            <p>Här är några potentiella ämnen du kan utforska.</p>
            <div className={styles.blogGrid}>
              {blogListData && blogListData?.rows
                ? blogListData?.rows?.map((post: any, index: number) => {
                    return (
                      <Link
                        href={`/dashboard/blogspot/${post.slug}`}
                        className={clsx(
                          "text-decoration-none d-flex flex-column justify-content-between",
                          styles.dashboardBlogCard
                        )}
                        key={`blog-${index}`}
                      >
                        <div>
                         <div className="ratio ratio-16x9 mb-2">
                          <img
                            src={post.blog_image}
                            alt={post.slug}
                            className={"object-fit-cover radius-2xs"}
                          />
                        </div>
                        <div className="d-flex flex-column gap-2 mt-4">
                          <h5 className="fw-normal text-base d-flex align-items-center gap-2 text-dark">
                            <span
                              className={clsx(
                                styles.calendarIcon,
                                "d-flex align-items-center justify-content-center"
                              )}
                            >
                              {Icons.calander}
                            </span>
                            {dayjs(post?.createdAt)?.format("DD MMM, YYYY")}
                          </h5>
                          <h4 className="fw-fw-semibold text-dark lh-base text-xl  clamp clamp-3">
                            {post.title}
                          </h4>
                          <p
                            className="text-dark clamp clamp-2"
                            dangerouslySetInnerHTML={{
                              __html: post?.description,
                            }}
                          ></p>
                        </div>
                        </div>
                        <div className="d-flex align-items-center gap-3 mt-3">
                          <div
                            className={clsx(styles.blogUser, "ratio ratio-1x1")}
                          >
                            <img
                              src={post?.posted_by_image || user}
                              alt="blog-post-image"
                              className="rounded-circle"
                            />
                          </div>
                          <div>
                            <h5 className="text-md fw-medium mb-1 text-dark">
                              {post?.posted_by}
                            </h5>
                            <h5 className="text-base fw-normal mb-0 text-gray">
                              {post?.designation}
                            </h5>
                          </div>
                        </div>
                      </Link>
                    );
                  })
                : !isLoader && <>No Blogs Available</>}
            </div>
          </Card>
        )}
        <Pagination
          pageSize={paginationData?.pageSize}
          currentPage={paginationData?.currentPage}
          totalItems={paginationData?.totalItems}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};
