import { LineVertical } from "@phosphor-icons/react";
import { Input } from "../Input";
import { Select, SelectOption } from "../Select";

export const IncomeForm = ({
  errorMessage,
  rentalProfileData,
  handleOnChangeSelect,
  handleInputChange,
}: {
  errorMessage: any;
  rentalProfileData: any;
  handleOnChangeSelect: any;
  handleInputChange: any;
}) => {
  const optionList = [
    {
      id: "1",
      value: "Business",
      label: "Affärsinkomst",
    },
    {
      id: "2",
      value: "Passive",
      label: "Passiv inkomst",
    },
    {
      id: "3",
      value: "Rental",
      label: "Hyresintäkter",
    },
  ];

  return (
    <>
      <div className="d-flex flex-column gap-xs">
        <div className="row gy-3">
          <div className="col-md-6">
            <Input
              id="incomeAmount"
              name="incomeAmount"
              label="Månadsinkomst"
              placeholder="Månadsinkomst"
              postIcon={<LineVertical weight="regular" size={22} />}
              postText="SEK"
              value={rentalProfileData?.incomeAmount}
              onChange={handleInputChange}
              errorMessage={errorMessage?.incomeAmount}
            />
          </div>
          <div className="col-md-6">
            <Select
              isOpen={true}
              label="Typ av inkomst "
              placeholder="Övrig"
              options={optionList}
              name={"typeOfIncome"}
              onChange={(value: any) => {
                handleOnChangeSelect(value?.value, "typeOfIncome");
              }}
              value={rentalProfileData?.typeOfIncome}
              customItemToString={(item: SelectOption | null) => {
                return item ? item.label : "";
              }}
              selectedItem={optionList?.find((item: any) => {
                return item?.value == rentalProfileData?.typeOfIncome;
              })}
              errorMessage={errorMessage?.typeOfIncome}
            />
          </div>
        </div>
        {/* <div className="d-flex flex-column gap-3xs">
          <CustomCheckbox
            id="my-checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            backgroundColor="#2a6ef4"
            tickColor="#fff"
            label="Jag är student och/eller medlem i studentkår"
          />
          <p className="text-md fw-medium text-gray">
            Välj student om du vill kunna ställa dig i studentköer
          </p>
        </div> */}
      </div>
    </>
  );
};
