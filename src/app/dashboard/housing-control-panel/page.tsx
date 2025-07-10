import { HousingControlPanel } from "@/components/Dashboard/HousingControlPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Housing Control Panel | Hemvo",
};

export default function Page() {
    return <HousingControlPanel/>;
}
