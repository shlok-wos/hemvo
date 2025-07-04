"use client";
import { doFetchBlogsList } from "@/actions";
import { BlogListTypes, BlogPaginationData } from "@/types/blog.types";
import { useEffect, useState } from "react";

export const useBlogListHook = () => {
  const [isBlogListLoader, setIsBlogListLoader] = useState<boolean>(true);
  const [blogListData, setBlogListData] = useState<BlogListTypes>(
    {} as BlogListTypes
  );
  const [blogPaginationData, setBlogPaginationData] =
    useState<BlogPaginationData>({
      currentPage: 1,
      pageSize: 6,
    } as BlogPaginationData);

  useEffect(() => {
    getBlogList();
  }, []);

  const getBlogList = async () => {
    try {
      setIsBlogListLoader(true);
      const blogListResponse = await doFetchBlogsList();

      console.log({ blogListResponse: blogListResponse });
      if (blogListResponse?.data?.success) {
        setBlogListData(blogListResponse?.data?.data);
      }
      setIsBlogListLoader(false);
    } catch (error) {
      setIsBlogListLoader(false);
      console.log(error);
    }
  };

  return {
    isBlogListLoader,
    blogListData,
  };
};
