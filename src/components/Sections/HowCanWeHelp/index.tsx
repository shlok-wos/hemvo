import {
  HowCanWeHelpTab1,
  HowCanWeHelpTab2,
  HowCanWeHelpTab3,
} from "@/assets/images";
import * as Tabs from "@radix-ui/react-tabs";
import { cx } from "class-variance-authority";
import styles from "./HowCanWeHelp.module.css";

export const HowCanWeHelp: React.FC<any> = () => {
  return (
    <section className="space-top-lg">
      <div className="container">
        <div className="mb-3 mb-md-4 mb-xl-5">
          <h2 className="text-4xl mb-2 mb-xxl-3">Hur Hemvo hjälper dig</h2>
          <p className="text-md text-gray">
            Anpassat och utvecklat för hela bostadsmarknaden
          </p>
        </div>

        <Tabs.Root defaultValue="t1">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-7">
              <Tabs.List
                className={cx(
                  styles.list,
                  "d-flex d-lg-block w-100 ps-1 ps-lg-0"
                )}
              >
                <Tabs.Trigger value="t1" className={styles.trigger}>
                  <div>
                    <h3 className="text-2xl fw-bold mb-lg-2 mb-xxl-3">
                      Nå tusentals hyresgäster
                    </h3>
                    <p className="text-gray text-md d-none d-lg-block">
                      Det spelar ingen roll om du har en eller flera hundra
                      lägenheter. Med oss når du inte bara tusentals
                      hyresgäster, utan vi sköter allt från början till
                      hyresavtalsignering.
                    </p>
                  </div>
                </Tabs.Trigger>
                <Tabs.Trigger value="t2" className={styles.trigger}>
                  <div>
                    <h3 className="text-2xl fw-bold mb-lg-2 mb-xxl-3">
                      Verifierade hyresgäster
                    </h3>
                    <p className="text-gray text-md d-none d-lg-block">
                      Hyr tryggt ut med Hemvo. Vi ser till att matcha dina
                      krav med rätt hyresgäster och genomför en grundlig
                      bakgrundskontroll innan visning och hyresavtalssignering.
                    </p>
                  </div>
                </Tabs.Trigger>
                <Tabs.Trigger value="t3" className={styles.trigger}>
                  <div>
                    <h3 className="text-2xl fw-bold mb-lg-2 mb-xxl-3">
                      Personlig support dygnet runt
                    </h3>
                    <p className="text-gray text-md d-none d-lg-block">
                      Vi är mer än bara en plattform. Vi är din pålitliga
                      partner som finns där för att svara på dina frågor och se
                      till att din uthyrning är problemfri.
                    </p>
                  </div>
                </Tabs.Trigger>
              </Tabs.List>
            </div>
            <div className="col-md-7 col-lg-6 col-xl-5 ps-lg-5 mt-3 mt-md-4 mt-lg-0">
              <Tabs.Content value="t1" className={styles.content}>
                <div
                  className={cx(
                    styles.image,
                    "mx-auto me-lg-0 ratio ratio-1x1"
                  )}
                >
                  <img
                    src={HowCanWeHelpTab1.src}
                    alt="Hemvo"
                    className="radius-md object-fit-cover"
                  />
                </div>
              </Tabs.Content>
              <Tabs.Content value="t2" className={styles.content}>
                <div
                  className={cx(
                    styles.image,
                    "mx-auto me-lg-0 ratio ratio-1x1"
                  )}
                >
                  <img
                    src={HowCanWeHelpTab2.src}
                    alt="Hemvo"
                    className="radius-md object-fit-cover"
                  />
                </div>
              </Tabs.Content>
              <Tabs.Content value="t3" className={styles.content}>
                <div
                  className={cx(
                    styles.image,
                    "mx-auto me-lg-0 ratio ratio-1x1"
                  )}
                >
                  <img
                    src={HowCanWeHelpTab3.src}
                    alt="Hemvo"
                    className="radius-md object-fit-cover"
                  />
                </div>
              </Tabs.Content>
            </div>
          </div>
        </Tabs.Root>
      </div>
    </section>
  );
};
