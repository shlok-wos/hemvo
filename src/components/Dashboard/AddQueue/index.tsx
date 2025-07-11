"use client";
import { Card } from "@/components/Card";
import { AddQueueTitle } from "./AddQueueTitle";
import { ContactDetailForm } from "@/components/Form/ContactDetailForm";
import { PreferanceForm } from "@/components/Form/PreferanceForm";
import { CurrentResidentForm } from "@/components/Form/CurrentResidentForm";
import { IncomeForm } from "@/components/Form/IncomeForm";
import { Button } from "@/components/Button";
import { useRentalProfileHook } from "@/hooks/user/rental-profile/rentalProfile.hook";

export const AddQueue = () => {
  const {
    isLoader,
    cities,
    rentalProfileData,
    isSuccessModalOpen,
    errorMessage,
    handleConfirmModal,
    handleOnchangeRange,
    handleOnchangeSwitch,
    handleOnChangeSelect,
    onSaveRentalData,
    handleInputChange,
    handleOnChangeTextArea,
  } = useRentalProfileHook();

  const addQueueData = [
    // {
    //   id: 1,
    //   stepNo: 1,
    //   title: "Kontaktuppgifter",
    //   text: "Din grundläggande kontaktinformation",
    //   data: <ContactDetailForm />,
    // },
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
      data: <CurrentResidentForm />,
    },
    {
      id: 3,
      stepNo: 3,
      title: "Inkomst",
      text: "Vissa köer kräver att du lämnar information om din ekonomi.",
      data: <IncomeForm />,
    },
  ];

  return (
    <>
      <Card className="mb-3" contentClassName="d-flex align-items-center justify-content-between">
        <h2 className="text-2xl fw-bold">Bostadsprofil</h2>
      </Card>
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
      <div className="d-flex justify-content-center  space-xs-mb">
        <Button className="mt-4" onClick={onSaveRentalData}>
          fortsätta
        </Button>
      </div>
    </>
  );
};
