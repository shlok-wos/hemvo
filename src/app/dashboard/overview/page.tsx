import { OverView } from "@/components/Dashboard/OverView";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Översikt | Hemvo",
};

export default function Page() {
  return (
    <>
      <OverView />
    </>
  );
}
