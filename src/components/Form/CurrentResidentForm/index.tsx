import { Input } from "../Input";
import { Select, SelectOption } from "../Select";

export const CurrentResidentForm = ({
  errorMessage,
  rentalProfileData,
  handleOnChangeSelect,
}: {
  errorMessage: any;
  rentalProfileData: any;
  handleOnChangeSelect: any;
}) => {
  const optionList = [
    {
      id: "1",
      value: "hotel",
      label: "Hotel",
    },
    {
      id: "2",
      value: "hostel",
      label: "Hostel",
    },
    {
      id: "3",
      value: "guesthouse",
      label: "Guesthouse",
    },
    {
      id: "4",
      value: "lodge",
      label: "Lodge",
    },
    {
      id: "5",
      value: "homestay",
      label: "Homestay",
    },
  ];
  return (
    <>
      <div className="row gy-3">
        <div className="col-md-6">
          <Select
            isOpen={true}
            label="Boendeform"
            placeholder="Bor hos föräldrar"
            options={optionList}
            name={"accomodationType"}
            value={rentalProfileData?.accomodationType}
            customItemToString={(item: SelectOption | null) => {
              return item ? item.label : "";
            }}
            selectedItem={optionList?.find((item: any) => {
              return item?.value == rentalProfileData?.accomodationType;
            })}
            onChange={(value: any) => {
              handleOnChangeSelect(value?.value, "accomodationType");
            }}
            errorMessage={errorMessage?.accomodationType}
          />
        </div>
        <div className="col-md-6">
          <Input
            id="guardianChildrenCount"
            label="Antal barn du är vårdnadshavare för"
            placeholder="Ange ditt efternamn"
            counter={true}
            className="text-center text-black"
            name={"guardianChildrenCount"}
            value={rentalProfileData?.guardianChildrenCount}
            onChange={(value: any) =>
              handleOnChangeSelect(value, "guardianChildrenCount")
            }
            errorMessage={errorMessage?.guardianChildrenCount}
          />
        </div>
      </div>
    </>
  );
};
