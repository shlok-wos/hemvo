"use client";
import React from "react";
import clsx from "clsx";
import styles from "./Table.module.css";
import DataTable from "react-data-table-component";

export const Table = ({ rowData, columns }) => {
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
