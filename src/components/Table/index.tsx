"use client";
import React from "react";
import clsx from "clsx";
import styles from "./Table.module.css";
import DataTable, { createTheme } from "react-data-table-component";
import { TableColumn } from "react-data-table-component";

type TableProps<T> = {
  rowData: T[];
  columns: TableColumn<T>[];
  parentClassName?: string;
  className?: string;
  loading?: boolean;
  totalRows?: number;
  handlePerRowsChange?: (perPage: number, page: number) => void; // Corrected signature
  handlePageChange?: (page: number) => void;
  pageSize?: number;
};

createTheme(
  "solarized",
  {
    background: {
      default: "white",
    },
    context: {
      background: "white",
      text: "red",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "light"
);

export const Table = <T extends object>({
  rowData,
  columns,
  parentClassName,
  className,
  loading,
  totalRows,
  handlePerRowsChange,
  handlePageChange,
  pageSize,
}: TableProps<T>) => {
  return (
    <div className={clsx(styles.customTableContainer, parentClassName)}>
      <DataTable
        className={className}
        columns={columns}
        data={rowData}
        highlightOnHover
        striped
        theme="solarized"
        fixedHeader
        pagination
        paginationServer
        progressPending={loading}
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        paginationPerPage={pageSize}
        noDataComponent={
          <div className="text-gray-500 py-6 text-center">
            Vänligen anmäl dig till bostadskö
          </div>
        }
      />
    </div>
  );
};
