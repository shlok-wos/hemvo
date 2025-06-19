import { RentalProfile } from "@/components/Dashboard/RentalProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hyresprofil | Hemvo",
};

export default function Page() {
	return <RentalProfile />;
}
