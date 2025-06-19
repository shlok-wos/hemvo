import React from "react";
import ResponsivePagination from "react-responsive-pagination";
import styles from "./Pagination.module.css";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

interface PaginationTypes {
  pageSize?: number;
  currentPage?: number;
  totalItems?: number;
  onChange?: (page: number) => void;
}

export const Pagination: React.FC<any> = ({
  pageSize = 10,
  currentPage = 1,
  totalItems = 5,
  onChange = () => {},
}: PaginationTypes) => {
  const dividedTotalPages = Math.ceil(totalItems / pageSize);
  return (
    <ResponsivePagination
      current={currentPage}
      total={dividedTotalPages}
      onPageChange={onChange}
      className={styles.pagination}
      navClassName={styles.paginationNav}
      pageLinkClassName={styles.btn}
      activeItemClassName={styles.active}
      disabledItemClassName={styles.disabled}
      previousLabel={<CaretLeft weight="bold" />}
      nextLabel={<CaretRight weight="bold" />}
    />
  );
};
