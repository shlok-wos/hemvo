import { Metadata } from "next";
import styles from "../page.module.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Privacy Policy | Hemvo",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-accent space-top-sm space-bottom-sm mb-5">
      <div className="container">
        <h1 className="text-3xl text-center font-bold mb-4">
          Integritetspolicy för Hemvo
        </h1>

        <div className="mt-3">
          <h3 className="fw-bold mb-2">
            Information om personuppgiftsbehandling
          </h3>
          <p>
            Hemvo värnar om din personliga integritet. Denna policy
            beskriver hur vi samlar in, använder, delar och skyddar dina
            personuppgifter när du använder våra tjänster via Hemvo.se. Vi
            följer gällande dataskyddslagstiftning och är
            personuppgiftsansvariga för den behandling som sker inom vår
            verksamhet.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="fw-bold mb-3">
            Vilken typ av personuppgifter behandlar vi?
          </h2>

          <div className={styles.fmtContent}>
            <ol className="ps-0">
              <li>
                <strong>1. Kunduppgifter </strong>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>Namn, personnummer, adress, e-post, telefonnummer</li>
                  <li>Avtals- och abonnemangsuppgifter</li>
                  <li>Inloggningsuppgifter</li>
                  <li>Betalnings- och kreditvärdighetsinformation</li>
                </ol>
              </li>
              <li>
                <strong>2. Trafik- och användningsdata </strong>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>Kommunikationsloggar (t.ex. supporthistorik,kontaktformulär)</li>
                  <li>Platsdata kopplad till din användning av våra tjänster</li>
                  <li>Webbanvändningsmönster via cookies och sessioner</li>
                </ol>
              </li>
              <li>
                <strong>3. Hur vi samlar in uppgifter</strong>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>När du registrerar dig på vår plattform</li>
                  <li>När du kommunicerar med oss via e-post, telefon eller chatt</li>
                  <li>Genom användning av cookies och liknande teknologier</li>
                  <li>När du gör en beställning eller betalning</li>
                  <li>Från tredje parter såsom betalningsleverantörer</li>
                </ol>
              </li>
              <li>
                <strong>4. Vad vi använder uppgifterna till </strong>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>Vi behandlar dina personuppgifter för att:</li>
                  <li>Leverera våra tjänster till dig</li>
                  <li>Kommunicera med dig om din beställning eller ditt medlemskap</li>
                  <li>Skicka viktig information, exempelvis uppdateringar eller ändringar</li>
                  <li>Skicka marknadsföring om du gett ditt samtycke</li>
                  <li>Följa tillämpliga lagar och regler</li>
                  <li>Utveckla och förbättra våra tjänster</li>
                </ol>
              </li>
              <li>
                <strong>5. Rättslig grund för behandlingen</strong>
                <ol>
                  <li>
                    Vi behandlar dina uppgifter baserat på:
                    <ol className={clsx(styles.listStyleDisc)}>
                      <li>Fullgörande av avtal (t.ex. när du köper en tjänst)</li>
                      <li>Samtycke (för nyhetsbrev eller marknadsföring)</li>
                      <li>Rättslig förpliktelse (t.ex. bokföringslagar)</li>
                      <li>Berättigat intresse (för att förbättra tjänsten)</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <strong>6. Hur länge vi sparar dina uppgifter</strong>
                <ol>
                  <li>
                    Vi sparar endast dina personuppgifter så länge det är
                    nödvändigt för att uppfylla ändamålen med behandlingen eller
                    enligt vad som krävs enligt lag.
                  </li>
                </ol>
              </li>
              <li>
                <strong>7. Delning av personuppgifter</strong>
                <ol>
                  <li>
                    Vi delar inte dina uppgifter med tredje part för
                    marknadsföringsändamål. Vi kan dock dela dina uppgifter med:
                    <ol className={clsx(styles.listStyleDisc)}>
                      <li>Betalningstjänstleverantörer (t.ex. Stripe och Klarna)</li>
                      <li>IT-leverantörer som hanterar vår plattform</li>
                      <li>Myndigheter, om det krävs enligt lag</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <strong>8. Dina rättigheter</strong>
                <ol>
                  <li>
                    Du har rätt att:
                    <ol className={clsx(styles.listStyleDisc)}>
                      <li>Begära tillgång till dina personuppgifter</li>
                      <li>Rätta felaktiga eller ofullständiga uppgifter</li>
                      <li>Bli raderad ("rätten att bli bortglömd")</li>
                      <li>Invända mot behandling eller begära begränsning</li>
                      <li>Få ut dina uppgifter (dataportabilitet)</li>
                      <li>Återkalla ett samtycke du lämnat</li>
                      <li>Begäran skickas till: info@Hemvo.se</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <strong>9. Cookies </strong>
                <ol>
                  <li>
                    Hemvo använder cookies för att förbättra din
                    användarupplevelse. Genom att använda vår webbplats
                    godkänner du vår användning av cookies. Du kan när som helst
                    ändra dina cookie-inställningar i din webbläsare.
                  </li>
                </ol>
              </li>
              <li>
                <strong>10. Ändringar i integritetspolicyn </strong>
                <ol>
                  <li>
                    Vi kan uppdatera denna policy vid behov. Den senaste
                    versionen finns alltid tillgänglig på vår webbplats.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Senast uppdaterad: 1 April 2025 </strong>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
