"use client";
import { Card } from "@/components/Card";
import styles from "./HousingControlPanel.module.css";
import clsx from "clsx";
import { ArrowRight } from "@phosphor-icons/react";
import { Table } from "@/components/Table";
import { Input, Select } from "@/components/Form";
import { useHousingQueueManageHook } from "@/hooks/user/housingQueues/housingQueuesManage.hook";
import { FLSkeleton } from "@/components";

export const HousingControlPanel = () => {
  const {
    isCountLoader,
    paginationData,
    isQueuesLoader,
    houseControlPanel,
    housingControlList,
    housingControlPanelListColumns,
    handlePageChange,
    handleInputChange,
    handlePerRowsChange,
  } = useHousingQueueManageHook();

  return (
    <div>
      <h2 className="text-2xl fw-bold mb-3">Kontrollpanel</h2>
      <div className={clsx(styles.queueCardStatusGrid, "d-grid")}>
        {isCountLoader ? (
          <Card
            className="h-100"
            contentClassName="h-100 d-flex flex-column justify-content-between"
          >
            <FLSkeleton isCard isCardCompact={false} />
          </Card>
        ) : (
          houseControlPanel.map((item) => (
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
                {/* <a
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
                </a> */}
              </div>
            </Card>
          ))
        )}
      </div>
      <div className="d-flex align-items-start align-items-sm-center justify-content-between mt-3 gap-2 gap-sm-0 flex-column flex-sm-row">
        {/* <div className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap">
          <Select
            placeholder="Kötyp"
            options={[
              {
                id: "1",
                value: "Business",
                label: "Näringsinkomst",
              },
              {
                id: "2",
                value: "Passive",
                label: "Passiv inkomst",
              },
              {
                id: "3",
                value: "Rental",
                label: "Hyresinkomst",
              },
            ]}
          />
          <Select
            placeholder="Köstatus"
            options={[
              {
                id: "1",
                value: "Waiting",
                label: "Väntar",
              },
              {
                id: "2",
                value: "InProgress",
                label: "Pågår",
              },
              {
                id: "3",
                value: "Completed",
                label: "Avslutad",
              },
            ]}
          />
        </div> */}
        <Input
          type="search"
          placeholder="Sök efter kö-namn, stad eller nyckelord"
          parentClassName={clsx(styles.controlInput)}
          name="search"
          value={paginationData?.search}
          onChange={handleInputChange}
        />
      </div>

      <Card className={clsx(styles.controlPanelTable, "mt-4")}>
        <Table
          rowData={housingControlList?.rows}
          columns={housingControlPanelListColumns}
          handlePageChange={handlePageChange}
          handlePerRowsChange={handlePerRowsChange}
          totalRows={housingControlList?.totalItems}
          loading={isQueuesLoader}
          pageSize={paginationData?.pageSize}
        />
      </Card>
    </div>
  );
};
