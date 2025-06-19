export type BlogListTypes = {
   count?: number;
   currentPage?: number;
   hasNext?: boolean;
   hasPrevious?: boolean;
   next?: number;
   previous?: number;
   rows?: any;
   totalItems?: number;
   totalPages?: number;
}
export type BlogDetailsTypes = {
   blog_image: string;
   description: string;
   id: number;
   slug: string;
   title: string;
   createdAt: string;
   updatedAt: string;
}

export type BlogPaginationData = {
   currentPage?: number;
   pageSize?: number;
   totalItems?: number;
}
