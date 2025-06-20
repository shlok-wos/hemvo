import { HowWork } from "@/components";
import { AddQueue } from "@/components/Dashboard/AddQueue";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lägg till köer | Hemvo",
};

export default function Page() {
  return <AddQueue />;
}
