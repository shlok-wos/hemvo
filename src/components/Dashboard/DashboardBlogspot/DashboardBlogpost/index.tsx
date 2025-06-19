"use client";
import styles from "../DashboardBlogspot.module.css";
import { useBlogDetailsHook } from "@/hooks/user/blogs/blogDetails.hook";
import moment from "moment";
import { Button, Card, Loader } from "@/components";
import { ArrowLeft } from "@phosphor-icons/react";

export const DashboardBlogpost = () => {
	const { blogData, isLoader } = useBlogDetailsHook();
	const formattedDate = blogData?.updatedAt
		? moment(blogData?.updatedAt).format("MMMM D, YYYY")
		: null;
	return (
		<div>
			<Loader show={isLoader} />
			<Card contentClassName={styles.postContainer}>
				{!isLoader && (
					<>
						<div className="d-flex align-items-center">
							<Button
								href="/dashboard/blogspot"
								title="Back"
								icon={<ArrowLeft size={24} weight="duotone" />}
								shape={"round"}
								className="me-4"
							/>
							<div>
								<h1 className="mb-2 lh-base">{blogData?.title}</h1>
								<p className="text-gray mb-3">{formattedDate}</p>
							</div>
						</div>

						<div className="ratio ratio-16x9 mb-3">
							{blogData?.blog_image && (
								<img
									src={blogData?.blog_image}
									alt="Post Banner"
									className="object-fit-cover radius-sm"
									width={800}
									height={450}
								/>
							)}
						</div>
					</>
				)}

				<div className={styles.content}>
					<div dangerouslySetInnerHTML={{ __html: blogData?.description }} />
				</div>
			</Card>
		</div>
	);
};
