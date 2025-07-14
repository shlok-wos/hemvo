"use client";
import { Button, Card, Select } from "@/components";
import cx from "clsx";
import styles from "./HousingQueue.module.css";
import { swedenMap } from "@/assets/images";
import clsx from "clsx";
import { useQueueListHook } from "@/hooks/user/queues/queueList.hook";
import { Pagination, FLSkeleton, Modal } from "@/components";

export const HousingQueue = () => {
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
  } = useQueueListHook();

  return (
    <>
      <div>
        <div className="row align-items-start">
          <div className="col-xxl-6 order-2 order-xxl-1">
            <Select
              label="Mest sökta"
              placeholder="Select a city"
              options={areaListData}
              value={paginationData?.areaId}
              selectedItem={areaListData.find(
                (area) => area.id === paginationData?.areaId
              )}
              onChange={(event) => handleSelectChange(event, "areaId")}
            />
            <h5 className="fw-fw-semibold text-xl text-dark mt-3">
              {queuesData?.queue?.totalItems
                ? queuesData?.queue?.totalItems + " köer visas"
                : ""}
            </h5>
            <div className={clsx(styles.housingQueueGrid, "d-grid mt-4")}>
              {isLoader ? (
                <Card
                  className="h-100"
                  contentClassName="h-100 d-flex flex-column justify-content-between"
                >
                  <FLSkeleton isCard />
                </Card>
              ) : (
                queuesData?.queue?.rows?.list?.length > 0 &&
                queuesData?.queue?.rows?.list?.map((queue) => (
                  <Card
                    key={queue.id}
                    contentClassName="h-100 d-flex flex-column justify-content-between"
                  >
                    <div>
                      <div className="d-flex justify-content-between">
                        <div
                          className={cx(
                            styles.logoWrapper,
                            "d-flex justify-content-between flex-shrink-0 w-100"
                          )}
                        >
                          <div className={cx("w-100 ratio")}>
                            <img
                              src={
                                queuesData?.queue?.rows?.mediaUrl + queue?.image
                              }
                              alt="Queue Image"
                              className="object-fit-cover"
                            />
                          </div>
                        </div>
                        {queue?.rank && (
                          <span className="text-g1 text-lg fw-medium">
                            Köplats {queue?.rank}
                          </span>
                        )}
                      </div>

                      <h4 className="mt-3">{queue.title}</h4>
                      <p className="mt-2 text-gray text-sm clamp clamp-2">
                        {queue.description}
                      </p>
                    </div>

                    <div
                      className={cx("d-flex gap-3 mt-3", styles.cardBtnWrapper)}
                    >
                      {/* <Button
                        className={cx(styles.cardBtn, styles.colorjoin)}
                        variant="accent"
                        full
                      >
                        Gå med
                      </Button>
                      <Button
                        className={cx(styles.cardBtn, styles.colorjoin)}
                        variant="accent"
                        full
                      >
                        Läs mer
                      </Button> */}

                      <Modal
                        open={isJoinModal}
                        title={selectedQueue?.joined ? "Gå ur kö" : "Gå med"}
                        size="small"
                        showClose={true}
                        closeOnOverlayClick={false}
                        trigger={
                          <Button
                            className={cx(styles.cardBtn, styles.colorjoin)}
                            variant={"accent"}
                            full
                            onClick={() => joinModalHandler(queue)}
                          >
                            {queue?.joined ? "Gå ur kö" : "Gå med"}
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
                            src={
                              queuesData?.queue?.rows?.mediaUrl +
                              selectedQueue?.image
                            }
                            alt={"confirmation"}
                            className={"object-fit-cover radius-sm"}
                          />
                        </div>
                        <p className="text-xl text-center fw-500 mt-4 mb-3">
                          Vill du verkligen gå ur bostadskön?
                          {/* {selectedQueue?.joined ? "Gå ur kö" : "Gå med"}? */}
                        </p>
                        <div className="d-flex justify-content-end gap-3">
                          <Button
                            className={styles.cardBtn}
                            onClick={() => doQueueJoin(selectedQueue)}
                            disabled={isQueueJoinLoader}
                          >
                            Bekräfta
                          </Button>
                          <Button
                            className={styles.cardBtn}
                            variant={"accent"}
                            onClick={() => cancelJoinModalHandler()}
                          >
                            Avbryt
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
                            onClick={() => readMoreHandler(queue)}
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
                            className={"object-fit-cover"}
                          />
                        </div>
                        <h1 className="lh-base">{selectedQueue?.title}</h1>

                        <div>
                          <p> {selectedQueue?.description}</p>
                        </div>
                      </Modal>
                    </div>
                  </Card>
                ))
              )}
            </div>

            {!isLoader && queuesData?.queue?.rows?.list?.length === 0 && (
              <p>Inga bostadsköer tillgängliga</p>
            )}

            {queuesData?.queue?.rows?.list?.length > 0 && (
              <Pagination
                pageSize={paginationData?.pageSize}
                currentPage={paginationData?.currentPage}
                totalItems={queuesData?.queue?.totalItems}
                onChange={handlePageChange}
              />
            )}
          </div>
          <div className="col-xxl-6 mb-3 mb-xxl-0 order-1 order-xxl-2">
            <div className="w-100">
              <img
                className="w-100 h-100"
                src={swedenMap.src}
                alt="sweden-map"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
