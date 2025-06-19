import { cx } from "class-variance-authority";
import styles from "./../page.module.css";
import Link from "next/link";
import { Metadata } from "next";
import { ContactDataLabel } from "@/components/Front/ContactDataLabel";

export const metadata: Metadata = {
	title: "Contact | Hemvo",
};

export default function contact() {
	return (
		<>
			<section
				id="plans"
				className={cx(styles.plans, "bg-accent space-top-sm space-bottom-sm")}
			>
				<div className="container">
					<div className="text-center">
						<h1 className="text-3xl font-bold mb-0">Kontakt</h1>
					</div>
				</div>
			</section>
			<section className="space-top-sm space-bottom-sm">
				<div className="container">
					<div className="text-center">
						<h2 className="text-2xl font-bold text-dark mb-2">
							Hej! Hur kan vi stå till tjänst?
						</h2>
						<p className="text-gray font-normal text-md mb-0">
							Vill du komma i kontakt med Hemvo?
							<br className="d-sm-none" /> Inga problem, vi gillar att prata.
						</p>
						<div className="mt-4 mt-xl-5 d-flex flex-column gap-3 gap-md-4">
							<p className="mb-0">
								<b className="text-dark text-md">E-post :</b>&nbsp;
								<span className="text-md font-normal text-dark">
									Skicka ett mejl till oss på&nbsp;
									<a href="mailto:info@Hemvo.se" target="_blank">
										info@Hemvo.se
									</a>
									. Vi svarar så snabbt vi kan, vanligtvis inom 2 arbetsdagar.
								</span>
							</p>
							<p className="mb-0">
								<b className="text-dark text-md">Instagram :</b>&nbsp;
								<span className="text-md font-normal text-dark">
									&nbsp; Du kan också skicka ett PM till oss på Facebook. Vi
									svarar så snabbt vi kan, oftast inom 2 arbetsdagar.
								</span>
							</p>
							<p className="mb-0">
								<b className="text-dark text-md">FAQ :</b>&nbsp;
								<span className="text-md font-normal text-dark">
									Skapa ett konto för att se svaren på de{" "}
									<Link href="/create-account">Vanligaste Frågorna</Link>
								</span>
							</p>
						</div>
						<ContactDataLabel />
					</div>
				</div>
			</section>
		</>
	);
}
