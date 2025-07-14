"use client";
import React from "react";
import clsx from "clsx";
import styles from "./Table.module.css";
import DataTable from "react-data-table-component";

import { ReactNode } from "react";
import { TableProps as DataTableProps, TableColumn } from "react-data-table-component";

type TableProps<T> = {
  rowData: T[];
  columns: TableColumn<T>[];
};

export const Table = <T extends object>({ rowData, columns }: TableProps<T>) => {
  return (
    <div className={clsx(styles.customTableContainer)}>
      <DataTable
        columns={columns}
        data={rowData}
        highlightOnHover
        striped
        customStyles={{
          headRow: {
            style: {
              backgroundColor: "#f5f5f5",
              fontWeight: 500,
            },
          },
          rows: {
            style: {
              borderBottom: "1px solid #e0e0e0",
            },
          },
        }}
      />
    </div>
  );
};
