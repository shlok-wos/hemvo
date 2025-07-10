import { HousingQueue } from "@/components/Dashboard/HousingQueue";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Housing Queue | Hemvo",
};

export default function Page() {
  return (
    <>
      <HousingQueue/>  
    </>
  );
}
