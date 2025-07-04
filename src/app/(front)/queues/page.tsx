"use client";
import {
  AssistanceSlider,
  Button,
  Card,
  FLSkeleton,
  Input,
  Modal,
  Select,
} from "@/components";
import { Icons } from "@/Const/Icons";
import clsx from "clsx";
import styles from "../page.module.css";
import Image from "next/image";
import { useCityDetailHook } from "@/hooks/common/cityDetail.hook";
import { cx } from "class-variance-authority";
import { user } from "@/assets/images";

export default function CityDetail() {
  const {
    router,
    isLoader,
    queuesData,
    allAreaList,
    isAreaLoader,
    areaListData,
    selectedQueue,
    paginationData,
    isReadMoreModal,
    readMoreHandler,
    handleInputChange,
    handleSelectChange,
  } = useCityDetailHook();

  return (
    <>
      <section className="city-detail bg-doctor-light space-top-sm">
        <div className="container">
          <div className="space-xs-mb d-flex gap-4">
            <div className="row w-100">
              <div className="col-md-6">
                <Input
                  className={clsx(styles.secInput, styles.bigInput)}
                  secInput={true}
                  id="searchBox"
                  type="search"
                  name="search"
                  placeholder="Sök på stad eller område"
                  icon={
                    <>
                      <span className="d-flex align-items-center justify-content-center">
                        {Icons.search}
                      </span>
                    </>
                  }
                  parentClassName="mb-2 mb-xl-3"
                  iconClassCommon="email-ico-translateY"
                  value={paginationData?.search}
                  onChange={handleInputChange}
                  autoFocus
                />
              </div>
              <div className="col-md-6">
                <Select
                  // label="Välj stad eller område"
                  placeholder="Vänligen välj område"
                  options={areaListData}
                  value={paginationData?.areaId}
                  selectedItem={areaListData.find(
                    (area) => area.id === paginationData?.areaId
                  )}
                  onChange={(event: any) => handleSelectChange(event, "areaId")}
                />
              </div>
            </div>
          </div>
          <p className="text-lg text-dark fw-semibold space-xs-mb">
            bostadsköer{" "}
            <span className="text-gray">
              {" "}
              {queuesData?.queue?.totalItems > 0 &&
                `(${queuesData?.queue?.totalItems} tillgängliga totalt)`}
            </span>
          </p>

          <div className={clsx(styles.cityCardWrapper)}>
            {isLoader && (
              <div className="w-100">
                <Card
                  className="h-100"
                  contentClassName="h-100 d-flex flex-column justify-content-between"
                >
                  <FLSkeleton isCard />
                </Card>
              </div>
            )}

            {!isLoader &&
              queuesData?.queue?.rows?.list?.length > 0 &&
              queuesData?.queue?.rows?.list?.map((item, index) => {
                return (
                  <div
                    key={item?.id}
                    className={clsx(
                      styles.citydetailCard,
                      "card space-xs-p d-flex flex-column gap-2xs radius-xs"
                    )}
                  >
                    <div className={clsx(styles.queueImg, "ratio ratio-1x1")}>
                      <img
                        className="radius-2xs"
                        src={queuesData?.queue?.rows?.mediaUrl + item?.image}
                        alt="city"
                        width={60}
                        height={40}
                      />
                    </div>
                    <div>
                      <p className="text-lg text-dark fw-semibold mb-2 clamp clamp-2 text-break">
                        {item.title}
                      </p>
                      <p className="text-base text-gray fw-medium clamp clamp-2 text-break">
                        {item.description}
                      </p>
                    </div>
                    <div className="d-flex gap-3xs flex-wrap flex-md-nowrap">
                      <button
                        className={clsx(
                          styles.cityDetailBtn,
                          styles.joinBtn,
                          "cursor-pointer text-theme bg-accent fw-semibold border-0",
                          "w-100" 
                        )}
                        
                        onClick={() => {
                          router.push("/#plans");
                        }}
                      >
                        Gå med
                      </button>
                      <Modal
                        open={isReadMoreModal}
                        size="small"
                        showClose={true}
                        onOpenChange={() => readMoreHandler()}
                        trigger={
                          <Button
                            className={cx(
                              styles.cardBtn,
                              styles.colorjoin,
                              "radius-2xs-imp"
                            )}
                            variant={"accent"}
                            full
                            onClick={() => readMoreHandler(item)}
                          >
                            Läs mer
                          </Button>
                        }
                      >
                        <div className="space-margin-top-sm d-flex flex-column justify-content-text-center align-items-center text-center">
                          <div className={cx(styles.queueDetailImg, "w-100")}>
                            <img
                              src={
                                queuesData?.queue?.rows?.mediaUrl +
                                  selectedQueue?.image || user
                              }
                              alt={"Queue Image"}
                              className={"object-fit-cover radius-2xs"}
                            />
                          </div>
                          <h1 className="mt-2">{selectedQueue?.title}</h1>
                          <p className="mt-2"> {selectedQueue?.description}</p>
                        </div>
                      </Modal>
                    </div>
                  </div>
                );
              })}

            {!isLoader && queuesData?.queue?.totalItems == 0 && (
              <p>No Queues found</p>
            )}
          </div>

          <section id="assistance" className="space-lg-py position-relative">
            <div className="container d-flex align-items-center justify-content-between">
              <div className="section-title-right-space w-100 mb-sm-3  ">
                <h2 className="text-3xl fw-bold mb-2 mb-xxl-3">
                  Utforska områdena
                </h2>
              </div>
            </div>

            {isAreaLoader ? (
              <div className="space-xs-mb">
                <Card
                  className="h-100"
                  contentClassName="h-100 d-flex flex-column justify-content-between"
                >
                  <FLSkeleton isCard />
                </Card>
              </div>
            ) : (
              <div
                className={clsx(styles.onlyImgSlider, "  position-relative")}
              >
                <AssistanceSlider
                  blogListData={{ rows: allAreaList }}
                  variant="imgslide"
                  slidePerView={{
                    0: { slidesPerView: 1.3, spaceBetween: 15 },
                    576: { slidesPerView: 2.2, spaceBetween: 20 },
                    768: { slidesPerView: 2.8, spaceBetween: 20 },
                    1200: { slidesPerView: 3, spaceBetween: 20 },
                  }}
                />
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}
