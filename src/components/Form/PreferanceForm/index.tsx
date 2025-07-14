import { LineVertical } from "@phosphor-icons/react";
import { Input } from "../Input";
import { Select, Switch, SelectOption } from "@/components";

export const PreferanceForm = ({
  cities,
  errorMessage,
  rentalProfileData,
  handleOnChangeSelect,
  handleOnchangeSwitch,
  handleInputChange,
}: {
  cities: any;
  errorMessage: any;
  rentalProfileData: any;
  handleOnChangeSelect: any;
  handleOnchangeSwitch: any;
  handleInputChange: any;
}) => {
  return (
    <>
      <div className="mb-3">
        <h5 className="text-lg fw-bold mb-2">Typ av lägenhet</h5>
        <p className="text-gray">
          Vad för typ av lägenhet är du intresserad av?
        </p>
      </div>

      <div className="row gy-3 gy-md-0 mb- mt-md-0">
        <div className="col-md-4 col-xl-3">
          <Select
            options={cities}
            placeholder="Välj stad"
            errorMessage={errorMessage?.cityId}
            value={rentalProfileData?.cityId}
            customItemToString={(item: SelectOption | null) => {
              return item ? item.label : "";
            }}
            selectedItem={
              rentalProfileData?.cityId
                ? cities?.find((city: any) => {
                    return city?.id == rentalProfileData?.cityId;
                  })
                : undefined
            }
            onChange={(value: any) => {
              handleOnChangeSelect(value, "cityId");
            }}
          />
        </div>
        <div className="col-md-4 col-xl-4 offset-xl-1 d-flex align-items-center">
          <Switch
            name={"isFirstHand"}
            label="Förstahandskontrakt"
            checked={rentalProfileData?.isFirstHand}
            onChange={(value: any) =>
              handleOnchangeSwitch(value, "isFirstHand")
            }
          />
        </div>
        <div className="col-md-4 col-xl-3 d-flex align-items-center">
          <Switch
            name={"isSubContract"}
            label="Andrahandskontrakt"
            checked={rentalProfileData?.isSubContract}
            onChange={(value: any) =>
              handleOnchangeSwitch(value, "isSubContract")
            }
          />
        </div>
      </div>

      {/* <div className="mb-3">
        <Input
          id="preferance"
          name="preferance"
          label="Maxhyra"
          placeholder="Ange ditt efternamn"
          postIcon={<LineVertical weight="regular" size={22} />}
          postText="SEK"
        />
      </div> */}
      <div className="row gy-3">
        <div className="col-md-6">
          <Input
            id="minRooms"
            label="Min antal rum"
            name="minRooms"
            placeholder="Ange ditt förnamn"
            counter={true}
            className="text-center text-black"
            errorMessage={errorMessage?.minRooms}
            value={rentalProfileData?.minRooms}
            onChange={(value: any) => handleOnChangeSelect(value, "minRooms")}
          />
        </div>
        <div className="col-md-6">
          <Input
            id="maxRooms"
            name="maxRooms"
            label="Max antal rum"
            placeholder="Ange ditt efternamn"
            counter={true}
            className="text-center text-black"
            errorMessage={errorMessage?.maxRooms}
            value={rentalProfileData?.maxRooms}
            onChange={(value: any) => handleOnChangeSelect(value, "maxRooms")}
          />
        </div>
      </div>

      <div className="row gy-3">
        <div className="col-md-6">
          <Input
            id="minSize"
            label="Min Storlek (kvm)"
            name="minSize"
            placeholder="Ange ditt förnamn"
            counter={true}
            className="text-center text-black"
            errorMessage={errorMessage?.minSize}
            value={rentalProfileData?.minSize}
            onChange={(value: any) => handleOnChangeSelect(value, "minSize")}
          />
        </div>
        <div className="col-md-6">
          <Input
            id="maxSize"
            name="maxSize"
            label="Max Storlek (kvm)"
            placeholder="Ange ditt efternamn"
            counter={true}
            className="text-center text-black"
            errorMessage={errorMessage?.maxSize}
            value={rentalProfileData?.maxSize}
            onChange={(value: any) => handleOnChangeSelect(value, "maxSize")}
          />
        </div>
      </div>

      <div className="row gy-3">
        <div className="col-md-6">
          <Input
            id="minrent"
            label="Min Hyra (KR)"
            name="minrent"
            placeholder="Ange ditt förnamn"
            counter={true}
            className="text-center text-black"
            errorMessage={errorMessage?.minrent}
            value={rentalProfileData?.minrent}
            onChange={(value: any) => handleOnChangeSelect(value, "minrent")}
          />
        </div>
        <div className="col-md-6">
          <Input
            id="maxrent"
            name="maxrent"
            label="Max Hyra (KR)"
            placeholder="Ange ditt efternamn"
            counter={true}
            className="text-center text-black"
            errorMessage={errorMessage?.maxrent}
            value={rentalProfileData?.maxrent}
            onChange={(value: any) => handleOnChangeSelect(value, "maxrent")}
          />
        </div>
      </div>
    </>
  );
};
