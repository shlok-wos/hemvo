import { HemvoCircle } from "@/assets/images";
import { Button, Card } from "@/components";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";
import { cx } from "class-variance-authority";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hem | Hemvo",
};

export default function Page() {
  return (
    <div>
      <Card
        className="flex-fill d-flex justify-content-center text-center"
        contentClassName={styles.welcomeContainer}
      >
        <div>
          <h1 className="text-3xl fw-bold mb-3">Uppdatera din hyresprofil</h1>

          <img
            src={HemvoCircle.src}
            alt="Hemvo.se"
            className={cx(styles.flatQuestCircle, "mx-auto mb-4")}
          />

          <p className="text-md text-dark">
            Just nu övervakar vi över 500+ fastighetsägare åt dig. Vi kontaktar
            dig direkt på ditt telefonnummer eller via e-post så snart vi hittar
            en hyresrätt som matchar din hyresprofil. Har dina kriterier
            ändrats?
          </p>

          <Button
            icon={<ArrowRight weight="duotone" className="ms-2" />}
            iconPosition="end"
            href="/dashboard/rental-profile"
            className="mt-3"
          >
            Uppdatera din hyresprofil
          </Button>
        </div>
      </Card>
    </div>
  );
}
