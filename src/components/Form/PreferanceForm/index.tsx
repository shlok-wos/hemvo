import { LineVertical } from "@phosphor-icons/react";
import { Input } from "../Input";

export const PreferanceForm = () => {
  return (
    <>
      <div className="mb-3">
        <Input
          id="preferance"
          name="preferance"
          label="Maxhyra"
          placeholder="Ange ditt efternamn"
          postIcon={<LineVertical weight="regular" size={22} />}
          postText="SEK"
        />
      </div>
      <div className="row gy-3">
        <div className="col-md-6">
          <Input
            id="firstName"
            label="Min antal rum"
            name="minValue"
            placeholder="Ange ditt förnamn"
            counter={true}
            className="text-center text-black"
            // errorMessage={errorMessage?.firstName}
            // value={userData?.firstName}
            // onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <Input
            id="lastname"
            name="maxValue"
            label="Max antal rum"
            placeholder="Ange ditt efternamn"
            counter={true}
            className="text-center text-black"
            // errorMessage={errorMessage?.lastName}
            // value={userData?.lastName}
            // onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};
