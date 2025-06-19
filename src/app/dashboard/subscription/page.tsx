import { Subscription } from "@/components/Dashboard/Subscription";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Medlemskap | Hemvo",
};

export default function Page() {
	return <Subscription />;
}
