import {
  cityOne,
  cityThree,
  cityTwo,
  dockCity,
  gbHouse,
  groupHouse,
  keyhouse,
  logoHere,
  person,
  realastate,
  redHouse,
  tent,
  visa,
} from "@/assets/images";
import { Icons } from "./Icons";
import { title } from "process";
import { ContactDetailForm } from "@/components/Form/ContactDetailForm";
import { IncomeForm } from "@/components/Form/IncomeForm";
import { CurrentResidentForm } from "@/components/Form/CurrentResidentForm";
import { PreferanceForm } from "@/components/Form/PreferanceForm";
import { ArrowsClockwise, Database, User, WarningDiamond } from "@phosphor-icons/react";

export const heroRting = [
  {
    id: 1,
    icon: <span>{Icons.starSm}</span>,
  },
  {
    id: 2,
    icon: <span>{Icons.starSm}</span>,
  },
  {
    id: 3,
    icon: <span>{Icons.starSm}</span>,
  },
  {
    id: 4,
    icon: <span>{Icons.starSm}</span>,
  },
  {
    id: 5,
    icon: <span>{Icons.halfStarSm}</span>,
  },
];
export const blogCard = [
  {
    id: 1,
    time: "7 min.",
    date: "18 mars 2025",
    imgSrc: dockCity,
    title: "Bostadsmarknaden i Navigera på Sverige: En Guide för Alla",
    personImg: logoHere,
    personName: "Richard Valleryd ",
    personPos: "Operationell chef",
  },
  {
    id: 2,
    time: "7 min.",
    date: "18 mars 2025",
    imgSrc: dockCity,
    title: "Bostadsmarknaden i Navigera på Sverige: En Guide för Alla",
    personImg: logoHere,
    personName: "Richard Valleryd ",
    personPos: "Operationell chef",
  },
  {
    id: 3,
    time: "7 min.",
    date: "18 mars 2025",
    imgSrc: dockCity,
    title: "Bostadsmarknaden i Navigera på Sverige: En Guide för Alla",
    personImg: logoHere,
    personName: "Richard Valleryd ",
    personPos: "Operationell chef",
  },
  {
    id: 4,
    time: "7 min.",
    date: "18 mars 2025",
    imgSrc: dockCity,
    title: "Bostadsmarknaden i Navigera på Sverige: En Guide för Alla",
    personImg: logoHere,
    personName: "Richard Valleryd ",
    personPos: "Operationell chef",
  },
  {
    id: 5,
    time: "7 min.",
    date: "18 mars 2025",
    imgSrc: dockCity,
    title: "Bostadsmarknaden i Navigera på Sverige: En Guide för Alla",
    personImg: logoHere,
    personName: "Richard Valleryd ",
    personPos: "Operationell chef",
  },
  {
    id: 6,
    time: "7 min.",
    date: "18 mars 2025",
    imgSrc: dockCity,
    title: "Bostadsmarknaden i Navigera på Sverige: En Guide för Alla",
    personImg: logoHere,
    personName: "Richard Valleryd ",
    personPos: "Operationell chef",
  },
];

export const housingqueue = [
  {
    id: 1,
    time: "7 min.",
    date: "18 mars 2025",
    imgSrc: dockCity,
    title: "Bostadsmarknaden i Navigera på Sverige: En Guide för Alla",
    personImg: logoHere,
    personName: "Richard Valleryd ",
    personPos: "Operationell chef",
  },
  {
    id: 2,
    time: "7 min.",
    date: "18 mars 2025",
    imgSrc: dockCity,
    title: "Bostadsmarknaden i Navigera på Sverige: En Guide för Alla",
    personImg: logoHere,
    personName: "Richard Valleryd ",
    personPos: "Operationell chef",
  },
  {
    id: 3,
    time: "7 min.",
    date: "18 mars 2025",
    imgSrc: dockCity,
    title: "Bostadsmarknaden i Navigera på Sverige: En Guide för Alla",
    personImg: logoHere,
    personName: "Richard Valleryd ",
    personPos: "Operationell chef",
  },
];
export const overView = [
  {
    title: "Översikt över bostadsmarknaden i Sverige",
    text: "  Sveriges bostadsmarknad är dynamisk och varierad, med allt från moderna höghus i stadskärnan till charmiga äldre byggnader i stadens utkanter. Att förstå marknadens dynamik är nyckeln till att hitta ett hem som passar dina behov och budget.",
  },
  {
    title: "Förståelse för förstahands- och andrahandskontrakt",
    text: " I Sverige skiljer man på förstahands- och andrahandskontrakt. Ett förstahandskontrakt innebär att du hyr direkt från fastighetsägaren, medan ett andrahandskontrakt innebär att du hyr av någon som i sin tur hyr bostaden. Båda har sina för- och nackdelar, beroende på dina personliga omständigheter.",
  },
  {
    title: "Sammanfattning",
    text: "Bostadsmarknaden i Sverige erbjuder många möjligheter, men kräver tålamod och strategi för att navigera framgångsrikt. Genom att förstå olika kontraktstyper, effektivt använda bostadsköer och utforska alternativa sökvägar kan du öka dina chanser att hitta ditt idealiska hem. Kom ihåg att tjänster som Dibz kan vara ett värdefullt verktyg i din bostadssökning.",
  },
];
export const about = [
  {
    id: 1,
    icon: <>{Icons.question}</>,
    title: "Varför startade ni dibz? ",
    text: "Grundarna till dibz kommer alla från mindre städer och fick en chock när bostadsletandet i Stockholm började inför universitetsstudier. Vi möttes av en djungel av bostadsköer och oseriösa tjänster som lovade att hjälpa. När vi hade pluggat klart bestämde vi oss för att göra något åt problemet och skapa en tjänst som ger folket koll på köerna. Du kan läsa mer om dibz resa i DN.",
  },
  {
    id: 2,
    icon: <>{Icons.question}</>,
    title: "Hur jobbar ni med hållbarhet? ",
    text: "Social hållbarhet är själva kärnan av tjänsten: Plattformen säkrar allmän tillgång till information och främjar även inkludering då alla har goda förutsättningar att navigera kömarknaden med dibz. Utöver plattformen har vi analyserat bostadsköerna i ljuset av Agenda 2030 målen och skapat en guide för hållbart marknadsagerande för bostadsköer tillsammans med branschens mest innovativa köer. Den kan läsas här.",
  },
  {
    id: 3,
    icon: <>{Icons.question}</>,
    title: "Vad är er vision?",
    text: "Vi skapar en modern och hållbar marknad för köande och effektiv distribution. Där alla kan maximera sina möjligheter och planera sin framtid med ett par klick. Inte bara inom förstahandskontrakt men också för skolplatser, aktiviteter och andra saker vi svenskar ofta köar för. Vi jobbar kontinuerligt med nya lösningar för att ta Sveriges infrastruktur framåt!",
  },
  {
    id: 4,
    icon: <>{Icons.question}</>,
    title: " Vilka är finansiärerna bakom dibz?",
    text: "dibz var till en början finansierat av grundarna men under hösten 2021 genomfördes en kapitalrunda för att ta in extern finansiering i syfte att expandera. Idag ägs dibz av grundarna tillsammans med investerarna, du kan läsa mer om dibz startup resa i Breakit. Bland investerarna återfinns bland andra Sebastian Knutsson som tidigare grundade King som ligger bakom det populära spelet candycrush.",
  },
];
export const aboutPartnership = [
  {
    id: 1,
    icon: <>{Icons.tick}</>,
    title: "Inkludering och allmän tillgång till information",
    text: "Vi brinner för lättillgängliga digitala system och informations- och kunskapsspridning. I vår drömvärld har alla människor lika förutsättningar för att lyckas.",
  },
  {
    id: 2,
    icon: <>{Icons.tick}</>,
    title: "Vägen framåt går vi tillsammans",
    text: "dibz är ett ungt företag och vi arbetar för att starta en dialog med alla köer som återfinns på vår plattform. Tillsammans kan vi förbättra Sveriges digitala infrastruktur.",
  },
];
export const cityDetailCard = [
  {
    id: 1,
    title: "Ekerö Bostäder,",
    text: " Den största hyresvärden i natursköna Ekerö kommun. Med 9000 hyresrätter arbetar de...",
    image: realastate,
  },
  {
    id: 2,
    title: "Hemvist",
    text: " Hemvist (den 22/2024 januari bytte de namn från Sveafastigheter till Hemvist) äger och...",
    image: groupHouse,
  },
  {
    id: 3,
    title: " Tyresö bostäder",
    text: "Var sjätte tyresöbo är hyresgäst hos TYBO. Några bor i radhus, andra i flerfamiljshus och.. ",
    image: tent,
  },
  {
    id: 4,
    title: " Telge Bostäder",
    text: "Södertäljes största bostadsföretag, sedan 1948 erbjuder Telge AB boende i attraktiva,... ",
    image: keyhouse,
  },
  {
    id: 5,
    title: "Ekerö Bostäder",
    text: "Den största hyresvärden i natursköna Ekerö kommun. Med 9000 hyresrätter arbetar de... ",
    image: gbHouse,
  },
  {
    id: 6,
    title: "Ekerö Bostäder",
    text: "Den största hyresvärden i natursköna Ekerö kommun. Med 9000 hyresrätter arbetar de... ",
    image: redHouse,
  },
];
export const cityQueue = {
  rows: [
    {
      blog_image: cityOne,
      title: "City 1",
      imageTitle: "Stockholm",
      queue: "24 st köer",
    },
    {
      blog_image: cityTwo,
      title: "City 2",
      imageTitle: "Göteborg",
      queue: "7 st köer",
    },
    {
      blog_image: cityThree,
      title: "City 3",
      imageTitle: "Malmö",
      queue: "4 st köer",
    },
  ],
};
export const howWorkData = [
  {
    id: 1,
    text: "Andra inte ditt lösenord via bostadskons hemsida. Anvend det du fått från diz",
  },
  {
    id: 2,
    text: "Vi sköter registrering hos respektive bostadskö som du lägger till visa dibz",
  },
  {
    id: 3,
    text: "dibz fixar regelbunden inloggning åt dig så att du inte tappar din köplats",
  },
];
// export const addQueueData = [
//   {
//     id: 1,
//     stepNo: 1,
//     title: "Kontaktuppgifter",
//     text: "Din grundläggande kontaktinformation",
//     data: <ContactDetailForm />,
//   },
//   {
//     id: 2,
//     stepNo: 2,
//     title: "Boendepreferenser",
//     text: "Vilken typ av boende passar dig?",
//     data: <PreferanceForm />,
//   },
//   {
//     id: 3,
//     stepNo: 3,
//     title: "Nuvarande boende",
//     text: "Vissa köer kräver att du lämnar information om hur du bor idag",
//     data: <CurrentResidentForm />,
//   },
//   {
//     id: 4,
//     stepNo: 4,
//     title: "Inkomst",
//     text: "Vissa köer kräver att du lämnar information om din ekonomi.",
//     data: <IncomeForm />,
//   },
// ];
export const chartSampleData = {
  labels: [
    "jun 2025",
    "jul 2025",
    "aug 2025",
    "sep 2025",
    "okt 2025",
    "nov 2025",
    "dec 2025",
    "jan 2026",
    "fab 2026",
    "mar 2026",
    "apr 2026",
    "may 2026",
  ],
  datasets: [
    // {
    //   label: "Revenue",
    //   data: [30, 50, 40, 60, 70, 55, 80],
    //   borderColor: "rgba(75, 192, 192, 1)",
    //   // backgroundColor: "rgba(75, 192, 192, 0.2)",
    //   background:
    //     " linear-gradient(141.29deg, rgba(42, 110, 244, 0.8) 25.84%, rgba(42, 110, 244, 0.2) 49.07%, rgba(42, 110, 244, 0.1) 82.34%);",
    //   fill: true,
    //   tension: 0.4,
    //   pointBorderWidth: 2,
    // },
    {
      label: "Köpoäng",
      data: [0, 50, 100, 150, 200, 250, 300, 350, 400],
      borderColor: "rgba(42, 110, 244, 0.8)",
      backgroundColor: "rgba(42, 110, 244, 0.2)",
      fill: true,
      tension: 0.4,
      pointBorderWidth: 2,
      borderDash: [10, 8],
    },
  ],
};
// background: linear-gradient(141.29deg, rgba(42, 110, 244, 0.8) 25.84%, rgba(42, 110, 244, 0.2) 49.07%, rgba(42, 110, 244, 0.1) 82.34%);
export const chartCardData = [
  {
    id: 1,
    label: "Dagar med dibz",
    data: "16",
  },
  {
    id: 2,
    label: "Dina områden",
    data: "1",
  },
  {
    id: 3,
    label: "Medlemmar efter dig i kö",
    data: "4763",
  },
];


export const housingQueues = [
  {
    id: 1,
    title: "Nykvarnsbostäder",
    image: visa,
    description:
      "Nykvarnsbostäders ambition är att vara ett attraktivt boendealternativ genom öppenhet...",
  },
  {
    id: 2,
    title: "ByggVesta",
    image: visa,
    description:
      "Hos Byggvesta hittar du moderna, miljövänliga och trivsamma hyresrätter och studentlägenheter i...",
  },
  {
    id: 3,
    title: "Väsbyhem",
    image: visa,
    description:
      "Med visionen 'en värld för alla' bygger Väsbyhems affärsidé på att bygga och förvalta ett variationsrikt...",
  },
  {
    id: 4,
    title: "Armada Fastighets",
    image: visa,
    description:
      "Armada Bostäder AB har ca 1500 lägenheter, de flesta belägna centralt i Åkersberga och vid Åkers Kanal...",
  },
  {
    id: 5,
    title: "Upplands-Brohus",
    image: visa,
    description:
      "Utvecklar hyresrätten till en attraktiv boendeform för alla. För närvarande håller denna ko 5100...",
  },
  {
    id: 6,
    title: "Sollentunahem",
    image: visa,
    description:
      "Utvecklar hyresrätten till en attraktiv boendeform för alla. För närvarande håller denna ko 5100...",
  },
];


export const houseControlPanel = [
  {
    id:1,
    icon: Icons.iconUser,
    label: "Aktiva köer",
    count: 7,
    bgColor:"bgGreen",
    iconColor:"iconGreen",
  },
  { 
    id:2,
    icon: <ArrowsClockwise size={18} />, 
    label: "Bearbetas",
    count: 0,
    bgColor:"bgLightYellow",
    iconColor:"iconLightYellow",
  },
  {
    id:3,
    icon: <Database size={18} />,
    label: "Betalköer",
    count: 0,
    bgColor:"bgBlue",
    iconColor:"iconBlue",
  },
  {
    id:4,
    icon: <WarningDiamond size={18} />,
    label: "Inaktiva köer",
    count: 0,
    bgColor:"bgRed",
    iconColor:"iconRed",
  },
];
