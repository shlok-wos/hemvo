"use client";
// import { useBlogDetailsHook } from "@/hooks/user/blogs/blogDetails.hook";
import moment from "moment";
import { Loader } from "@/components";
import styles from "./FrontBlogPost.module.css";
import { useBlogDetailsHook } from "@/hooks/user/blogs/blogDetails.hook";

export const FrontBlogPost = () => {
	const { blogData, isLoader } = useBlogDetailsHook();
	const formattedDate = blogData?.updatedAt
		? moment(blogData?.updatedAt).format("MMMM D, YYYY")
		: null;
	return (
		<main>
			<Loader show={isLoader} />
			<div className="container space-top-sm space-bottom-sm">
				<div className={styles.postContainer}>
					<div className="d-flex align-items-center">
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
					<div className={styles.content}>
						<div dangerouslySetInnerHTML={{ __html: blogData?.description }} />
					</div>
				</div>
			</div>
		</main>
	);
};
