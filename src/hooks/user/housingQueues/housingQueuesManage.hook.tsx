"use client";
import {
  housingControlCountDetails,
  housingControlListDetails,
} from "@/actions/user/housingControl.action";
import { Icons } from "@/Const/Icons";
import {
  HousingControlCountDetailsType,
  HousingControlPaginationData,
  housingControlType,
  QueueItemType,
} from "@/types/housingControlPanel.types";
import {
  ArrowsClockwise,
  Database,
  UserList,
  WarningDiamond,
} from "@phosphor-icons/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "../../../components/Dashboard/HousingControlPanel/HousingControlPanel.module.css";
import { debounce } from "lodash";
import { Button, Modal } from "@/components";
import { user } from "@/assets/images";

export const useHousingQueueManageHook = () => {
  const router = useRouter();

  const [isCountLoader, setIsCountLoader] = useState<boolean>(false);
  const [isQueuesLoader, setIsQueuesLoader] = useState<boolean>(false);
  const [housingControlData, setHousingControlData] =
    useState<HousingControlCountDetailsType>(
      {} as HousingControlCountDetailsType
    );
  const [housingControlList, setHousingControlList] =
    useState<housingControlType>({} as housingControlType);
  const [paginationData, setPaginationData] =
    useState<HousingControlPaginationData>({
      currentPage: 1,
      pageSize: 5,
      isPaginate: true,
      search: "",
    });
  const [isReadMoreModal, setIsReadMoreModal] = useState<boolean>(false);
  const [selectedQueue, setSelectedQueue] = useState<QueueItemType>(
    {} as QueueItemType
  );

  useEffect(() => {
    getHousingControlDetails();
  }, []);

  useEffect(() => {
    getHousingControlList(paginationData);
  }, [paginationData?.currentPage, paginationData?.pageSize]);

  const readMoreHandler = (data: any = {}) => {
    setIsReadMoreModal(!isReadMoreModal);
    if (Object?.keys(data)?.length > 0) {
      setSelectedQueue(data);
    }

    if (isReadMoreModal) {
      setSelectedQueue({} as QueueItemType);
    }
  };

  const getHousingControlList = async (data: HousingControlPaginationData) => {
    try {
      setIsQueuesLoader(true);

      const housingControlListDetailsResponse = await housingControlListDetails(
        data?.isPaginate,
        data?.currentPage,
        data?.pageSize,
        data?.search
      );

      if (housingControlListDetailsResponse.success) {
        setHousingControlList(housingControlListDetailsResponse?.data);
      }
      setIsQueuesLoader(false);
    } catch (error) {
      setIsQueuesLoader(false);
      console.log(error);
    }
  };

  const getHousingControlDetails = async () => {
    try {
      setIsCountLoader(true);

      const housingControlDetailsResponse = await housingControlCountDetails();
      if (housingControlDetailsResponse.success) {
        setHousingControlData(housingControlDetailsResponse?.data);
      }
      setIsCountLoader(false);
    } catch (error) {
      setIsCountLoader(false);
      console.log(error);
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event?.target;

    setPaginationData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));

    debounceSearchHandler({
      ...paginationData,
      [name]: value,
      currentPage: 1,
    });
  };

  const debounceSearchHandler = useCallback(
    debounce(async (data) => {
      await getHousingControlList(data);
    }, 1000),
    []
  );

  const handlePageChange = (currentPage: any) => {
    setPaginationData((prevData) => ({
      ...prevData,
      currentPage: currentPage,
    }));
  };

  const handlePerRowsChange = (newPerPage: number, page: number) => {
    setPaginationData((prevData) => ({
      ...prevData,
      currentPage: page,
      pageSize: newPerPage,
    }));
  };

  const houseControlPanel = [
    {
      id: 1,
      icon: Icons.iconUser,
      label: "Aktiva köer",
      count: housingControlData?.activeQueues,
      bgColor: "bgGreen",
      iconColor: "iconGreen",
    },
    {
      id: 2,
      icon: <ArrowsClockwise size={18} />,
      label: "Bearbetas",
      count: housingControlData?.bestRank,
      bgColor: "bgLightYellow",
      iconColor: "iconLightYellow",
    },
    {
      id: 3,
      icon: <Database size={18} />,
      label: "Betalköer",
      count: housingControlData?.totalJoinedQueues,
      bgColor: "bgBlue",
      iconColor: "iconBlue",
    },
    {
      id: 4,
      icon: <WarningDiamond size={18} />,
      label: "Inaktiva köer",
      count: housingControlData?.inactiveQueues,
      bgColor: "bgRed",
      iconColor: "iconRed",
    },
    {
      id: 5,
      icon: <UserList size={18} />,
      label: "Hyresvärdar",
      count: housingControlData?.landlords,
      bgColor: "bgPurple",
      iconColor: "iconPurple",
    },
  ];

  const housingControlPanelListColumns = useMemo(() => {
    return [
      {
        name: "Könamn",
        // selector: (row: any) => row.make.name,
        width: "500px",
        cell: (row: any) => (
          <div className="d-flex align-items-center gap-3">
            <div
              className={clsx(styles.contentImgWrapper, "w-100 flex-shrink-0")}
            >
              <div className="w-100">
                <img
                  src={housingControlList?.queueImageUrl + row?.queue?.image}
                  alt={`${row?.queue?.title} logo`}
                  className="object-fit-cover"
                />
              </div>
            </div>
            <div>
              <h4 className="text-md fw-medium text-dark mb-1">
                {row?.queue?.title}
              </h4>
              <h4 className="text-base fw-normal text-shadow clamp clamp-2">
                {row?.queue?.description}
              </h4>
            </div>
          </div>
        ),
      },
      {
        name: "Kommuner",
        width: "180px",
        cell: (row: any) => (
          <span className={clsx(styles.kommunBadge, "text-base")}>
            {row.queue?.area?.name}
          </span>
        ),
      },
      {
        name: "Status",
        width: "160px",
        cell: (row: any) => {
          return (
            <span
              className={clsx(
                row.queue?.status
                  ? styles.statusBadge
                  : styles.inactiveStatusBadge,
                "text-base fw-medium"
              )}
            >
              {row.queue?.status ? "Aktiv" : "Inaktiv"}
            </span>
          );
        },
      },
      {
        name: "Kötid",
        width: "120px",
        cell: (row: any) => (
          <span className="text-base">
            {row.daysPassed + ` ${row.daysPassed > 1 ? "dagar" : "dag"}`}
          </span>
        ),
      },
      {
        name: "Rang",
        width: "160px",
        cell: (row: any) => (
          <span className="text-base">{"Köplats " + row?.rank}</span>
        ),
      },
      {
        name: "",
        width: "300px",
        cell: (row: any) => (
          <>
            <div className="d-flex align-items-center gap-3">
              <div className="text-base fw-medium text-dark">
                <Modal
                  open={isReadMoreModal}
                  size="medium"
                  showClose={true}
                  closeOnOverlayClick={true}
                  onOpenChange={() => readMoreHandler(row)}
                  trigger={
                    <Button
                      className={clsx(styles.cardBtn, styles.colorjoin)}
                      variant={"accent"}
                      full
                      onClick={() => readMoreHandler(row)}
                    >
                      Läs mer
                    </Button>
                  }
                >
                  <div className="space-margin-top-sm d-flex flex-column justify-content-text-center align-items-center">
                    <div className={clsx("w-100 modal-cover-img mb-2")}>
                      <img
                        src={
                          housingControlList?.queueImageUrl +
                            selectedQueue?.queue?.image || user
                        }
                        alt={"Queue Image"}
                        className={"object-fit-cover radius-2xs"}
                      />
                    </div>
                    <h1 className="lh-base">{selectedQueue?.queue?.title}</h1>

                    <div className="">
                      <p className="text-center">
                        {" "}
                        {selectedQueue?.queue?.description}
                      </p>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </>
        ),
      },
    ];
  }, [housingControlList, isReadMoreModal]);

  return {
    isCountLoader,
    paginationData,
    isQueuesLoader,
    houseControlPanel,
    housingControlList,
    housingControlPanelListColumns,
    handlePageChange,
    handleInputChange,
    handlePerRowsChange,
  };
};
