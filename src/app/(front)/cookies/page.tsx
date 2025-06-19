import { Metadata } from "next";
import styles from "../page.module.css";

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
                <strong>1. Introduktion</strong>
                <p>
                  Hemvo (”vi”, ”oss”, ”vår”) använder cookies på vår
                  webbplats www.Hemvo.se (”Webbplatsen”). Enligt lagen om
                  elektronisk kommunikation är vi skyldiga att informera dig om
                  användningen av cookies, deras syften och ge dig möjlighet att
                  samtycka till deras lagring på din enhet.
                </p>
              </li>

              <li>
                <strong>2. Vad är cookies?</strong>
                <p>
                  Cookies är små textfiler som lagras på din dator eller enhet
                  av din webbläsare när du besöker en webbplats. Dessa filer
                  möjliggör att Webbplatsen kan komma ihåg dina val och
                  inställningar under dina besök.
                </p>
              </li>

              <li>
                <strong>3. Vilka cookies används?</strong>
                <p>På Hemvo webbplats används två typer av cookies:</p>
                <p>
                  Varaktiga cookies: Dessa cookies lagras på din enhet under en
                  specifik tidsperiod och kan återanvändas vid framtida besök.
                </p>
                <p>
                  Sessions-cookies: Dessa cookies är tillfälliga och raderas när
                  du stänger webbläsaren.
                </p>
              </li>

              <li>
                <strong>4. Varför använder vi cookies?</strong>
                <p>Vi använder cookies för följande ändamål:</p>
                <p>
                  Webbanalys: För att samla in data om hur besökare interagerar
                  med Webbplatsen och för att förbättra dess prestanda.
                </p>
                <p>
                  Annonsering: För att anpassa vår annonsering baserat på ditt
                  surfbeteende och för att säkerställa att relevanta annonser
                  visas för dig.
                </p>
                <p>
                  Förbättra kundupplevelsen: För att skapa personliga
                  erbjudanden, komma ihåg vad som finns i din kundvagn och
                  möjliggöra olika tjänster och funktioner som förbättrar din
                  upplevelse på Webbplatsen.
                </p>
              </li>

              <li>
                <strong>5. Förstapartscookies och tredjepartscookies</strong>
                <p>
                  Förstapartscookies: Dessa cookies sätts av vår webbplats
                  (Hemvo.se) och används för att hantera funktioner och
                  samla in statistik om vårt innehåll.
                </p>

                <p>
                  Tredjepartscookies: Vi samarbetar med olika aktörer som kan
                  sätta sina egna cookies på vår webbplats. Information som
                  samlas in från dessa cookies kan delas med oss, men kan också
                  användas för andra syften av respektive aktör. Dessa cookies
                  inkluderar:
                </p>

                <p>
                  Google Analytics: Vi använder detta verktyg för att analysera
                  besöksdata på vår webbplats. Vi har avtal med Google som
                  säkerställer att ingen identifierbar information delas.
                </p>

                <p>
                  Facebook: För att förbättra vår annonsering använder vi
                  Facebooks pixelkod som samlar data om användarnas
                  interaktioner på Webbplatsen. Detta hjälper oss att visa mer
                  riktade annonser på Facebook.
                </p>
              </li>

              <li>
                <strong>6. Hantering av cookies</strong>
                <p>
                  Du kan välja att acceptera eller neka cookies. Om du inte vill
                  att cookies ska lagras på din enhet kan du justera
                  inställningarna i din webbläsare. Observera att avvisande av
                  cookies kan begränsa din användarupplevelse och vissa
                  funktioner på Webbplatsen kanske inte fungerar som avsett.
                </p>
                <p>
                  För att tacka nej till tredjepartscookies kan du besöka
                  följande sidor:
                </p>
                <p>Google Analytics: Google privacy opt-out</p>
                <p>Facebook: Anpassa dina annonser</p>
              </li>

              <li>
                <strong>7. Ändringar i vår cookiepolicy</strong>
                <p>
                  Vi kan komma att uppdatera denna cookiepolicy och kommer att
                  publicera den uppdaterade versionen här. Vi rekommenderar att
                  du regelbundet kontrollerar denna policy för att hålla dig
                  informerad om hur vi använder cookies.
                </p>
              </li>

              <li>
                <strong>8. Kontaktinformation</strong>
                <p>
                  Om du har frågor eller funderingar gällande denna
                  cookiepolicy, vänligen kontakta oss på
                  <a href="mailTo:info@Hemvo.se"> info@Hemvo.se</a> .
                </p>
              </li>

              <li>
                <strong>9. Mer information</strong>
                <p>
                  För mer information om cookies och dina rättigheter kan du
                  besöka Post- och telestyrelsens webbplats: www.pts.se.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
}
