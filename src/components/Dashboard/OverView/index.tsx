"use client";

import { Card } from "@/components/Card";
import { cx } from "class-variance-authority";
import styles from "./OverView.module.css";
import { questionAsk, user } from "@/assets/images";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CaretRight } from "@phosphor-icons/react";
import { Select } from "@/components/Form";
import { Modal } from "@/components/Modal";
import { useQueueLisHook } from "@/hooks/user/queues/queueList.hook";
import { Pagination, FLSkeleton } from "@/components";
import { LineChart } from "@/components/LineChart";

export const OverView = () => {
  const {
    isLoader,
    queuesData,
    isJoinModal,
    areaListData,
    selectedQueue,
    paginationData,
    isReadMoreModal,
    isQueueJoinLoader,
    doQueueJoin,
    readMoreHandler,
    joinModalHandler,
    handlePageChange,
    handleSelectChange,
    cancelJoinModalHandler,
  } = useQueueLisHook();

  return (
    <div className={cx(styles.queueWrapper, "d-flex flex-column")}>
      <div
        className={cx(
          styles.chartSideCardContent,
          "row flex-column-reverse flex-xxl-row"
        )}
      >
        <div className="col-12 col-xxl-8">
          <Card>
            <div>
              <h3 className="text-xxl mb-1">Köpoäng</h3>
            </div>
            <h2 className="text-2xxl mt-2">
              {queuesData?.points ? queuesData?.points : 0}
            </h2>
            <div className={cx(styles.chartWrapper, "")}>
              {isLoader ? (
                <FLSkeleton isChart height={400} />
              ) : (
                <LineChart data={queuesData?.chartData} />
              )}
            </div>
          </Card>
        </div>
        <div
          className={cx(
            styles.sideCardWrapper,
            "col-12 col-xxl-4 d-flex flex-column flex-sm-row flex-xxl-column"
          )}
        >
          <Card className="h-100 w-100">
            <p className="text-md mb-1">Dagar med FlatQuest</p>
            <h2 className="text-2xl">{queuesData?.daysPassed}</h2>
          </Card>
          <Card className="h-100 w-100">
            <p className="text-md mb-1">Dina områden</p>
            <h2 className="text-2xl">{queuesData?.yourAreas}</h2>
          </Card>
          <Card className="h-100 w-100">
            <p className="text-md mb-1">Aktiva köer</p>
            <h2 className="text-2xl">{queuesData?.activeQueues}</h2>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 col-xl-4">
          <Select
            label="Välj stad eller område"
            placeholder="Please Select Area"
            options={areaListData}
            value={paginationData?.areaId}
            selectedItem={areaListData.find(
              (area) => area.id === paginationData?.areaId
            )}
            onChange={(event: any) => handleSelectChange(event, "areaId")}
          />
        </div>
      </div>
      <div className={"position-relative"}>
        <div className={cx(styles.queueCardWrapper, "row")}>
          {isLoader ? (
            <div className="row">
              <div className="col-12 col-md-6 col-xxl-4">
                <Card
                  className="h-100"
                  contentClassName="h-100 d-flex flex-column justify-content-between"
                >
                  <FLSkeleton isCard />
                </Card>
              </div>
            </div>
          ) : (
            !isLoader &&
            queuesData?.queue?.rows?.list?.length > 0 &&
            queuesData?.queue?.rows?.list?.map((item: any) => {
              return (
                <div key={item?.id} className="col-12 col-md-6 col-xxl-4">
                  <Card
                    className="h-100"
                    contentClassName="h-100 d-flex flex-column justify-content-between"
                  >
                    <div>
                      <div
                        className={cx(
                          styles.logoWrapper,
                          "d-flex justify-content-between"
                        )}
                      >
                        <div className={cx("w-100 ratio")}>
                          {/* <Image
                            className="w-100 h-auto"
                            src={
                              queuesData?.queue?.rows?.mediaUrl + item?.image
                            }
                            alt={item?.title}
                            width={120}
                            height={50}
                          /> */}
                          <img
                            src={
                              queuesData?.queue?.rows?.mediaUrl + item?.image
                            }
                            alt={item?.name}
                            className={"object-fit-cover"}
                          />
                        </div>
                        {item?.rank && (
                          <span className="text-g1 text-xl fw-medium">
                            # {item?.rank}
                          </span>
                        )}
                      </div>
                      <h4 className="mt-3">{item.title}</h4>
                      <p className="mt-2 text-gray text-sm clamp clamp-2">
                        {item.description}
                      </p>
                      {/* <p
                        // href=""
                        className={
                          "mt-2 d-flex align-items-center text-decoration-none"
                        }
                      >
                        Terms <CaretRight size={16} />
                      </p> */}
                    </div>
                    <div
                      className={cx("d-flex gap-3 mt-3", styles.cardBtnWrapper)}
                    >
                      <Modal
                        open={isJoinModal}
                        title={selectedQueue?.joined ? "inte Gå med" : "Gå med"}
                        size="small"
                        showClose={false}
                        closeOnOverlayClick={false}
                        trigger={
                          <Button
                            className={cx(styles.cardBtn, styles.colorjoin)}
                            variant={"accent"}
                            full
                            onClick={() => joinModalHandler(item)}
                          >
                            {item?.joined ? "inte Gå med" : "Gå med"}
                          </Button>
                        }
                      >
                        <div className="d-flex justify-content-center">
                          {/* <Image
                            width={280}
                            src={questionAsk}
                            alt="confirmation"
                          /> */}

                          <img
                            src={questionAsk}
                            alt={"confirmation"}
                            className={"object-fit-cover radius-sm"}
                          />
                        </div>
                        <p className="text-xl text-center fw-500 mt-4 mb-3">
                          Are you sure you want to{" "}
                          {selectedQueue?.joined ? "inte Gå med" : "Gå med"}?
                        </p>
                        <div className="d-flex justify-content-end gap-3">
                          <Button
                            className={styles.cardBtn}
                            onClick={() => doQueueJoin(selectedQueue)}
                            disabled={isQueueJoinLoader}
                          >
                            Confirm
                          </Button>
                          <Button
                            className={styles.cardBtn}
                            variant={"accent"}
                            onClick={() => cancelJoinModalHandler()}
                          >
                            Cancel
                          </Button>
                        </div>
                      </Modal>

                      <Modal
                        open={isReadMoreModal}
                        size="small"
                        showClose={true}
                        closeOnOverlayClick={false}
                        onOpenChange={() => readMoreHandler()}
                        trigger={
                          <Button
                            className={cx(styles.cardBtn, styles.colorjoin)}
                            variant={"accent"}
                            full
                            onClick={() => readMoreHandler(item)}
                          >
                            Läs mer
                          </Button>
                        }
                      >
                        <div
                          className={cx(styles.detailLogoWrapper, "w-100 mb-2")}
                        >
                          {/* <Image
                            className="w-100 h-auto"
                            src={
                              queuesData?.queue?.rows?.mediaUrl +
                                selectedQueue?.image || user
                            }
                            alt={"logo"}
                            width={150}
                            height={50}
                          /> */}
                          <img
                            src={
                              queuesData?.queue?.rows?.mediaUrl +
                                selectedQueue?.image || user
                            }
                            alt={"Queue Image"}
                            className={"object-fit-cover radius-sm"}
                          />
                        </div>
                        <h1 className="lh-base">{selectedQueue?.title}</h1>

                        <div>
                          <p> {selectedQueue?.description}</p>
                        </div>
                      </Modal>
                    </div>
                  </Card>
                </div>
              );
            })
          )}

          {!isLoader && queuesData?.queue?.rows?.list?.length === 0 && (
            <p>Inga bostadsköer tillgängliga</p>
          )}
        </div>

        {queuesData?.queue?.rows?.list?.length > 0 && (
          <Pagination
            pageSize={paginationData?.pageSize}
            currentPage={paginationData?.currentPage}
            totalItems={queuesData?.queue?.totalItems}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};
