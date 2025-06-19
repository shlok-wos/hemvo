import { DashboardBlogspot } from "@/components/Dashboard/DashboardBlogspot";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Guide | Hemvo",
};

export default function Page() {
	return <DashboardBlogspot />;
}
