"use client";
import { Card, Loader, Pagination } from "@/components";
import Link from "next/link";
import styles from "./DashboardBlogspot.module.css";
import { useBlogListHook } from "@/hooks/user/blogs/blogList.hook";

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
												className="text-decoration-none"
												key={`blog-${index}`}
											>
												<article>
													<div className="ratio ratio-16x9 mb-2">
														<img
															src={post.blog_image}
															alt={post.slug}
															className={"object-fit-cover radius-sm"}
														/>
													</div>

													<h6 className="fw-medium text-dark lh-base text-base clamp clamp-3">
														{post.title}
													</h6>
												</article>
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
