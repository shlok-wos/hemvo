import { Faq } from "@/components/Dashboard/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Faq | Hemvo",
};

export default function Page() {
	return <Faq />;
}
