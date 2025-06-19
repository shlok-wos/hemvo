import { Settings } from "@/components/Dashboard/Settings";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Settings | Hemvo",
};

export default function Page() {
	return <Settings />;
}
