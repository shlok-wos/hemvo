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
          <h3 className="fw-bold mb-2">1. Introduktion</h3>
          <p>
            På Hemvo värnar vi om din integritet och hanterar dina
            personuppgifter med största omsorg. Denna integritetspolicy
            förklarar hur vi samlar in, behandlar, delar och skyddar dina
            uppgifter när du använder våra tjänster via www.hemvo.se. Vi följer
            gällande dataskyddslagstiftning, inklusive GDPR, och är
            personuppgiftsansvariga för all behandling som sker inom vår
            verksamhet.
          </p>
        </div>

        <div className="mt-5">
          <div className={styles.fmtContent}>
            <ol className="ps-0">
              <li>
                <strong>2. Vilka personuppgifter vi behandlar</strong>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>
                    Kundinformation: Namn, personnummer, adress, e-post,
                    telefonnummer
                  </li>
                  <li>
                    Tjänste- och abonnemangsuppgifter: Medlemskap,
                    beställningar, användarhistorik
                  </li>
                  <li>Inloggnings- och autentiseringsdata</li>
                  <li>
                    Betalningsuppgifter: Fakturainformation,
                    transaktionshistorik, kreditvärderingsdata
                  </li>
                  <li>
                    Kommunikationsdata: Kontakt via e-post, supportärenden,
                    formulär
                  </li>
                  <li>
                    Teknisk information: IP-adress, enhetsinformation,
                    användarmönster via cookies
                  </li>
                  <li>
                    Platsinformation: Om tillämpligt och beroende på tjänstens
                    utformning
                  </li>
                </ol>
              </li>

              <li>
                <strong>3. Hur vi samlar in dina uppgifter</strong>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>Du registrerar ett konto eller blir medlem</li>
                  <li>
                    Du kommunicerar med oss via e-post, chatt eller telefon
                  </li>
                  <li>Du gör en beställning eller betalning</li>
                  <li>Du använder vår webbplats (inkl. via cookies)</li>
                  <li>
                    Vi tar emot information från tredje part, t.ex.
                    betalningsleverantörer
                  </li>
                </ol>
              </li>

              <li>
                <strong>4. Vad vi använder uppgifterna till</strong>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>
                    Tillhandahålla våra tjänster, inklusive tillgång till
                    bostadskö och aktiv bostadssökning
                  </li>
                  <li>Hantera din beställning och ditt medlemskap</li>
                  <li>
                    Skicka relevant information om ditt konto eller dina
                    bokningar
                  </li>
                  <li>Kommunicera med dig i kundtjänstärenden</li>
                  <li>Marknadsföra våra tjänster om du lämnat samtycke</li>
                  <li>
                    Uppfylla rättsliga skyldigheter (exempelvis enligt
                    bokföringslagen)
                  </li>
                  <li>Förbättra och vidareutveckla vår tjänst</li>
                </ol>
              </li>

              <li>
                <strong>5. Rättsliga grunder</strong>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>Fullgörande av avtal (när du använder våra tjänster)</li>
                  <li>Samtycke (exempelvis för marknadsföring)</li>
                  <li>
                    Rättslig förpliktelse (exempelvis bokföringsskyldighet)
                  </li>
                  <li>
                    Berättigat intresse (för serviceförbättring och säkerhet)
                  </li>
                </ol>
              </li>

              <li>
                <strong>6. Lagringstid</strong>
                <ol>
                  <li>
                    Vi sparar dina personuppgifter så länge det är nödvändigt
                    för att uppfylla syftet med behandlingen eller så länge som
                    lagen kräver. Därefter raderas eller anonymiseras
                    uppgifterna på ett säkert sätt.
                  </li>
                </ol>
              </li>

              <li>
                <strong>7. Delning av uppgifter</strong>
                <ol>
                  <li>
                    Vi säljer aldrig dina personuppgifter. Däremot kan de delas
                    med:
                    <ol className={clsx(styles.listStyleDisc)}>
                      <li>
                        Leverantörer av betaltjänster (t.ex. Klarna och Stripe)
                      </li>
                      <li>Tekniska leverantörer som driftar vår plattform</li>
                      <li>
                        Myndigheter, om det krävs enligt lag eller
                        myndighetsbeslut
                      </li>
                    </ol>
                  </li>
                  <li>
                    Alla tredje parter är bundna av personuppgiftsbiträdesavtal
                    enligt GDPR.
                  </li>
                </ol>
              </li>

              <li>
                <strong>8. Dina rättigheter</strong>
                <ol>
                  <li>
                    Du har rätt att:
                    <ol className={clsx(styles.listStyleDisc)}>
                      <li>
                        Begära registerutdrag över vilka uppgifter vi har om dig
                      </li>
                      <li>Begära rättelse av felaktiga uppgifter</li>
                      <li>
                        Begära att bli raderad ("rätten att bli bortglömd")
                      </li>
                      <li>Begränsa eller invända mot viss behandling</li>
                      <li>Flytta dina uppgifter (dataportabilitet)</li>
                      <li>Återkalla samtycke du tidigare lämnat</li>
                      <li>
                        För att utöva dessa rättigheter, kontakta oss via:{" "}
                        <a href="mailto:info@hemvo.se">info@hemvo.se</a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>

              <li>
                <strong>9. Cookies</strong>
                <ol>
                  <li>
                    Vi använder cookies för att förbättra användarupplevelsen
                    och analysera trafik. Du kan hantera dina
                    cookie-inställningar via din webbläsare. Mer information
                    finns i vår separat cookiepolicy.
                  </li>
                </ol>
              </li>

              <li>
                <strong>10. Ändringar i denna policy</strong>
                <ol>
                  <li>
                    Vi förbehåller oss rätten att uppdatera denna
                    integritetspolicy. Den senaste versionen finns alltid
                    tillgänglig på vår webbplats. Vi uppmanar dig att läsa
                    igenom policyn regelbundet.
                  </li>
                </ol>
              </li>

              <li>
                <strong>Senast uppdaterad: 15 augusti 2025</strong>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
