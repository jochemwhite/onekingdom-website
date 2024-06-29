import { Event, MemberProps } from "@/types/global";

export const members: MemberProps[] = [
  {
    name: "Ron0x",
    description: "founder",
    img: {
      src: "/team/ron0x.jpg",
      alt: "Ron0x",
    },
    socialMedia: [
      { value: "twitter", href: "https://twitter.com/ron0x" },
      { value: "discord", href: "https://discord.gg/ron0x" },
    ],
    patherdstreamer: true,
    staff: true,
  },
  {
    name: "xPudu",
    description: "Patherd Streamer",
    img: {
      src: "/team/jesse.jpg",
      alt: "Jesse",
    },
    socialMedia: [
      { value: "twitter", href: "https://twitter.com/jesse" },
      { value: "discord", href: "https://discord.gg/jesse" },
    ],
    patherdstreamer: true,
    staff: false,
  },
  {
    name: "SirDyson",
    description: "Event Manager",
    img: {
      src: "/team/jenny.jpg",
      alt: "Jenny",
    },
    socialMedia: [
      { value: "twitter", href: "https://twitter.com/jenny" },
      { value: "discord", href: "https://discord.gg/jenny" },
    ],
    patherdstreamer: true,
    staff: true,
  },
  {
    name: "Mo_coww",
    description: "Patherd Streamer",
    img: {
      src: "/team/ninja.jpg",
      alt: "Ninja",
    },
    socialMedia: [
      { value: "twitter", href: "https://twitter.com/ninja" },
      { value: "discord", href: "https://discord.gg/ninja" },
    ],
    patherdstreamer: true,
    staff: false,
  },
  {
    name: "MacaRonnieSaus",
    description: "Streamer",
    img: {
      src: "/team/shroud.jpg",
      alt: "MacaRonnieSaus",
    },
    socialMedia: [
      { value: "twitter", href: "https://twitter.com/shroud" },
      { value: "discord", href: "https://discord.gg/shroud" },
    ],
    patherdstreamer: true,
    staff: false,
  },
  {
    name: "HuisBaasBob",
    description: "Discord Moderator",
    img: {
      src: "/team/drdisrespect.jpg",
      alt: "DrDisrespect",
    },
    socialMedia: [
      { value: "twitter", href: "https://twitter.com/drdisrespect" },
      { value: "discord", href: "https://discord.gg/drdisrespect" },
    ],
    patherdstreamer: false,
    staff: true,
  },
  {
    name: "Mivadez",
    description: "Discord Moderator",
    img: {
      src: "/team/timthetatman.jpg",
      alt: "TimTheTatman",
    },
    socialMedia: [
      { value: "twitter", href: "https://twitter.com/timthetatman" },
      { value: "discord", href: "https://discord.gg/timthetatman" },
    ],
    patherdstreamer: false,
    staff: true,
  },
  {
    name: "Sir Roki",
    description: "Discord Moderator",
    img: {
      src: "/team/pokimane.jpg",
      alt: "Pokimane",
    },
    socialMedia: [
      { value: "twitter", href: "https://twitter.com/pokimane" },
      { value: "discord", href: "https://discord.gg/pokimane" },
    ],
    patherdstreamer: false,
    staff: true,
  },
];

export const events: Event[] = [
  {
    author: "Jochemwhite",
    description: "This is the description of the event",
    eventDate: "2022-01-01",
    Images: [],
    Location: "Location",
    published: true,
    shortDescription: "Short description",
    title: "Event 1",
  },
  {
    author: "Ron0x",
    description: "This is the description of the event",
    eventDate: "2022-01-01",
    Images: [],
    Location: "Location",
    published: true,
    shortDescription: "Short description",
    title: "Event 1",
  },
  {
    author: "xpudu",
    description: "This is the description of the event",
    eventDate: "2022-01-01",
    Images: [],
    Location: "Location",
    published: true,
    shortDescription: "Short description",
    title: "Event 1",
  },
];
