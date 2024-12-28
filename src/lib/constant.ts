import { MemberProps } from "@/types/global";
import { Database } from "@/types/supabase";

export const discord_link = "https://discord.gg/onekingdom";

export const members: MemberProps[] = [
  {
    name: "Ron0x",
    description: "CEO",
    imgUrl: "/img/team/ron0x.png",
    onekingdomStreamer: true,
    staff: true,
    socialMedia: [
      {
        value: "twitch",
        href: "https://twitch.com/ron0x",
      },
    ],
  },
  {
    name: "xPudu",
    description: "One Kingdom Streamer",
    imgUrl: "/img/team/xpudu.jpeg",
    onekingdomStreamer: true,
    staff: true,
    socialMedia: [
      {
        value: "twitch",
        href: "https://twitch.com/xPudu",
      },
    ],
  },
  {
    name: "CoenMetEenC",
    description: "One Kingdom Streamer",
    imgUrl: "/img/team/coenmeteenc.png",
    onekingdomStreamer: true,
    staff: false,
    socialMedia: [
      {
        value: "twitch",
        href: "https://twitch.com/CoenmeteenC",
      },
    ],
  },
  {
    name: "SirDyson",
    description: "One Kingdom Streamer",
    imgUrl: "/img/team/sirdyson.jpg",
    onekingdomStreamer: true,
    staff: true,
    socialMedia: [
      {
        value: "twitch",
        href: "https://www.twitch.tv/SirDyson",
      },
    ],
  },
  {
    name: "MacaRonnieSaus",
    description: "One Kingdom Streamer",
    imgUrl: "/img/team/macaronniesaus.jpg",
    onekingdomStreamer: true,
    staff: false,
    socialMedia: [
      {
        value: "Twitch",
        href: "https://www.twitch.tv/MacaRonnieSaus",
      },
    ],
  },

  // staff

  {
    name: "Jochemwhite",
    description: "Developer",
    imgUrl: "/img/team/ron0x.png",
    onekingdomStreamer: false,
    staff: true,
    socialMedia: [
      {
        value: "Twitch",
        href: "https://www.twitch.tv/Jochemwhite",
      },
    ],
  },
  {
    name: "SirRoki",
    description: "Discord Moderator",
    imgUrl: "/img/team/ron0x.png",
    onekingdomStreamer: false,
    staff: true,
    socialMedia: [
      {
        value: "Twitch",
        href: "https://www.twitch.tv/Jochemwhite",
      },
    ],
  },
  {
    name: "Mjvp94",
    description: "Discord Moderator",
    imgUrl: "/img/team/ron0x.png",
    onekingdomStreamer: false,
    staff: true,
    socialMedia: [
      {
        value: "Twitch",
        href: "https://www.twitch.tv/Jochemwhite",
      },
    ],
  },

  {
    name: "Mivadez",
    description: "Discord Moderator",
    imgUrl: "/img/team/ron0x.png",
    onekingdomStreamer: false,
    staff: true,
    socialMedia: [
      {
        value: "Twitch",
        href: "https://www.twitch.tv/Mivadez",
      },
    ],
  },
];

export const roadmap: Database["public"]["Tables"]["roadmap_blog"]["Row"][] = [
  {
    id: "c66de722-67d4-467f-82a9-9bf183ac936a",
    title: "Macaronnie meet up 2023",
    short_description:
      "Op zaterdag 11 november vond de officiële MacaRonnieSaus meeting plaats! Na bijna 2 jaar streamen was het eindelijk tijd voor deze bijeenkomst.\n" +
      "\n" +
      "De planning was zo goed als af, en voor degenen die het gemist hebben, was er altijd nog de mogelijkheid om zich aan te melden bij de events!",
    content: '[{"children":[{"text":""}],"type":"p","id":"qsaba"}]',
    author: "",
    published: false,
    created_at: "2024-07-19T07:23:29.492336+00:00",
    date: "2023-11-10",
    images: ["https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/IMG_5569.jpg"],
    slug: "macaronnie-meet-up",
    location: null,
  },
  {
    id: "fec2e72f-364e-490f-aaa9-9c1ce4f153cb",
    title: "Dierenpark wildlands",
    short_description:
      "Op zaterdag 9 september zijn we op avontuur gegaan in Wildlands Emmen! Het was tijd om onze wilde kant te laten zien en te genieten van een dag vol dierbare herinneringen (letterlijk!) en een beestachtig goede tijd!\n" +
      "\n" +
      "We verzamelden op 9 september tussen 10:30 en 11:00 uur (deze tijd kon gereserveerd worden bij aankoop van het kaartje); om 11:00 uur gingen we het park in!",
    content: null,
    author: "",
    published: false,
    created_at: "2024-07-19T07:47:10.922754+00:00",
    date: "2023-09-08",
    images: ["https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/olifant.jpg"],
    slug: null,
    location: null,
  },
  {
    id: "f1342023-63bd-445c-9181-eb64bfc780a0",
    title: "Efteling 2022",
    short_description:
      "\n" +
      "We hebben op 10 juli een kleine planning gemaakt om elkaar in de Efteling te ontmoeten:\n" +
      "\n" +
      "Om 10:00 uur verzamelden we binnen het park aan de rechterkant van de ingang van de Efteling en om 10:30 uur begonnen we te lopen. Een van de aanwezige streamers kon je nummer vragen voor de groepsapp voor die dag. Dit was natuurlijk vrijblijvend voor iedereen.\n" +
      "Om 13:00 uur verzamelden we bij het Fabula Restaurant om even gezellig samen te komen en te lunchen. Het was niet verplicht om te komen, maar het was wel leuk als je erbij was.\n",
    content: null,
    author: "",
    published: false,
    created_at: "2024-07-19T08:08:01.918341+00:00",
    date: "2022-11-25",
    images: [
      "https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/groepsfoto.png",
      "https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/foto-2.png",
      "https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/VD_5619.jpg",
    ],
    slug: null,
    location: null,
  },
  {
    id: "81b8632e-d7a5-4a3d-952b-2a656d061163",
    title: "Teslan 2024",
    short_description:
      "\n" +
      "Van 5 tot 7 januari 2024 zijn we met One Kingdom naar Eindhoven geweest voor TesLAN: een LAN-party in het Studenten Sportcentrum van de TU Eindhoven.\n" +
      "\n" +
      "Het hele weekend konden we de spellen spelen die we wilden, maar voor de competitief ingestelde deelnemers waren er verschillende toernooien. We hebben ervoor gezorgd dat we als groep bij elkaar zaten, zodat een partygame snel opgezet kon worden!",
    content:
      '[{"children":[{"text":"Van 5 tot 7 januari 2024 zijn we met One Kingdom naar Eindhoven geweest voor TesLAN: een LAN-party in het Studenten Sportcentrum van de TU Eindhoven."}],"type":"p","id":"ibq4y"},{"children":[{"text":"Het hele weekend konden we de spellen spelen die we wilden, maar voor de competitief ingestelde deelnemers waren er verschillende toernooien. We hebben ervoor gezorgd dat we als groep bij elkaar zaten, zodat een partygame snel opgezet kon worden!"}],"type":"p","id":"rl9s3"}]',
    author: "xPudu",
    published: true,
    created_at: "2024-07-17T07:11:08.23324+00:00",
    date: "2024-01-04",
    images: [
      "https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/Teun-TESLAN-17.webp",
      "https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/Thor-TesLAN-7-83.webp",
      "https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/Thor-TesLAN-7-84.webp",
    ],
    slug: "teslan-2024",
    location: null,
  },
  {
    id: "6ba34bfe-2982-4969-9590-de2901e658f4",
    title: "The Game Tastings 2023",
    short_description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    content: `[{"children":[{"text":"Op zaterdag 2 december stonden Ron0x en xPudu om klokslag 11 uur 's ochtends klaar voor de allereerste awardshow van The Game Tastings bij het Grafisch Lyceum Rotterdam."}],"type":"p","id":"81lj0"},{"children":[{"text":"Na het persmoment waarin de ontwikkelaars zichzelf en hun games voorstelden, werden de deuren geopend voor het bredere publiek. Ongeveer 40 deelnemers waren uitgenodigd om hun lokale games te presenteren. Het genre van de games was zeer divers, variërend van "},{"text":"Twin Stick Tennis","italic":true},{"text":", waarbij je de speler en het racket afzonderlijk bestuurt, tot "},{"text":"News Tower","italic":true},{"text":", een tycoon-game waarin je je eigen nieuwstoren beheert."}],"type":"p","id":"2q9g7"},{"children":[{"text":"Ter afsluiting was er een awardshow voor de drie Fan Favourites van 2023!\\r\\nDeze is uiteindelijk gewonnen door Gotchaball. Een spannende multiplayer waarin je zoveel mogelijk totems moet verzamelen door muntjes te droppen. Kijk uit dat de ander je echter niet te pakken krijgt!"}],"type":"p","id":"k0gah"},{"children":[{"text":"Speciale vermeldingen van Ron0x en xPudu."}],"type":"p","id":"qwske"},{"children":[{"text":"Moontales: Een cosy, atmosferische feelgood waarin je speelt als Fhinn, een vis op reis naar de maan om zich te herenigen met zijn geliefde. Niet alleen is de artstyle absoluut fantastisch, ook de muziek is mooi en ontspannend. Zeker een aanrader!"}],"type":"p","id":"n79zh","indent":1,"listStyleType":"disc"},{"children":[{"text":"Footsy: voetballen in het huis van je grootouders. Raar? Welnee, super leuk juist! In Footsy speel je korte matches tegen elkaar in steeds wisselende kamers. Elke ruimte brengt unieke uitdagingen met zich mee. Tactiek? Wel handig. Chaos? Dat sowieso!"}],"type":"p","id":"hc6p6","indent":1,"listStyleType":"disc","listStart":2},{"children":[{"text":"Op de foto op de achtergrond: de game dev van "},{"text":"Gotchaball","italic":true},{"text":".\\r\\nVoor: Ron0x, de game dev van "},{"text":"Footsy ","italic":true},{"text":"en xPudu aan het strijden om de totems."}],"type":"p","id":"jp5s1"},{"children":[{"text":""}],"type":"img","url":"http://localhost:3000/_next/image?url=https%3A%2F%2Fyonhjhpjodqwntsqdecx.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fonekingdom-public%2Froadmaps%2F2.png&w=3840&q=75","width":657,"id":"2eu2k"},{"children":[{"text":""}],"type":"p","id":"95g26"}]`,
    author: "xPudu",
    published: true,
    created_at: "2024-07-19T07:50:06.711242+00:00",
    date: "2023-12-02",
    images: [
      "https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/2.png",
      "https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/20231202_130601.jpg",
      "https://yonhjhpjodqwntsqdecx.supabase.co/storage/v1/object/public/onekingdom-public/roadmaps/IMG-20231202-WA0009.jpg",
    ],
    slug: "the-game-tastings",
    location: null,
  },
];

export const socialMedia = [
  {
    platform: "instagram",
    href: "https://www.instagram.com/OneKingdom_IG/",
  },
  {
    platform: "discord",
    href: discord_link,
  },
  {
    platform: "tiktok",
    href: "https://www.tiktok.com/@onekingdomtt",
  },
  {
    platform: "youtube",
    href: "https://www.youtube.com/@OneKingdomYT",
  },
  {
    platform: "twitch",
    href: "https://www.twitch.tv/onekingdomtv/",
  },
];
