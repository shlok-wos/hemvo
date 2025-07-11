"use client";
import { useState } from "react";
import { Card } from "@/components/Card";
import styles from "./HousingControlPanel.module.css";
import clsx from "clsx";
import { ArrowRight } from "@phosphor-icons/react";
import { houseControlPanel } from "@/Const/data";
import { Table } from "@/components/Table";
import { Input, Select } from "@/components/Form";

export const HousingControlPanel = () => {
  const rowData = [
    {
      make: {
        name: "Ekerö Bostäder",
        link: "Ekerobostader.se",
        imgSrc:
          "https://alpha.whiteorangesoftware.com:9001/public/uploads/blogs/87c100ca-c07c-4409-b4ea-170359f8a5b7.jpeg",
      },
      model: "Ekerö",
      status: "Aktiv",
      kötId: "49 dagar",
    },
    {
      make: {
        name: "Tyresö bostäder",
        link: "Tyresobostader.se",
        imgSrc:
          "https://alpha.whiteorangesoftware.com:9001/public/uploads/blogs/87c100ca-c07c-4409-b4ea-170359f8a5b7.jpeg",
      },
      model: "Tyresö",
      status: "Aktiv",
      kötId: "33 dagar",
    },
    {
      make: {
        name: "Telge Bostäder",
        link: "Telge.se",
        imgSrc:
          "https://alpha.whiteorangesoftware.com:9001/public/uploads/blogs/87c100ca-c07c-4409-b4ea-170359f8a5b7.jpeg",
      },
      model: "Södertälje",
      status: "Aktiv",
      kötId: "33 dagar",
    },
  ];

  const columns = [
    {
      name: "Könamn",
      selector: (row: any) => row.make.name,
      width: "400px",
      cell: (row: any) => (
        <div className="d-flex align-items-center gap-3">
          <div className={clsx(styles.contentImgWrapper, "w-100")}>
            <div className="w-100">
              <img src={row.make.imgSrc} alt={`${row.make.name} logo`} />
            </div>
          </div>
          <div>
            <h4 className="text-md fw-medium text-dark mb-1">
              {row.make.name}
            </h4>
            <h4 className="text-base fw-normal text-shadow">{row.make.link}</h4>
          </div>
        </div>
      ),
    },
    {
      name: "Kommuner",
      selector: (row: any) => row.model,
      width: "180px",
      cell: (row: any) => (
        <span className={clsx(styles.kommunBadge, "text-base")}>
          {row.model}
        </span>
      ),
    },
    {
      name: "Din status i kön",
      selector: (row: any) => row.status,
      width: "160px",
      cell: (row: any) => (
        <span className={clsx(styles.statusBadge, "text-base fw-medium")}>
          {row.status}
        </span>
      ),
    },
    {
      name: "Kötid",
        selector: (row: any) => row.kötId,
      width: "120px",
      cell: (row: any) => <span className="text-base">{row.kötId}</span>,
    },
    {
      name: "Lösenord",
      width: "180px",
      cell: () => <span className="text-base">Kopiera</span>,
    },
    {
      name: "Hantera kön",
      width: "180px",
      cell: () => (
        <div className="d-flex align-items-center gap-3">
          <span className="text-base fw-medium text-dark">Läs mer</span>
          <span className="text-base fw-medium text-theme">Logga in</span>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl fw-bold mb-3">Kontrollpanel</h2>
      <div className={clsx(styles.queueCardStatusGrid, "d-grid")}>
        {houseControlPanel.map((item) => (
          <Card
            className={clsx(styles.queueCardStatus)}
            contentClassName="d-flex flex-column gap-3xs"
            key={item.id}
          >
            <div
              className={clsx(
                styles.cardIconWrapper,
                styles[item.bgColor],
                "d-flex align-items-center justify-content-center"
              )}
            >
              <div
                className={clsx(
                  styles.cardIcon,
                  styles[item.iconColor],
                  "d-flex align-items-center justify-content-center"
                )}
              >
                {item.icon}
              </div>
            </div>
            <h4 className="text-md text-gray text-capitalize fw-medium">
              {item.label}
            </h4>
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="text-xl text-dark">{item.count}</h3>
              <a
                href="javascript:void(0)"
                className={clsx(
                  styles.visaLink,
                  "text-dark text-base d-flex align-items-center justify-content-center text-decoration-none gap-2"
                )}
              >
                Visa
                <span className="d-flex align-items-center justify-content-center">
                  <ArrowRight size={18} />
                </span>
              </a>
            </div>
          </Card>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center gap-2">
          <Select
            placeholder="Kötyp"
            options={[
              {
                id: "1",
                value: "Hello",
                label: "",
              },
              {
                id: "2",
                value: "Hello2",
                label: "",
              },
              {
                id: "3",
                value: "Hello3",
                label: "",
              },
            ]}
          />
          <Select
            placeholder="Köstatus"
            options={[
              {
                id: "1",
                value: "Hello",
                label: "",
              },
              {
                id: "2",
                value: "Hello2",
                label: "",
              },
              {
                id: "3",
                value: "Hello3",
                label: "",
              },
            ]}
          />
        </div>
        <Input
          type="search"
          placeholder="Sök efter kö-namn, stad eller nyckelord"
        />
      </div>
      <Card className="mt-4">
        <Table rowData={rowData} columns={columns} />
      </Card>
    </div>
  );
};
