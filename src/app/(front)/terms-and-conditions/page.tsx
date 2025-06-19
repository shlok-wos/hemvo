import { Metadata } from "next";
import styles from "../page.module.css";
import clsx from "clsx";
import { Mailbox } from "@phosphor-icons/react";
import { Envelope } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Terms and Conditions | Hemvo",
};

export default function TermsAndConditions() {
  return (
    <>
      <main className="bg-accent space-top-sm space-bottom-sm mb-5">
        <div className="container">
          <h1 className="text-3xl text-center font-bold mb-4">
            Allmänna Villkor för Hemvo
          </h1>
          <p>
            Att söka bostad är ofta både tidskrävande och frustrerande. Därför
            har vi på Hemvo utvecklat en tjänst som gör det enklare för dig att
            hitta en lägenhet baserat på dina egna önskemål. För att allt ska
            fungera så smidigt som möjligt är det viktigt att du tar del av våra
            användarvillkor. Här går vi igenom allt du behöver veta.
          </p>

          <div className={styles.fmtContent}>
            <ol className="ps-0">
              <li>
                <strong>1. Avtalet – Vad du binder dig till</strong>
                <ol>
                  {/* <li>
                    <strong>Avtalet – Vad du binder dig till</strong>
                  </li> */}
                  <li>
                    När du slutför en beställning på Hemvo.se ingår du ett
                    juridiskt bindande avtal med Hemvo. Det omfattar:
                    <ol className={clsx(styles.listStyleDisc)}>
                      <li>
                        De specifika villkor som gäller för den tjänst du valt
                      </li>
                      <li>
                        Eventuella särskilda villkor kopplade till kampanjer
                        eller erbjudanden
                      </li>
                      <li>Dessa allmänna villkor</li>
                      <li>Den aktuella prislistan</li>
                    </ol>
                  </li>
                  <li>
                    Vid eventuell konflikt mellan villkoren gäller de i
                    ovanstående ordning – dina personliga beställningsvillkor
                    har alltså företräde framför våra generella regler. Genom
                    att slutföra din beställning bekräftar du att du har tagit
                    del av och accepterar dessa villkor.
                  </li>
                </ol>
              </li>

              <li>
                <strong>2.Tjänstens syfte och omfattning </strong>
                <ol>
                  <li>
                    Hemvo är inte en traditionell bostadsförmedling. Vi fungerar
                    som en aktiv partner som söker, bevakar, kontaktar
                    hyresvärdar och bokar in visningar åt dig.
                  </li>
                  <li>
                    När du registrerar dig fyller du i vad du letar efter – till
                    exempel område, storlek, maxhyra, tillträdesdatum och
                    särskilda önskemål. Därefter arbetar vårt automatiserade
                    system tillsammans med vårt team för att identifiera
                    relevanta bostadsmöjligheter.
                  </li>
                  <li>
                    Vi kontaktar hyresvärdar, koordinerar visningar och hjälper
                    dig med det administrativa om du blir erbjuden en bostad.
                    Vår roll är att vara en komplett och proaktiv aktör i din
                    bostadsjakt. Vi garanterar att du antingen får en lägenhet
                    som matchar dina angivna kriterier – eller får pengarna
                    tillbaka enligt vår garanti (se punkt 9).
                  </li>
                </ol>
              </li>

              <li>
                <strong>3. Ditt ansvar som användare</strong>
                <ol>
                  <li>
                    Tjänsten bygger på samarbete. Som användare ansvarar du för
                    att:
                    <ol className={clsx(styles.listStyleDisc)}>
                      <li>
                        Logga in och uppdatera din sökprofil minst två gånger i
                        veckan
                      </li>
                      <li>
                        Ha realistiska och rimliga kriterier utifrån
                        bostadsmarknaden
                      </li>
                      <li>Svara på våra meddelanden inom 24–48 timmar</li>
                      <li>Följa våra instruktioner och visa engagemang</li>
                    </ol>
                  </li>
                  <li>
                    Tjänsten är personlig. Det är inte tillåtet att dela kontot
                    med någon annan. Vi förbehåller oss rätten att avsluta
                    konton vid misstanke om missbruk. Om du inte följer detta
                    ansvar kan det påverka både vår möjlighet att hjälpa dig –
                    och din rätt till återbetalningsgarantin.
                  </li>
                </ol>
              </li>

              <li>
                <strong>4. Betalningsvillkor </strong>
                <ol>
                  <li>
                    Hemvo erbjuder fast prissatta tjänster som betalas i
                    förskott via kortbetalning. Vi accepterar de vanligaste
                    betalkorten och betalningen sker säkert genom vår
                    betaltjänstleverantör.Vid försenad eller utebliven betalning
                    (till exempel vid misslyckad dragning) pausas tillgången
                    till tjänsten automatiskt tills betalning genomförts.
                  </li>
                </ol>
              </li>

              <li>
                <strong>5. Din ångerrätt </strong>
                <ol>
                  <li>
                    Enligt lagen om distansavtal har du rätt att ångra din
                    beställning inom 14 dagar, förutsatt att du inte har börjat
                    använda tjänsten. Användning inkluderar att logga in,
                    uppdatera profilen eller påbörja bostadssökning. Om du
                    ångrar dig i tid sker återbetalning till samma
                    betalningsmedel som användes vid köpet.
                  </li>
                </ol>
              </li>

              <li>
                <strong>6. Felsituationer och avbrott</strong>
                <ol>
                  <li>
                    Vi gör vårt yttersta för att tjänsten ska fungera utan
                    avbrott. Om tekniska fel uppstår som inte är ditt fel, kan
                    du ha rätt till kompensation i form av reducerad avgift
                    motsvarande felets varaktighet. Vi ansvarar dock inte för
                    förhinder utanför vår kontroll, exempelvis extrema
                    väderförhållanden, internetavbrott, lagändringar eller
                    myndighetsbeslut.
                  </li>
                </ol>
              </li>

              <li>
                <strong>7. Ansvarsbegränsning </strong>
                <ol>
                  <li>
                    Hemvo fungerar som ett hjälpmedel i din bostadssökning. Vi
                    ansvarar inte för hyresvärdars beslut, förändrade villkor
                    eller avslag. Inte heller för skador eller kostnader som
                    uppstår på grund av förhoppningar om visst resultat.
                  </li>
                  <li>
                    Vi ersätter endast direkta skador som kan kopplas till vår
                    egen försummelse. Indirekta förluster, som exempelvis
                    utebliven inkomst eller försenade flyttar, ersätts inte.
                  </li>
                </ol>
              </li>

              <li>
                <strong>8. Uppsägning av tjänsten</strong>
                <ol>
                  <li>
                    Som användare har du alltid möjlighet att avsluta ditt
                    abonnemang. Det görs enkelt via inloggning på Hemvo.se. Vid
                    uppsägning från vår sida får du skriftlig bekräftelse.
                  </li>
                  <li>
                    Vi förbehåller oss rätten att avsluta tjänsten om du bryter
                    mot avtalet, exempelvis genom att inte betala, missbruka
                    tjänsten eller medvetet ange falsk information.
                  </li>
                </ol>
              </li>

              <li>
                <strong>9. Pengarna-tillbaka-garanti </strong>
                <ol>
                  <li>
                    Hemvo erbjuder en unik garanti: Om vi inte hittar en
                    lägenhet som matchar din hyresprofil inom 24 månader från
                    beställningsdatum, återbetalar vi hela avgiften. För att
                    garantin ska gälla krävs att samtliga av följande villkor är
                    uppfyllda:
                    <ol className={clsx(styles.listStyleDisc)}>
                      <li>
                        Du har uppdaterat din profil minst två gånger per vecka.
                        Regelbunden uppdatering av profilen säkerställer att vi
                        kan matcha dig med relevanta bostäder. Därför krävs
                        minst två uppdateringar per vecka för att garantin ska
                        gälla.
                      </li>
                      <li>
                        Dina krav har varit realistiska (exempelvis inte en
                        femrumslägenhet i centrala Stockholm för 3 500 kr/mån).
                      </li>
                      <li>
                        Du har svarat på våra meddelanden och följt angivna
                        instruktioner.
                      </li>
                      <li>
                        Du har inte tackat nej till ett konkret lägenhetsförslag
                        som tydligt matchar dina angivna kriterier.
                      </li>
                      <li>
                        Du har betalat i tid och följt våra användarvillkor.
                      </li>
                      <li>
                        Ditt medlemskap har varit aktivt och obrutet under hela
                        24-månaders perioden.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Garantin gäller endast efter 24 månaders obrutet och aktivt
                    medlemskap. Om du själv väljer att avsluta tjänsten innan
                    denna period har passerat, upphör garantin att gälla. Om
                    Hemvo däremot skulle avsluta tjänsten utan att erbjuda en
                    likvärdig fortsättning, gäller garantin ändå.
                  </li>
                  <li>
                    Exempel: Om du använder tjänsten i 11 månader utan att hitta
                    en bostad men väljer att avsluta innan 24 månader har gått,
                    har du inte rätt till återbetalning. Garantin är kopplad
                    till långsiktigt engagemang och gäller endast vid fullföljd
                    period och uppfyllda villkor.
                  </li>
                  <li>
                    Vid brott mot något av ovanstående upphör garantin att
                    gälla.
                  </li>
                  <li>Vid företagsöverlåtelse:</li>
                  <li>
                    Om Hemvo överlåts till ett nytt bolag under din
                    medlemsperiod, kan garantin fortsätta gälla – förutsatt att
                    du inom två (2) månader betalar resterande medlemskapstid
                    till det nya bolaget. Garantin följer med medlemskapet, så
                    länge alla övriga villkor fortsatt uppfylls.
                  </li>
                  <li>Vid brott mot något av dessa villkor upphör garantin.</li>
                </ol>
              </li>

              <li>
                <strong>10. Kommunikation </strong>
                <ol>
                  <li>
                    Vi skickar viktig information via e-post, SMS och andra
                    digitala kanaler. Det är ditt ansvar att se till att dina
                    kontaktuppgifter är aktuella. Ett meddelande anses vara
                    mottaget samma dag det skickats.
                  </li>
                </ol>
              </li>

              <li>
                <strong>11. Ändringar och överlåtelse </strong>
                <ol>
                  <li>
                    Vi kan ändra villkoren i detta avtal. Om ändringen inte är
                    till din fördel meddelar vi dig minst en månad i förväg. Om
                    du fortsätter använda tjänsten efter det, betraktas det som
                    ett godkännande.
                  </li>
                  <li>
                    Vi har rätt att överlåta avtalet till annan part inom samma
                    koncern eller tredje part.
                  </li>
                </ol>
              </li>
              <li>
                <strong>12. Tvistlösning </strong>
                <ol>
                  <li>
                    Vi strävar alltid efter att lösa eventuella tvister i god
                    dialog med dig.Om vi trots detta inte når en
                    överenskommelse, har du som konsument rätt att få tvisten
                    prövad av Allmänna reklamationsnämnden (ARN). Vi följer
                    ARN:s rekommendationer. Du har även rätt att få tvisten
                    prövad i allmän domstol. Vid rättslig prövning gäller svensk
                    lag, och Stockholms tingsrätt är första instans.
                  </li>
                </ol>
              </li>
              <li>
                <strong>13. Kontaktinformation</strong>
                <ol>
                  <li className="d-flex align-items-center flex-wrap gap-2">
                    Vid frågor om tjänsten eller användarvillkoren är du alltid
                    välkommen att kontakta oss på:
                    <span className="d-flex align-items-center gap-1 gap-xxl-2">
                      <Envelope size={25} weight="duotone" />
                      <a href="mailto:info@Hemvo.se">info@Hemvo.se</a>
                    </span>
                  </li>
                </ol>
              </li>
              <li>
                <strong>Gäller från och med 1 April 2025 </strong>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
}
