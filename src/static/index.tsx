"use client";
import {
  AssistanceSlider1,
  AssistanceSlider2,
  AssistanceSlider3,
  AssistanceSlider4,
  AssistanceSlider5,
  Bubble1,
  Bubble2,
  Bubble3,
  Bubble4,
  Bubble5,
  Bubble6,
  Bubble7,
  Bubble8,
  Bubble9,
  Bubble10,
  Bubble11,
  Bubble12,
  SquareIPhoneWithDashboard,
  SquareIPhoneWithGirl,
  SquareIPhoneWithNews,
} from "@/assets/images";
import { AccordionItem } from "@/components";
import {
  ChatCentered,
  Envelope,
  Question,
  Book,
  House,
  Money,
  Monitor,
  User,
} from "@phosphor-icons/react";

export const reviewSliderData = [
  {
    id: 1,
    name: "Isabel González",
    plan: "Basic",
    location: "Stockholm, Sweden",
    review:
      "Superbra att det finns en tjänst som samlar seriösa hyresvärdar och sköter lägenhetssökandet åt dig. Tack för att ni hjälpte mig göra min dröm till verklighet!",
    rating: 4,
  },
  {
    id: 2,
    name: "David Johnson",
    plan: "Premium",
    location: "Stockholm, Sweden",
    review:
      "Betydligt mer direkt och effektiv än andra tjänster jag testat! Finns förbättringspotential, men överlag var Hemvo och deras support fantastiska.",
    rating: 5,
  },
  {
    id: 3,
    name: "Yasimina Azima",
    plan: "Premium Medlemskap",
    location: "Linköping, Sweden",
    review:
      "Hemvo gav mig en chans direkt från första anmälningsdagen, till skillnad från andra där kötid gäller. Tack vare deras smidiga tjänst hittade jag snabbt en lägenhet. Rekommenderas!",
    rating: 4,
  },
  {
    id: 4,
    name: "Emil Andersson",
    plan: "Basic",
    location: "Uppsala, Sweden",
    review:
      "En enkel och smidig tjänst som sköter hela lägenhetssökandet åt dig och hjälper dig hitta bostäder du annars kanske aldrig skulle ha funnit. Tack för allt Hemvo!",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Andersson",
    plan: "Premium Medlemskap",
    location: "Stockholm, Sweden",
    review:
      "Hemvo är ett effektivt sätt att hitta förstahandskontakt. Tack för en fantastisk tjänst!",
    rating: 4,
  },
  {
    id: 1,
    name: "Isabel González",
    plan: "Basic",
    location: "Stockholm, Sweden",
    review:
      "Superbra att det finns en tjänst som samlar seriösa hyresvärdar och sköter lägenhetssökandet åt dig. Tack för att ni hjälpte mig göra min dröm till verklighet!",
    rating: 4,
  },
  {
    id: 2,
    name: "David Johnson",
    plan: "Premium Medlemskap",
    location: "Stockholm, Sweden",
    review:
      "Betydligt mer direkt och effektiv än andra tjänster jag testat! Finns förbättringspotential, men överlag var Hemvo och deras support fantastiska.",
    rating: 5,
  },
  {
    id: 3,
    name: "Yasimina Azima",
    plan: "Premium Medlemskap",
    location: "Linköping, Sweden",
    review:
      "Vilket bra team och en utmärkt tjänst! De gjorde bostadsökandet mycket enklare och smidigare genom att deras robot och team tog hand om jobbet åt mig.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emil Andersson",
    plan: "Premium",
    location: "Uppsala, Sweden",
    review:
      "En enkel och smidig tjänst som sköter hela lägenhetssökandet åt dig och hjälper dig hitta bostäder du annars kanske aldrig skulle ha funnit. Tack för allt Hemvo!",
    rating: 5,
  },
  {
    id: 5,
    name: "Nathalie Malmsten",
    plan: "Premium",
    location: "Stockholm, Sweden",
    review:
      "En enkel och smidig tjänst som sköter hela lägenhetssökandet åt dig och hjälper dig hitta bostäder du annars kanske aldrig skulle ha funnit. Tack för allt Hemvo!",
    rating: 4,
  },
];

export const assistanceSliderData = [
  {
    id: 1,
    image: AssistanceSlider1,
    title:
      "7 Tips to Make the Move to Your New Apartment Smooth and Stress-Free",
    description:
      "When you receive information about a suitable apartment, you can easily see more information and proceed to the application.",
  },
  {
    id: 1,
    image: AssistanceSlider2,
    title: "How you can get housing benefit and what you need to know",
    description:
      "Understand and apply for housing allowance for a sustainable and economical housing situation.",
  },
  {
    id: 1,
    image: AssistanceSlider3,
    title:
      "How to negotiate a first-hand contract: Tips for getting the best deal",
    description:
      "Negotiate your dream home with a first-hand contract. Understand the market, prepare and use effective negotiation techniques for the best deal.",
  },
  {
    id: 1,
    image: AssistanceSlider4,
    title:
      "How to take over a first-hand contract: Everything you need to know",
    description:
      "Take over first-hand contracts for stability and favorable terms. Guide for preparation and negotiation for a safe housing situation.",
  },
  {
    id: 1,
    image: AssistanceSlider5,
    title: "How to do an effective Moving Cleaning to save time and money",
    description:
      "Effective moving cleaning is essential to avoid fines and problems. Follow tips, use professional services to save time and money.",
  },
  {
    id: 1,
    image: AssistanceSlider1,
    title:
      "7 Tips to Make the Move to Your New Apartment Smooth and Stress-Free",
    description:
      "When you receive information about a suitable apartment, you can easily see more information and proceed to the application.",
  },
  {
    id: 1,
    image: AssistanceSlider2,
    title: "How you can get housing benefit and what you need to know",
    description:
      "Understand and apply for housing allowance for a sustainable and economical housing situation.",
  },
  {
    id: 1,
    image: AssistanceSlider3,
    title:
      "How to negotiate a first-hand contract: Tips for getting the best deal",
    description:
      "Negotiate your dream home with a first-hand contract. Understand the market, prepare and use effective negotiation techniques for the best deal.",
  },
  {
    id: 1,
    image: AssistanceSlider4,
    title:
      "How to take over a first-hand contract: Everything you need to know",
    description:
      "Take over first-hand contracts for stability and favorable terms. Guide for preparation and negotiation for a safe housing situation.",
  },
  {
    id: 1,
    image: AssistanceSlider5,
    title: "How to do an effective Moving Cleaning to save time and money",
    description:
      "Effective moving cleaning is essential to avoid fines and problems. Follow tips, use professional services to save time and money.",
  },
];

export const faqAccordionData: AccordionItem[] = [
  {
    id: "faq-1",
    question: "Hur kommer jag igång?",
    answer:
      "Din lägenhetssökning med vår robot och våra medarbetare startar direkt efter att du har registrerat ditt konto och genomfört betalningen.",
  },
  {
    id: "faq-2",
    question: "När aktiveras min hyresbevakning?",
    answer:
      "Din hyresbevakning aktiveras direkt efter att du har registrerat ditt konto och genomfört din betalning.",
  },
  {
    id: "faq-3",
    question: "Hur fungerar Hemvo?",
    answer:
      "Vi erbjuder en rättvis prissättning för att ge dig bästa möjliga tjänst och hjälpa så många som möjligt att hitta bostad. För detaljer om våra priser och vad som ingår, besök vår prissida.",
  },
  {
    id: "faq-4",
    question: "Behöver jag stå i någon bostadskö?",
    answer:
      "Får du ingen bostad som matchar dina önskemål? Då får du pengarna tillbaka.",
  },
  {
    id: "faq-5",
    question: "Kostar det att få ett förstahandskontrakt?",
    answer:
      "För att vi gör bostadsjakten enklare, snabbare och mer träffsäker. Vi söker lägenheter utifrån din profil, kontaktar hyresvärdar och bokar visningar åt dig. Du slipper köer, scrollande och stress – och om vi inte hittar en bostad som matchar dina kriterier, omfattas du av vår pengarna-tillbaka-garanti.",
  },
];
export const faqPageAccordionData: AccordionItem[] = [
  {
    id: "faq-1",
    question: "Mitt barn har flyttat hemifrån, vad händer då?",
    answer:
      "Din lägenhetssökning med vår robot och våra medarbetare startar direkt efter att du har registrerat ditt konto och genomfört betalningen.",
  },
  {
    id: "faq-2",
    question: "Hur hanterar jag mitt barns konto?",
    answer:
      "Din hyresbevakning aktiveras direkt efter att du har registrerat ditt konto och genomfört din betalning.",
  },
  {
    id: "faq-3",
    question: "Hur tar jag bort en familjemedlem?",
    answer:
      "Vi erbjuder en rättvis prissättning för att ge dig bästa möjliga tjänst och hjälpa så många som möjligt att hitta bostad. För detaljer om våra priser och vad som ingår, besök vår prissida.",
  },
  {
    id: "faq-4",
    question: "Vad är huvudkontot på ett familjekonto?",
    answer:
      "Får du ingen bostad som matchar dina önskemål? Då får du pengarna tillbaka.",
  },
  {
    id: "faq-5",
    question:
      "Mitt barn är inte tillräckligt gammal för vissa köer, vad ska jag göra?",
    answer:
      "För att vi gör bostadsjakten enklare, snabbare och mer träffsäker. Vi söker lägenheter utifrån din profil, kontaktar hyresvärdar och bokar visningar åt dig. Du slipper köer, scrollande och stress – och om vi inte hittar en bostad som matchar dina kriterier, omfattas du av vår pengarna-tillbaka-garanti.",
  },
  {
    id: "faq-6",
    question: "Vilka statusar kan ett underkonto ha?",
    answer:
      "För att vi gör bostadsjakten enklare, snabbare och mer träffsäker. Vi söker lägenheter utifrån din profil, kontaktar hyresvärdar och bokar visningar åt dig. Du slipper köer, scrollande och stress – och om vi inte hittar en bostad som matchar dina kriterier, omfattas du av vår pengarna-tillbaka-garanti.",
  },
  {
    id: "faq-7",
    question: "Måste man tacka ja till lägenheter när man är framme i kön?",
    answer:
      "För att vi gör bostadsjakten enklare, snabbare och mer träffsäker. Vi söker lägenheter utifrån din profil, kontaktar hyresvärdar och bokar visningar åt dig. Du slipper köer, scrollande och stress – och om vi inte hittar en bostad som matchar dina kriterier, omfattas du av vår pengarna-tillbaka-garanti.",
  },
  {
    id: "faq-8",
    question: "Vilka områden borde jag välja åt mitt barn?",
    answer:
      "För att vi gör bostadsjakten enklare, snabbare och mer träffsäker. Vi söker lägenheter utifrån din profil, kontaktar hyresvärdar och bokar visningar åt dig. Du slipper köer, scrollande och stress – och om vi inte hittar en bostad som matchar dina kriterier, omfattas du av vår pengarna-tillbaka-garanti.",
  },
  {
    id: "faq-9",
    question: "Kan jag bjuda in alla mina familjemedlemmar",
    answer:
      "För att vi gör bostadsjakten enklare, snabbare och mer träffsäker. Vi söker lägenheter utifrån din profil, kontaktar hyresvärdar och bokar visningar åt dig. Du slipper köer, scrollande och stress – och om vi inte hittar en bostad som matchar dina kriterier, omfattas du av vår pengarna-tillbaka-garanti.",
  },
];

export const customerBubbles = [
  {
    image: Bubble1,
  },
  {
    image: Bubble2,
  },
  {
    image: Bubble3,
  },
  {
    image: Bubble4,
  },
  {
    image: Bubble5,
  },
  {
    image: Bubble6,
  },
  {
    image: Bubble7,
  },
  {
    image: Bubble8,
  },
  {
    image: Bubble9,
  },
  {
    image: Bubble10,
  },
  {
    image: Bubble11,
  },
  {
    image: Bubble12,
  },
];

export const blogPosts = [
  {
    id: 1,
    image: AssistanceSlider1,
    slug: "post-1",
    title:
      "7 Tips to Make the Move to Your New Apartment Smooth and Stress-Free.",
  },
  {
    id: 2,
    image: AssistanceSlider2,
    slug: "post-2",
    title: "How you can get housing benefit and what you need to know.",
  },
  {
    id: 3,
    image: AssistanceSlider3,
    slug: "post-3",
    title:
      "How to negotiate a first-hand contract: Tips for getting the best deal.",
  },
  {
    id: 4,
    image: AssistanceSlider4,
    slug: "post-4",
    title:
      "7 Tips to Make the Move to Your New Apartment Smooth and Stress-Free.",
  },
  {
    id: 5,
    image: AssistanceSlider5,
    slug: "post-5",
    title: "How you can get housing benefit and what you need to know.",
  },
  {
    id: 6,
    image: AssistanceSlider1,
    slug: "post-6",
    title:
      "How to negotiate a first-hand contract: Tips for getting the best deal.",
  },
];
export const firstInSwedenContentData = [
  {
    title: "Smart robot",
    description: `Med kraften från vår bostadsrobot och erfarenheten i vårt team söker vi bostäder åt dig dygnet runt, helt utifrån din unika hyresprofil. Tillsammans maximerar vi dina chanser till ett förstahandskontrakt.`,
  },
  {
    title: "Pengarna-tillbaka-garanti",
    description: `Lägenheter erbjuds den medlem som först tackar ja till visningen. Om vi inte hittar någon bostad som matchar din profil, gäller vår pengarna-tillbaka-garanti.`,
  },
  {
    title: "BankID",
    description: `Signera hyresavtalet tryggt och säkert med BankID för en enkel och smidig avslutning av din hyresprocess.`,
  },
];
export const appInfoCardData = [
  {
    appImgae: SquareIPhoneWithDashboard.src,
    title: "Skapa din hyresprofil ",
    description: `Skapa din hyresprofil genom att ange antal rum, hyra, yta och stad. Vi matchar dig automatiskt med passande lägenheter och seriösa hyresvärdar. Bli medlem och låt oss göra bostadsjakten enkel, trygg och effektiv.`,
  },
  {
    appImgae: SquareIPhoneWithGirl.src,
    title: "Smart robot ",
    description: `Vi tar dig genom bostadsdjungeln och sköter hela processen åt dig. Vi söker bostäder, kontaktar hyresvärdar och bokar visningar utifrån din profil. Du blir medlem, vi gör resten. När en lägenhet är klar för visning eller redo att signeras får du direkt besked via sms eller mejl`,
    rowReverse: "flex-row-reverse",
  },
  {
    appImgae: SquareIPhoneWithNews.src,
    title: "Trygg bostadsjakt",
    description: `På Hemvo signeras alla hyresavtal tryggt och enkelt med BankID när vi har hittat en bostad som matchar dina önskemål. Vi erbjuder en trygg och riskfri tjänst för både hyresgäster och hyresvärdar, helt anpassad efter dina villkor.`,
  },
];
export const planData = [
  {
    plan: "Basic",
    label: `För dig som söker en lägenhet.`,
    price: `159 KR`,
    popular: false,
    variant: false,
    features: [
      `Obegränsad hyresbevakning`,
      `Hyresprofil`,
      `Notifikationer via e-post`,
      `BankID-signering`,
      `ngen bindningstid eller uppsägningstid`,
    ],
  },
  {
    plan: "Premium",
    label: `För dig som vill hitta en lägenhet. Snabbt.`,
    price: `219 KR`,
    popular: true,
    variant: true,
    features: [
      `Obegränsad hyresbevakning`,
      `Hyresprofil`,
      `Notifikationer via e-post`,
      `Notifikationer via SMS`,
      `BankID-signering`,
      `Prioriterad support`,
      `Ingen bindningstid eller uppsägningstid`,
    ],
  },
  {
    plan: "Premium Plus",
    label: `För dig som behöver hitta lägenhet extra snabbt.`,
    price: `279 KR`,
    popular: false,
    variant: false,
    features: [
      `Obegränsad hyresbevakning`,
      `Hyresprofil`,
      `Notifikationer via e-post`,
      `Notifikationer via SMS`,
      `BankID-signering`,
      `Exklusiva lägenhetsförslag`,
      `Prioriterad support`,
      `Ingen bindningstid eller uppsägningstid`,
    ],
  },
];
export const homeHeroLabelData = [
  {
    labelTitle: "Kostnadsfritt",
  },
  {
    labelTitle: "50.000+ hyresgäster",
  },
  {
    labelTitle: "Maximera dina intäkter",
  },
];
export const rentOutHeroLabelData = [
  {
    labelTitle: "Kostnadsfritt",
  },
  {
    labelTitle: "3000+ hyresgäster",
  },
  {
    labelTitle: "Maximera dina intäkter",
  },
];
export const flatQuestData = [
  {
    title: `Bred exponering – vår robot matchar din bostad med en stor publik av potentiella hyresgäster.`,
  },
  {
    title: `Effektiv hantering – vi tar hand om all kommunikation och förberedelser inför visningen.`,
  },
  {
    title: `Trygghet och säkerhet – vi säkerställer att hyresgäster är verifierade och pålitliga.`,
  },
];

export const sistaStegetData = [
  {
    title: `Över 300+ förstahandskontrakt.English: Over 300+ first-hand contracts.`,
    description: `Vår ambition för 2024 är att matcha 300+ medlemmar varje månad med förstahandskontrakt.Engelska: Our ambition for 2024 is to match 300+ members each month with first-hand rental contracts.`,
  },
  {
    title: `Robot sköter allt`,
    description: `Vår robot och våra medarbetare söker Sveriges bostadsmarknad åt dig.Engelska: Our robot and team members search Sweden's housing market for you.`,
  },
  {
    title: `BankID`,
    description: `Tacka ja på våra notiser om lägenhetsvisningar och skriv under med BankID. Enklare blir det inte att hitta en bostad.Engelska: Accept our notifications about apartment viewings and sign with BankID. It doesn’t get any easier to find a home.`,
  },
];
export const subscribeFaqAccordionData: AccordionItem[] = [
  {
    id: "faq-1",
    question: "Hur kommer jag igång?",
    answer:
      "Din hyresbevakning aktiveras direkt efter att du har registrerat ditt konto och genomfört din betalning.",
  },
  {
    id: "faq-2",
    question: "När aktiveras min hyresbevakning?",
    answer:
      "Din hyresbevakning aktiveras direkt efter att du har registrerat ditt konto och genomfört din betalning.",
  },
  {
    id: "faq-3",
    question: "Hur fungerar Hemvo?",
    answer:
      "Din hyresbevakning aktiveras direkt efter att du har registrerat ditt konto och genomfört din betalning.",
  },
  {
    id: "faq-4",
    question: "Behöver jag stå i någon bostadskö?",
    answer:
      "Din hyresbevakning aktiveras direkt efter att du har registrerat ditt konto och genomfört din betalning.",
  },
  {
    id: "faq-5",
    question: "Kostar det att få ett förstahandskontrakt?",
    answer:
      "Din hyresbevakning aktiveras direkt efter att du har registrerat ditt konto och genomfört din betalning.",
  },
];
export const contactLabelData = [
  {
    id: 1,
    icon: <Envelope size={20} weight="duotone" />,
    labelTitle: "Skicka e-post",
    link: "mailTo:info@Hemvo.se",
  },
  {
    id: 2,
    icon: <ChatCentered size={20} weight="duotone" />,
    labelTitle: "Instagram",
    link: "https://www.instagram.com/Hemvo.se",
  },
  {
    id: 3,
    icon: <Question size={20} weight="duotone" />,
    labelTitle: "Vanliga frågor",
    link: "/#faq",
  },
];

export const faqCategories = [
  {
    id: "payments",
    icon: <Money size={24} weight="duotone" />,
    name: "Payments",
    description: "When, how and wherethe subscription is paid.",
    questionList: [
      {
        id: "1",
        title: "När ska min betalning vara inne?",
        content:
          "Vi drar automatiskt betalningen en gång i månaden från den dag du aktiverade ditt konto. Det innebär att din betalning sker den samma dag varje månad, så du behöver inte tänka på specifika förfallodatum.",
      },
      {
        id: "2",
        title: "Vad händer om jag inte betalar?",
        content:
          "Om vi inte får in betalningen för ditt abonnemang inom tio dagar efter det första dragningsförsöket kommer ditt abonnemang att spärras. Det innebär att du inte längre kommer att ha tillgång till våra tjänster tills betalningen har genomförts.",
      },
      {
        id: "3",
        title: "Anledningar till att en betalning nekas",
        content: (
          <>
            Om din betalning nekas kan det bero på olika faktorer beroende på
            vilken betalmetod du använder:
            <ul>
              <li>Kortet saknar täckning.</li>
              <li>Kortet är spärrat för återkommande internetköp.</li>
              <li>
                Ett gammalt eller felaktigt kort är registrerat på Mitt Konto.
              </li>
              <li>Kortet har blivit stöldspärrat.</li>
            </ul>
          </>
        ),
      },
      {
        id: "4",
        title: "Vilka betalningsmetoder erbjuder ni?",
        content: (
          <>
            Vi erbjuder följande betalningsmetoder för ditt abonnemang: Kredit-
            och betalkort: Du kan använda de flesta
            <ul>
              <li>
                kredit- och betalkort som Visa, MasterCard och American Express.
              </li>
              <li>
                större Klarna: Betala direkt, senare, eller dela upp din
                betalning.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "5",
        title: "Hur lång uppsägningstid eller bindningstid har jag?",
        content:
          "Ingen bindningstid alls! Som medlem är du fri att avsluta ditt abonnemang när du vill. När du väljer att avsluta ditt abonnemang kommer det att upphöra vid nästa faktureringsperiod. Eftersom du betalar i förskott för varje period får du använda ditt abonnemang fram till perioden är slut, även om du säger upp det innan.",
      },
      {
        id: "6",
        title: "Hur avslutar jag mitt abonnemang?",
        content:
          "Vi tycker att bindningstider känns föråldrade. Vi vill ha medlemmar som gillar oss, inte som känner sig tvingade att stanna kvar. Därför har vi lagt till en uppsägningsknapp i dina inställningar. Om du vill avsluta ditt abonnemang, är det bara att klicka på knappen – när du vill. När du väljer att avsluta, kommer vi att stänga av ditt abonnemang i slutet av din nuvarande faktureringsperiod. Eftersom du redan har betalat för perioden, vill vi att du ska få använda ditt abonnemang till dess att perioden är över. Vi skickar även ett bekräftelsemail så att du vet att vi har mottagit din uppsägning.",
      },
    ],
  },
  {
    id: "searchHousing",
    name: "Söka bostad",
    icon: <House size={24} weight="duotone" />,
    description:
      "När aktiveras min hyresbevakning?Din hyresbevakning aktiveras direkt efter att du har registrerat ditt konto och genomfört din betalning.",
    questionList: [
      {
        id: "1",
        title: "När aktiveras min hyresbevakning?",
        content:
          "Din hyresbevakning aktiveras direkt efter att du har registrerat ditt konto och genomfört din betalning.",
      },
      {
        id: "2",
        title: "Hur fungerar Hemvo?",
        content:
          "Hemvo använder avancerad teknik och algoritmer för att hitta förstahandskontrakt och lägenheter för våra medlemmar. Vi headhuntar hyresvärdar genom att erbjuda belöningar för att hyra ut till våra medlemmar. När vi har ordnat en bostadsvisning med hyresvärden, skickar vår personal information om lägenheter som matchar dina kriterier direkt till dig via e-post eller SMS.",
      },
      {
        id: "3",
        title: "Hur kommer jag igång?",
        content:
          "Börja med att skapa din hyresprofil. I profilen anger du bland annat vilken stad du söker lägenhet i, storlek på lägenheten, antal rum, din maximala hyra samt eventuella extra önskemål som balkong eller en hyresvärd som är okej med husdjur. När din profil är klar börjar vår algoritm att leta efter lägenheter som matchar dina kriterier.",
      },
      {
        id: "4",
        title: "Vad kostar det att bli medlem?",
        content:
          "Vi erbjuder en rättvis prissättning för att ge dig bästa möjliga tjänst och hjälpa så många som möjligt att hitta bostad. För detaljer om våra priser och vad som ingår, besök vår prissida.",
      },
      {
        id: "5",
        title: "Behöver jag stå i någon bostadskö?",
        content:
          "Med Hemvo behöver du inte stå i någon bostadskö. Vårt system söker efter lägenheter och förstahandskontrakt som inte kräver kötid och som matchar dina kriterier. Vi fokuserar på att hitta lägenheter baserat på andra faktorer, snarare än att förlita oss på köpoäng. Du kan dock behöva lämna dina kontaktuppgifter till respektive hyresvärd eller fastighetsägare för att kunna bli kontaktad om du blir aktuell för visning och hyreskontrakt.",
      },
      {
        id: "6",
        title: "Hur väljs hyresgäst?",
        content:
          "När vi har hittat en lägenhet och kommit överens om en visning med hyresvärden, skickar vi ut information via SMS och e-post till alla våra medlemmar som matchar kriterierna för lägenheten. Den person som svarar först och bekräftar sitt intresse för en visning får möjlighet att delta i lägenhetsvisningen. Om du gillar lägenheten och vill gå vidare kan du sedan signera hyreskontraktet. På det här sättet slipper du stå i bostadskö och får en rättvis chans att hitta ditt nya hem.",
      },
      {
        id: "7",
        title: "Hur ökar jag mina chanser att få ett förstahandskontrakt?",
        content:
          "För att maximera dina chanser att få ett förstahandskontrakt är det viktigt att skapa din hyresprofil och bli medlem så snart som möjligt. Ju snabbare du registrerar dig, desto snabbare börjar vår robot och våra medarbetare leta efter lägenheter som matchar dina kriterier, både på bostadsmarknaden och i vår egen portfölj. Håll ett öga på din e-post och SMS för uppdateringar om tillgängliga lägenheter. Var snabb med att anmäla ditt intresse för visningar, eftersom det ökar dina chanser att få en lägenhet som ditt nya hem.",
      },
      {
        id: "8",
        title: "Finns det någon förtur?",
        content:
          "Nej, vi erbjuder ingen form av förtur. Hos oss gäller lika villkor för alla medlemmar, vilket innebär att alla har samma möjlighet att få tillgång till lägenheter. Urvalet baseras på hur väl du matchar kriterierna och din snabbhet i att svara på visningsinbjudningar.",
      },
      {
        id: "9",
        title: "Kostar det att få ett förstahandskontrakt?",
        content:
          "Nej, det kostar inget extra att få ett förstahandskontrakt genom oss. Du betalar endast den månatliga hyran för lägenheten, precis som vid vanlig uthyrning.",
      },
      {
        id: "10",
        title: "Hur fungerar min hyresprofil?",
        content:
          "I din hyresprofil anger du dina önskemål för din framtida bostad, inklusive stad, maximalt pris, minst antal rum, minst antal kvadratmeter och eventuella specialönskemål. Vår algoritm använder dessa uppgifter för att hitta lägenheter som matchar dina kriterier. Om dina inställningar är för snäva kan det hända att du inte får några notifikationer från oss. Exempel: Om du söker en 4-rums lägenhet med en maxhyra på 4000 kr i Göteborg, kan det vara så att det inte finns några lägenheter som matchar dessa krav. Det är därför viktigt att justera dina kriterier om du vill ha fler alternativ.",
      },
      {
        id: "11",
        title: "Vilka krav ställer fastighetsägare?",
        content: (
          <>
            För att kunna erbjudas ett förstahandskontrakt behöver du uppfylla
            vissa krav som fastighetsägare ställer. Även om kraven kan variera
            mellan olika hyresvärdar, gäller oftast följande:
            <ul>
              <li>Du måste vara över 18 år och myndig.</li>
              <li>Du ska vara fri från betalningsanmärkningar.</li>
              <li>
                Du behöver ha en tillräcklig inkomst för att kunna betala hyran.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "12",
        title: "Hittar du inte svar på din fråga?",
        content: "Kontakta oss på info@Hemvo! Vi svarar så snabbt vi kan.",
      },
    ],
  },
  {
    id: "guides",
    name: "Guider",
    icon: <Book size={24} weight="duotone" />,
    description: "Allt du behöver veta om bostadsmarknaden.",
    questionList: [
      {
        id: "1",
        title: "Bra att veta innan inflytt",
        content: (
          <>
            Det är mycket att tänka på när du ska flytta. Här är en checklista
            med viktiga punkter som är bra att ha koll på innan du flyttar in i
            din nya bostad:
            <ol>
              <li>
                <span>Teckna hemförsäkring</span>
                En giltig hemförsäkring är nödvändig, oavsett om hyresvärden har
                en eller ej. Som hyresgäst bör du teckna en hemförsäkring på din
                nya adress. Om bostaden är möblerad, överväg även
                tilläggsförsäkringar för lösöre och allrisk, då hyresvärdens
                försäkring kanske inte täcker dina ägodelar eller skador du är
                ansvarig för.
              </li>
              <li>
                <span>Förvara överskottsföremål</span>
                Om du har saker som inte får plats i den nya bostaden eller som
                inte behövs just nu, kan det vara bra att förvara dem någon
                annanstans. Kolla upp olika lagringsalternativ på marknaden för
                att hitta det som passar dig bäst.
              </li>
              <li>
                <span>Upprätta ett besiktningsprotokoll</span>
                För att undvika framtida tvister, se till att dokumentera
                bostadens skick vid inflytt. Gör en inventarielista och ett
                besiktningsprotokoll som både du och hyresvärden undertecknar.
                Detta underlättar om det skulle uppstå tvister vid utflyttning.
              </li>
              <li>
                <span>Adressändring och folkbokföring</span>
                Gör en flyttanmälan till Skatteverket för att uppdatera din
                folkbokföringsadress. Det är gratis och kan göras snabbt online.
                Om du har barn som flyttar med, se till att även anmäla deras
                flytt. Glöm inte att göra en adressändring hos Adressändring.se
                för att säkerställa att all din post når dig på den nya
                adressen.
              </li>
              <li>
                <span>Förbered en lista med frågor till hyresvärden</span>
                För att undvika missförstånd och få viktig information, förbered
                en lista med frågor till hyresvärden som du kan gå igenom vid
                nyckelöverlämningen. Här är några exempel på frågor:Var hittar
                man proppskåpet? Finns det några informella regler i
                tvättstugan? Är det någon granne som brukar klaga om man är
                högljudd? Vilken är den närmaste/bästa matbutiken? Finns det
                någon händig granne att kontakta vid behov? Vad är
                kontaktuppgifterna till bostadsrättsförening eller hyresvärd vid
                eventuella olyckor?
              </li>
            </ol>
            Genom att följa denna lista får du en smidigare inflyttning och kan
            tryggt känna dig förberedd för ditt nya hem.
          </>
        ),
      },
      {
        id: "2",
        title: "Undvik hyresbedrägerier",
        content: (
          <>
            Polisen varnar för att många bedrägerier kopplade till uthyrning
            inleds på internet. Bedragare annonserar ofta attraktiva bostäder
            och erbjuder visning, men kräver vanligtvis en eller flera
            månadshyror som depositionsavgift för att "säkerställa" att du är en
            seriös hyresgäst. Detta är ett vanligt tecken på bedrägeri. Här är
            några tips för att undvika hyresbedrägerier:
            <ol>
              <li>
                <span>Var skeptisk mot förskottsbetalningar:</span>
                Om uthyraren kräver en depositionsavgift innan du har sett
                lägenheten eller fått ett skriftligt kontrakt, var extra
                försiktig. Detta är ofta ett tecken på bedrägeri.
              </li>
              <li>
                <span>Kontrollera uthyrarens legitimitet:</span>
                Gör efterforskningar om uthyraren och bostaden. Kontrollera om
                hyresvärden är registrerad och om bostaden verkligen finns.
              </li>
              <li>
                <span>Besök lägenheten innan du betalar: </span>
                Se till att du har besökt lägenheten och fått ett skriftligt
                hyreskontrakt innan du betalar några pengar.
              </li>
              <li>
                <span>Var vaksam på misstänkt beteende:</span>
                Om något känns misstänkt eller för bra för att vara sant, lita
                på din magkänsla och var försiktig.
              </li>
              <li>
                <span>Kontakta hyresvärden direkt:</span>
                Om du är osäker, ring och bekräfta uthyrarens kontaktuppgifter.
              </li>
            </ol>
            Vi på Hemvo hjälper dig gärna om du misstänker bedrägeri eller
            behöver råd. Kontakta oss om du har några frågor eller oroar dig för
            en potentiell bedrägeri. Vi finns här för att stödja dig genom
            processen. Om du misstänker att du har blivit utsatt för ett
            bedrägeri eller känner dig osäker, tveka inte att kontakta polisens
            tipslinje på 114 14. Bättre att vara försiktig än att riskera att
            bli lurad.
          </>
        ),
      },
      {
        id: "3",
        title: "Ordlista",
        content: (
          <>
            <ul>
              <li>
                <strong> Andrahandskontrakt-</strong>
                Ett andrahandskontrakt innebär att du hyr av en annan hyresgäst
                (förstahandshyresgäst) som i sin tur hyr av en hyresvärd.
                Andrahandsuthyrning är vanligtvis tidsbegränsad, till exempel
                tre månader, ett år, eller två år.
              </li>
              <li>
                <strong>Förstahandskontrakt -</strong>
                Ett förstahandskontrakt innebär att du hyr direkt av en
                hyresvärd, såsom ett bostadsbolag eller en allmännyttig
                verksamhet.
              </li>
              <li>
                <strong>Först-till-kvarn-principen - </strong>
                För bostäder som delas ut enligt först-till-kvarn-principen
                gäller inte kötid. Istället är det den som först anmäler
                intresse för bostaden och uppfyller hyresvärdens villkor som får
                möjlighet att hyra lägenheten.
              </li>
              <li>
                <strong>Lägenhetstips -</strong>
                De bostadsannonser som matchar dina önskemål och som Hemvo
                skickar ut till dig via e-post eller SMS.
              </li>
              <li>
                <strong>Seniorbostad - </strong>
                Lägenheter som är reserverade för seniorer. Dessa bostäder är
                ofta belägna i fastigheter eller områden där de boende är i
                liknande ålder och livssituation, vanligtvis för personer som är
                55 år eller äldre.
              </li>
              <li>
                <strong>Studentbostad - </strong>
                Lägenheter som är reserverade för studenter. För att kvalificera
                sig som student behöver du vara inskriven vid en högskola,
                universitet eller yrkeshögskola. Kraven på antal högskolepoäng
                per år kan variera beroende på hyresvärden.
              </li>
              <li>
                <strong>Tillsvidare - </strong>I ett förstahandskontrakt är
                tillsvidareuthyrning standard. Det innebär att du kan bo kvar i
                bostaden så länge du sköter dig och betalar hyran, tills du
                eller hyresvärden väljer att säga upp kontraktet.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    id: "subscription",
    name: "Abonnemang",
    icon: <User size={24} weight="duotone" />,
    description: "Beställning, inställningar och annat viktigt",
    questionList: [
      {
        id: "1",
        title: "Hur kommer jag igång?",
        content:
          "Börja med att skapa din hyresprofil. I profilen anger du bland annat vilken stad du söker lägenhet i, storlek på lägenheten, antal rum, din maximala hyra samt eventuella extra önskemål som balkong eller en hyresvärd som är okej med husdjur. När din profil är klar, börjar vår algoritm att leta efter lägenheter som matchar dina kriterier.",
      },
      {
        id: "2",
        title: "Hur byter jag e-postadress eller lösenord?",
        content:
          "För att byta e-postadress eller lösenord, loggar du in på Mitt Konto. Där kan du uppdatera dina uppgifter.",
      },
      {
        id: "3",
        title: "Glömt lösenord?",
        content:
          "Ingen fara! Följ länken här för att återställa ditt lösenord. Du behöver endast ha tillgång till den e-postadress du använde vid registreringen av ditt konto.",
      },
      {
        id: "4",
        title: "Hur lång uppsägningstid eller bindningstid har jag?",
        content:
          "Ingen bindningstid alls! Som medlem är du fri att avsluta ditt abonnemang när du vill. När du väljer att avsluta ditt abonnemang kommer det att upphöra vid nästa faktureringsperiod. Eftersom du betalar i förskott för varje period får du använda ditt abonnemang fram till perioden är slut, även om du säger upp det innan.",
      },
      {
        id: "5",
        title: "Hur avslutar jag mitt abonnemang?",
        content:
          "Vi tycker att bindningstider känns föråldrade. Vi vill ha medlemmar som gillar oss, inte som känner sig tvingade att stanna kvar. Därför har vi lagt till en uppsägningsknapp i dina inställningar. Om du vill avsluta ditt abonnemang, är det bara att klicka på knappen - när du vill. När du väljer att avsluta, kommer vi att stänga av ditt abonnemang i slutet av din nuvarande faktureringsperiod. Eftersom du redan har betalat för perioden, vill vi att du ska få använda ditt abonnemang till dess att perioden är över. Vi skickar även ett bekräftelsemail så att du vet att vi har mottagit din uppsägning.",
      },
    ],
  },
  {
    id: "technicalSupport",
    name: "Teknisk support",
    icon: <Monitor size={24} weight="duotone" />,
    description: "Notifikationer, driftstatus och annat tekniskt",
    questionList: [
      {
        id: "1",
        title: "Jag får inga notiser om lägenhetsvisningar alls, vad gör jag?",
        content: (
          <>
            Om du inte får några notiser om lägenhetsvisningar, följ dessa steg
            för att lösa problemet:
            <ol>
              <li>
                <strong>Kontrollera att ditt konto är aktivt.</strong>För att få
                information om lägenhetsvisningar måste du ha betalat för
                tjänsten och ha ett aktivt konto.
              </li>
              <li>
                <strong>Verifiera din e-postadress och telefonnummer. </strong>
                Se till att du har angett rätt kontaktuppgifter.
              </li>
              <li>
                <strong>Granska dina bevakningsinställningar.</strong>
                Om dina inställningar är för snäva kan du missa relevanta
                visningar. Till exempel, om du söker en lägenhet med 6 rum och
                max 4000 kr i hyra i Stockholm, kan du få få eller inga
                visningar om det inte finns lägenheter som matchar dessa
                kriterier.
              </li>
              <li>
                <strong>Kontrollera din skräpkorg.</strong>
                Se till att våra e-postmeddelanden inte hamnar i din skräppost.
              </li>
            </ol>
            <div>
              <strong>Sammanfattning:</strong>
              <ol>
                <li>Har du betalat för tjänsten och är ditt konto aktivt?</li>
                <li>Är din e-postadress och telefonnummer korrekta?</li>
                <li>Är dina bevakningsinställningar för snäva?</li>
                <li>
                  Hamnar våra meddelanden om lägenhetsvisningar i din skräppost?
                </li>
              </ol>
            </div>
            Om du fortfarande har problem efter att ha kontrollerat dessa
            punkter, tveka inte att kontakta vår support för vidare hjälp.
          </>
        ),
      },
      {
        id: "2",
        title: "SMS-utskicken fungerar inte för mig, vad gör jag?",
        content: (
          <>
            Om du inte får SMS-utskick, följ dessa steg för att lösa problemet:
            <ol>
              <li>
                <strong>Kontrollera att ditt konto är aktivt.</strong>
                För att ta emot SMS-utskick måste du ha betalat för tjänsten och
                ha ett aktivt konto.
              </li>
              <li>
                <strong>Verifiera ditt telefonnummer. </strong>
                Se till att du har angett rätt telefonnummer under Mitt Konto.
              </li>
              <li>
                <strong>Granska dina bevakningsinställningar.</strong>
                Om dina inställningar är för snäva kan du missa relevanta
                utskick. Till exempel, om du har ställt in att endast få SMS om
                lägenheter med specifika kriterier som inte finns tillgängliga,
                kan du få färre eller inga utskick. Ju bredare dina
                bevakningsinställningar är, desto fler notiser får du om de
                lägenhetsvisningar vi har tillgängliga och avtalade.
              </li>
              <li>
                <strong>Kontrollera att du kan ta emot SMS. </strong>
                Se till att din telefon kan ta emot SMS och att du inte har
                några blockeringar för våra nummer.
              </li>
            </ol>
            <div>
              <strong>Sammanfattning:</strong>
              <ol>
                <li>Har du betalat för tjänsten och är ditt konto aktivt?</li>
                <li>Är ditt telefonnummer korrekt?</li>
                <li>Är dina bevakningsinställningar för snäva?</li>
              </ol>
            </div>
            Om du fortfarande har problem efter att ha kontrollerat dessa
            punkter, vänligen kontakta vår support för vidare assistans.
          </>
        ),
      },
      {
        id: "3",
        title: "E-postutskicken fungerar inte för mig, vad gör jag?",
        content: (
          <>
            Först och främst, kontrollera att du har ett aktivt konto och att du
            har betalat för tjänsten. Detta kan du verifiera genom att logga in
            på Mitt Konto. Kontrollera också att din e-postadress är korrekt
            angiven under Mitt Konto. Nästa steg är att se till att dina
            bevakningsinställningar inte är för snäva. Om du till exempel endast
            vill få lägenhetstips om lägenheter med 5 rum och max 3500 kr i hyra
            kan du få färre tips, särskilt om sådana lägenheter är ovanliga i
            det område du söker i. Ju bredare dina bevakningsinställningar är,
            desto fler notiser får du om de lägenhetsvisningar vi har
            tillgängliga och avtalade. Slutligen, se till att våra e-postutskick
            inte fastnar i din skräppost. Lägg gärna till info@Hemvo.se i din
            kontaktlista för att säkerställa att våra meddelanden kommer fram.
            <div>
              <strong>Sammanfattning:</strong>
              <ol>
                <li>Har du betalat för tjänsten och är ditt konto aktivt?</li>
                <li>Är din e-postadress korrekt angiven?</li>
                <li>Är dina bevakningsinställningar för snäva?</li>
                <li>
                  Har du kontrollerat att våra e-postutskick inte hamnar i
                  skräpposten?
                </li>
              </ol>
            </div>
          </>
        ),
      },
    ],
  },
];
export const faqIcons = [
  {
    id: "payments",
    icon: <Money size={24} weight="duotone" />,
  },
  {
    id: "searchHousing",
    name: "Söka bostad",
    icon: <House size={24} weight="duotone" />,
  },
  {
    id: "guides",
    name: "Guider",
    icon: <Book size={24} weight="duotone" />,
  },
  {
    id: "subscription",
    name: "Abonnemang",
    icon: <User size={24} weight="duotone" />,
  },
  {
    id: "technicalSupport",
    name: "Teknisk support",
    icon: <Monitor size={24} weight="duotone" />,
  },
];
