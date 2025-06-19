import { SubscriptionPage } from "@/components/Front/Subscription";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "subscription | Hemvo",
};

export default function Subscription() {
	return (
		<>
			<SubscriptionPage />
		</>
	);
}
