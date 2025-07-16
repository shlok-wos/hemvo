"use client";
import { Card } from "@/components/Card";
import { AddQueueTitle } from "./AddQueueTitle";
import { PreferanceForm } from "@/components/Form/PreferanceForm";
import { CurrentResidentForm } from "@/components/Form/CurrentResidentForm";
import { IncomeForm } from "@/components/Form/IncomeForm";
import { Button } from "@/components/Button";
import { useRentalProfileHook } from "@/hooks/user/rental-profile/rentalProfile.hook";
import { useMemo } from "react";

export const AddQueue = () => {
  const {
    cities,
    isLoader,
    errorMessage,
    rentalProfileData,
    onSaveRentalData,
    handleInputChange,
    handleOnchangeSwitch,
    handleOnChangeSelect,
  } = useRentalProfileHook();

  const addQueueData = useMemo(() => {
    return [
      {
        id: 1,
        stepNo: 1,
        title: "Boendepreferenser",
        text: "Vilken typ av boende passar dig?",
        data: (
          <PreferanceForm
            cities={cities}
            errorMessage={errorMessage}
            rentalProfileData={rentalProfileData}
            handleOnChangeSelect={handleOnChangeSelect}
            handleOnchangeSwitch={handleOnchangeSwitch}
            handleInputChange={handleInputChange}
          />
        ),
      },
      {
        id: 2,
        stepNo: 2,
        title: "Nuvarande boende",
        text: "Vissa köer kräver att du lämnar information om hur du bor idag",
        data: (
          <CurrentResidentForm
            errorMessage={errorMessage}
            rentalProfileData={rentalProfileData}
            handleOnChangeSelect={handleOnChangeSelect}
          />
        ),
      },
      {
        id: 3,
        stepNo: 3,
        title: "Inkomst",
        text: "Vissa köer kräver att du lämnar information om din ekonomi.",
        data: (
          <IncomeForm
            errorMessage={errorMessage}
            rentalProfileData={rentalProfileData}
            handleOnChangeSelect={handleOnChangeSelect}
            handleInputChange={handleInputChange}
          />
        ),
      },
    ];
  }, [rentalProfileData, errorMessage]);

  return (
    <>
      <Card
        className="mb-3"
        contentClassName="d-flex align-items-center justify-content-between"
      >
        <h2 className="text-2xl fw-bold">Bostadsprofil</h2>
      </Card>
      <div className="d-flex flex-column gap-2">
        {addQueueData.map((item, index) => {
          return (
            <>
              <Card
                key={index}
                collapsCard
                title={
                  <AddQueueTitle
                    stepNo={item.stepNo}
                    title={item.title}
                    text={item.text}
                  />
                }
                className=""
              >
                <div className="space-xs-mt">{item.data}</div>
              </Card>
            </>
          );
        })}
      </div>
      <div className="d-flex justify-content-center  space-xs-mb">
        <Button className="mt-4" onClick={onSaveRentalData}>
          fortsätta
        </Button>
      </div>
    </>
  );
};
