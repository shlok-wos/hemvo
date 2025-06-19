"use client";
import { blogDetailsByID } from "@/actions";
import { BlogDetailsTypes } from "@/types/blog.types";
import { getCookie } from "cookies-next";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useBlogDetailsHook = () => {
  const params = useParams();
  const router = useRouter();
  const token = getCookie("_token");
  const [blogData, setBlogData] = useState<BlogDetailsTypes>(
    {} as BlogDetailsTypes
  );
  const [isLoader, setIsLoader] = useState<boolean>(true);

  useEffect(() => {
    getBlogList(params?.post);

  }, [params]);

  const getBlogList = async (params: any) => {
    try {
      setIsLoader(true)
      const getBlogDetails = await blogDetailsByID(params);
      if (getBlogDetails.success) {
        setBlogData(getBlogDetails?.data);
      } else {
        if (token) {
          router.push("/dashboard/blogspot");
        } else {
          toast.error(getBlogDetails?.message)
          router.push("/#assistance");
        }
      }
      setIsLoader(false)
    } catch (error) {
      setIsLoader(false)
      console.log(error);
    }
  };

  return {
    blogData,
    isLoader
  };
};
