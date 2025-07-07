import { Plans } from "@/components/Front/Plans";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Plans | Hemvo",
};

export default function plans({ searchParams }: any) {
  const query = searchParams.query;

	return (
		<>
			<div>
				<Plans />
			</div>
		</>
	);
}
