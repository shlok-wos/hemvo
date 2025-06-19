import { RentOut } from "@/components/Front/RentOut";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Rent Out | Hemvo",
};

export default function rentOut() {
	return (
		<>
			<div>
				<RentOut />
			</div>
		</>
	);
}
