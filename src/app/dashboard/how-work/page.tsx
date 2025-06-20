import { HowWork } from "@/components";
import { LineChart } from "@/components/LineChart";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hur funkar det? | Hemvo",
};

export default function Page() {
  return (
    <>
      <HowWork />
    </>
  );
}
