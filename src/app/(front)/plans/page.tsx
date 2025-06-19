import { Plans } from "@/components/Front/Plans";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Plans | Hemvo",
};

export default function plans() {
	return (
		<>
			<div>
				<Plans />
			</div>
		</>
	);
}
