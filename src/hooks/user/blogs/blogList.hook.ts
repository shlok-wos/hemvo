import { blogList } from "@/actions/user/blogs.action";
import { BlogListTypes, BlogPaginationData } from "@/types/blog.types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useBlogListHook = () => {
  const [blogListData, setblogListData] = useState<BlogListTypes>(
    {} as BlogListTypes
  );
  const [paginationData, setPaginationData] = useState<BlogPaginationData>(
    {} as BlogPaginationData
  );
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const pathname = usePathname();
  const isblogsListPage = pathname.includes("/blogspot");
  useEffect(() => {
    let defaultPaginationData = {
      currentPage: 1,
      pageSize: 12,
      totalItems: 0,
    };
    if (!isblogsListPage) {
      defaultPaginationData = {
        currentPage: 1,
        pageSize: 8,
        totalItems: 0,
      };
    }
    setPaginationData(defaultPaginationData);
    if (defaultPaginationData?.pageSize) {
      getBlogList(
        defaultPaginationData?.currentPage,
        defaultPaginationData?.pageSize
      );
    }
  }, [pathname]);

  const getBlogList = async (currentPage: any, pageSize: any = 9) => {
    try {
      setIsLoader(true)
      let apiUrl = `?currentPage=${currentPage}&pageSize=${pageSize}`;
      apiUrl += !isblogsListPage ? `&isHome=1` : '';
      const getBlogList = await blogList(apiUrl);
      if (getBlogList.success) {
        setblogListData(getBlogList.data);
        if (isblogsListPage) {
          setPaginationData({
            ...paginationData,
            pageSize: pageSize,
            currentPage: currentPage,
            totalItems: Number(getBlogList.data.totalItems),
          });
        }
      }
      setIsLoader(false)
    } catch (error) {
      setIsLoader(false)
      console.log(error);
    }
  };

  const handlePageChange = (currentPage: any) => {
    getBlogList(currentPage, paginationData?.pageSize);
    setPaginationData((prevPaginationData) => {
      return { ...prevPaginationData, currentPage: currentPage };
    });
  };

  return {
    isLoader,
    blogListData,
    paginationData,
    handlePageChange,
  };
};
