import { Metadata } from "next";
import styles from "../page.module.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Cookies | Hemvo",
};

export default function Cookies() {
  return (
    <>
      <main className="bg-accent space-top-sm space-bottom-sm mb-5">
        <div className="container">
          <h1 className="text-3xl text-center font-bold mb-4">
            Cookiepolicy för Hemvo
          </h1>

          <div className={styles.fmtContent}>
            <ol className="ps-0">
              <li>
                <strong>1. Inledning</strong>
                <p>
                  Denna cookiepolicy beskriver hur Hemvo AB (”Hemvo”, ”vi”,
                  ”oss” eller ”vår”) använder cookies och liknande teknologier
                  på vår webbplats{" "}
                  <a href="www.hemvo.se" target="_blank">
                    www.hemvo.se
                  </a>{" "}
                  (”Webbplatsen”). Syftet är att klargöra vilka typer av cookies
                  som används, för vilka ändamål, och hur du som användare kan
                  kontrollera dessa inställningar. Policyn är utformad i
                  enlighet med lagen (2003:389) om elektronisk kommunikation och
                  Dataskyddsförordningen (GDPR).
                </p>
              </li>

              <li>
                <strong>2. Vad är cookies?</strong>
                <p>
                  Cookies är små textfiler som lagras på din enhet (dator,
                  surfplatta eller mobiltelefon) när du besöker en webbplats. De
                  möjliggör teknisk funktionalitet och förbättrad
                  användarupplevelse genom att minnas dina preferenser, samla in
                  statistik och möjliggöra personaliserad kommunikation.
                </p>
                <p>Cookies kan vara:</p>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>
                    Sessionsbaserade cookies – raderas när du stänger din
                    webbläsare.
                  </li>
                  <li>
                    Varaktiga cookies – sparas under en viss tid eller tills du
                    själv raderar dem.
                  </li>
                </ol>
              </li>

              <li>
                <strong>3. Vilka cookies vi använder och varför</strong>
                <p>Vi använder cookies för följande syften:</p>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>
                    <strong>Funktionalitet:</strong> Säkerställa grundläggande
                    funktioner på webbplatsen.
                  </li>
                  <li>
                    <strong>Analys och prestanda:</strong> Förstå
                    besöksbeteenden och förbättra navigering och laddningstider.
                  </li>
                  <li>
                    <strong>Personalisering:</strong> Anpassa upplevelsen efter
                    tidigare val eller beteende.
                  </li>
                  <li>
                    <strong>Marknadsföring:</strong> Visa relevanta annonser och
                    mäta kampanjresultat, både på vår webbplats och externa
                    kanaler.
                  </li>
                </ol>
              </li>

              <li>
                <strong>4. Förstaparts- och tredjepartscookies</strong>
                <p>
                  <strong>Förstapartscookies</strong> sätts av vår webbplats och
                  används för funktioner och preferenser.
                </p>
                <p>
                  <strong>Tredjepartscookies</strong> sätts av externa aktörer
                  vi samarbetar med, exempelvis för analys och annonsering.
                  Dessa kan samla in data om ditt beteende och kombinera det med
                  annan information för riktad annonsering.
                </p>
                <p>
                  Vi vidtar nödvändiga avtalstekniska och organisatoriska
                  åtgärder för att säkerställa att dessa aktörer hanterar
                  informationen enligt gällande dataskyddslagstiftning.
                </p>
              </li>

              <li>
                <strong>5. Hantering och samtycke</strong>
                <p>
                  Vid första besöket på vår webbplats informeras du om
                  användningen av cookies och ges möjlighet att ge eller neka
                  samtycke till icke-nödvändiga cookies.
                </p>
                <p>
                  Du kan även när som helst ändra dina inställningar i
                  webbläsarens cookieinställningar eller via vår cookiehanterare
                  (om tillgänglig).
                </p>
                <p>
                  Observera att vissa funktioner på Webbplatsen kan påverkas om
                  du blockerar vissa typer av cookies.
                </p>
              </li>

              <li>
                <strong>6. Lagringstid</strong>
                <p>
                  Lagringstiden varierar beroende på cookietyp och syfte.
                  Sessionscookies raderas när webbläsaren stängs, medan
                  varaktiga cookies kan lagras i allt från några minuter till
                  flera år.
                </p>
              </li>

              <li>
                <strong>7. Ändringar i cookiepolicyn</strong>
                <p>
                  Hemvo förbehåller sig rätten att uppdatera denna cookiepolicy.
                  Ändringar träder i kraft vid publicering på Webbplatsen. Vi
                  rekommenderar att du regelbundet granskar policyn.
                </p>
              </li>

              <li>
                <strong>8. Kontaktinformation</strong>
                <p>
                  Om du har frågor, synpunkter eller vill utöva dina rättigheter
                  enligt dataskyddslagstiftningen är du välkommen att kontakta
                  oss:
                  <a href="mailto:info@hemvo.se">info@hemvo.se</a>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
}
