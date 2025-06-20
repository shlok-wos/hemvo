import { LineVertical } from "@phosphor-icons/react";
import { Input } from "../Input";
import { Select } from "../Select";
import { CustomCheckbox } from "../CheckBox";
import { useState } from "react";

export const IncomeForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="d-flex flex-column gap-xs">
        <div className="row gy-3">
          <div className="col-md-6">
            <Input
              id="preferance"
              name="preferance"
              label="Månadsinkomst"
              placeholder="Månadsinkomst"
              postIcon={<LineVertical weight="regular" size={22} />}
              postText="SEK"
            />
          </div>
          <div className="col-md-6">
            <Select
              isOpen={true}
              label="Typ av inkomst "
              placeholder="Övrig"
              options={[
                {
                  id: "1",
                  value: "Business",
                  label: "Business Income",
                },
                {
                  id: "2",
                  value: "Passive",
                  label: "Passive Income",
                },
                {
                  id: "3",
                  value: "Rental",
                  label: "Rental Income",
                },
              ]}
            />
          </div>
        </div>
        <div className="d-flex flex-column gap-3xs">
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
        </div>
      </div>
    </>
  );
};
