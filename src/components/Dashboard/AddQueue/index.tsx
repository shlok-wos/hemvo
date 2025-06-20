"use client";
import { Card } from "@/components/Card";
import { AddQueueTitle } from "./AddQueueTitle";
import { ContactDetailForm } from "@/components/Form/ContactDetailForm";
import { PreferanceForm } from "@/components/Form/PreferanceForm";
import { CurrentResidentForm } from "@/components/Form/CurrentResidentForm";
import { IncomeForm } from "@/components/Form/IncomeForm";
import { addQueueData } from "@/Const/data";
import { Button } from "@/components/Button";
export const AddQueue = () => {
  return (
    <>
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
        <Button className="mt-4">fortsätta</Button>
      </div>
    </>
  );
};
