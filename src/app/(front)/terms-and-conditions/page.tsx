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
            Användarvillkor för Hemvo
          </h1>
          <p>
            Att söka bostad kan vara både tidskrävande och frustrerande. Därför
            har vi på Hemvo utvecklat en tjänst som kombinerar smart teknik,
            personlig service och egna digitala bostadsköer som hjälper dig
            komma närmare ett förstahandskontrakt. För att tjänsten ska fungera
            så smidigt som möjligt är det viktigt att du tar del av våra
            användarvillkor. Här förklarar vi allt du behöver veta.
          </p>

          <div className={styles.fmtContent}>
            <ol className="ps-0">
              <li>
                <strong>1. Avtalet – Vad du binder dig till</strong>
                <p>
                  När du slutför en beställning på hemvo.se ingår du ett
                  juridiskt bindande avtal med Hemvo. Det omfattar:
                </p>
                <ol className={clsx(styles.listStyleDisc)}>
                  <li>
                    De specifika villkor som gäller för den tjänst du valt
                  </li>
                  <li>
                    Eventuella särskilda villkor kopplade till kampanjer eller
                    erbjudanden
                  </li>
                  <li>Dessa allmänna villkor</li>
                  <li>Den aktuella prislistan</li>
                </ol>
                <p>
                  Vid eventuell konflikt mellan villkoren gäller de i
                  ovanstående ordning – dina personliga beställningsvillkor har
                  alltså företräde framför våra generella regler. Genom att
                  slutföra din beställning bekräftar du att du har tagit del av
                  och accepterar dessa villkor.
                </p>
              </li>

              <li>
                <strong>2. Tjänstens syfte och omfattning</strong>
                <p>
                  Hemvo är inte en traditionell bostadsförmedling. Vi fungerar
                  som en aktiv partner som söker, bevakar, kontaktar hyresvärdar
                  och bokar in visningar åt dig. Vi erbjuder även tillgång till
                  en digital bostadskö.
                </p>
                <p>
                  När du registrerar dig fyller du i vad du letar efter – till
                  exempel område, storlek, maxhyra, tillträdesdatum och
                  särskilda önskemål. Därefter arbetar vårt automatiserade
                  system tillsammans med vårt team för att identifiera relevanta
                  bostadsmöjligheter. Vi kontaktar hyresvärdar, koordinerar
                  visningar och hjälper dig med det administrativa om du blir
                  erbjuden en bostad.
                </p>
                <p>
                  Vår roll är att vara en komplett och proaktiv aktör i din
                  bostadsjakt. Vi garanterar inte att du får en bostad – men vi
                  gör vårt yttersta för att matcha dig mot relevanta alternativ
                  utifrån dina kriterier.
                </p>
              </li>

              <li>
                <strong>3. Bostadskön – Så fungerar vårt kösystem</strong>
                <p>
                  Som medlem hos Hemvo får du automatiskt köpoäng som avgör din
                  placering i vår digitala bostadskö. Din placering beror på
                  vilket medlemskap du har – olika medlemsnivåer ger olika många
                  poäng. Poängen tilldelas utifrån ditt aktiva medlemskap. För
                  att börja samla poäng behöver du bli medlem och själv gå med i
                  en eller flera köer, vilket du gör under fliken
                  &quot;Bostadsköer&quot;.
                </p>
                <p>
                  Ju fler poäng du har, desto högre placeras du i kön, vilket
                  påverkar hur snabbt vi kan matcha dig med lediga bostäder.
                </p>
                <p>
                  ❗ <strong>Observera:</strong> Att vara medlem i Hemvos
                  bostadskö innebär inte en garanti om att få en bostad, utan en
                  placering i vår köstruktur för prioritering vid matchning.
                </p>
              </li>

              <li>
                <strong>4. Ditt ansvar som användare</strong>
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
                <p>
                  Tjänsten är personlig. Det är inte tillåtet att dela kontot
                  med någon annan. Vi förbehåller oss rätten att avsluta konton
                  vid misstanke om missbruk. Om du inte följer detta ansvar kan
                  det påverka både vår möjlighet att hjälpa dig – och din rätt
                  till återbetalningsgarantin.
                </p>
              </li>

              <li>
                <strong>5. Betalningsvillkor</strong>
                <p>
                  Hemvo erbjuder fast prissatta tjänster som betalas i förskott
                  via kortbetalning. Vi accepterar de vanligaste betalkorten och
                  betalningen sker säkert genom vår betaltjänstleverantör. Vid
                  försenad eller utebliven betalning pausas tillgången till
                  tjänsten automatiskt tills betalning genomförts.
                </p>
              </li>

              <li>
                <strong>6. Din ångerrätt</strong>
                <p>
                  Enligt lagen om distansavtal har du rätt att ångra din
                  beställning inom 14 dagar, förutsatt att du inte har börjat
                  använda tjänsten. Användning inkluderar att logga in,
                  uppdatera profilen eller påbörja bostadssökning. Om du ångrar
                  dig i tid sker återbetalning till samma betalningsmedel som
                  användes vid köpet.
                </p>
              </li>

              <li>
                <strong>7. Felsituationer och avbrott</strong>
                <p>
                  Vi gör vårt yttersta för att tjänsten ska fungera utan
                  avbrott. Om tekniska fel uppstår som inte är ditt fel, kan du
                  ha rätt till kompensation i form av reducerad avgift
                  motsvarande felets varaktighet. Vi ansvarar dock inte för
                  förhinder utanför vår kontroll, exempelvis extrema
                  väderförhållanden, internetavbrott, lagändringar eller
                  myndighetsbeslut.
                </p>
              </li>

              <li>
                <strong>8. Ansvarsbegränsning</strong>
                <p>
                  Hemvo fungerar som ett hjälpmedel i din bostadssökning. Vi
                  ansvarar inte för hyresvärdars beslut, förändrade villkor
                  eller avslag. Inte heller för skador eller kostnader som
                  uppstår på grund av förhoppningar om visst resultat.
                </p>
                <p>
                  Vi ersätter endast direkta skador som kan kopplas till vår
                  egen försummelse. Indirekta förluster, som exempelvis
                  utebliven inkomst eller försenade flyttar, ersätts inte.
                </p>
              </li>

              <li>
                <strong>9. Uppsägning av tjänsten</strong>
                <p>
                  Som användare har du alltid möjlighet att avsluta ditt
                  abonnemang. Det görs enkelt via inloggning på hemvo.se. Vid
                  uppsägning från vår sida får du skriftlig bekräftelse.
                </p>
                <p>
                  Vi förbehåller oss rätten att avsluta tjänsten om du bryter
                  mot avtalet, exempelvis genom att inte betala, missbruka
                  tjänsten eller medvetet ange falsk information.
                </p>
              </li>

              <li>
                <strong>10. Pengarna-tillbaka-garanti</strong>
                <p>
                  Hemvo erbjuder en garanti: Om vi inte hittar en lägenhet som
                  matchar din hyresprofil inom 24 månader från
                  beställningsdatum, återbetalar vi hela avgiften. För att
                  garantin ska gälla krävs att du:
                </p>
                <ul className={clsx(styles.listStyleDisc)}>
                  <li>Uppdaterat din profil minst två gånger per vecka</li>
                  <li>Haft realistiska krav</li>
                  <li>Svarat på våra meddelanden</li>
                  <li>
                    Inte tackat nej till förslag som matchat dina kriterier
                  </li>
                  <li>Betalat i tid</li>
                  <li>Haft ett aktivt medlemskap under hela perioden</li>
                </ul>
                <p>
                  Garantin gäller endast vid 24 månaders obrutet medlemskap. Om
                  Hemvo överlåts till annan aktör kan garantin fortsätta gälla
                  om du väljer att fortsätta din prenumeration med det nya
                  bolaget.
                </p>
              </li>

              <li>
                <strong>11. Kommunikation</strong>
                <p>
                  Vi skickar viktig information via e-post, SMS och andra
                  digitala kanaler. Det är ditt ansvar att se till att dina
                  kontaktuppgifter är aktuella. Ett meddelande anses vara
                  mottaget samma dag det skickats.
                </p>
              </li>

              <li>
                <strong>12. Ändringar och överlåtelse</strong>
                <p>
                  Vi kan ändra villkoren i detta avtal. Om ändringen inte är
                  till din fördel meddelar vi dig minst en månad i förväg. Om du
                  fortsätter använda tjänsten efter det, betraktas det som ett
                  godkännande.
                </p>
                <p>
                  Vi har rätt att överlåta avtalet till annan part inom samma
                  koncern eller tredje part.
                </p>
              </li>

              <li>
                <strong>13. Tvistlösning</strong>
                <p>
                  Vi strävar alltid efter att lösa eventuella tvister i god
                  dialog med dig. Om vi trots detta inte når en överenskommelse,
                  har du som konsument rätt att få tvisten prövad av Allmänna
                  reklamationsnämnden (ARN). Vi följer ARN:s rekommendationer.
                  Du har även rätt att få tvisten prövad i allmän domstol. Vid
                  rättslig prövning gäller svensk lag, och Stockholms tingsrätt
                  är första instans.
                </p>
              </li>

              <li>
                <strong>14. Kontaktinformation</strong>
                <p className="d-flex align-items-center flex-wrap gap-2">
                  Vid frågor om tjänsten eller användarvillkoren är du alltid
                  välkommen att kontakta oss på:
                  <span className="d-flex align-items-center gap-1 gap-xxl-2">
                    <Envelope size={25} weight="duotone" />
                    <a href="mailto:info@hemvo.se">info@hemvo.se</a>
                  </span>
                </p>
              </li>

              <li>
                <strong>Gäller från och med 15 augusti 2025</strong>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
}
