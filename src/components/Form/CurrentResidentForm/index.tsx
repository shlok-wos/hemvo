import { Input } from "../Input";
import { Select } from "../Select";

export const CurrentResidentForm = () => {
  return (
    <>
      <div className="row gy-3">
        <div className="col-md-6">
          <Select
            isOpen={true}
            label="Boendeform"
            placeholder="Bor hos föräldrar"
            options={[
              {
                id: "1",
                value: "Hello",
                label: "hihi",
              },
              {
                id: "2",
                value: "Hello2",
                label: "gfsds",
              },
              {
                id: "3",
                value: "Hello3",
                label: "sdf",
              },
            ]}
          />
        </div>
        <div className="col-md-6">
          <Input
            id="lastname"
            name="maxValue"
            label="Antal barn du är vårdnadshavare för"
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
