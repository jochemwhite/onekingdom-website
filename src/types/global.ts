export enum Socialmedia {
  Twitter = "twitter",
  Instagram = "instagram",
  YouTube = "youtube",
  Twitch = "twitch",
  TikTok = "tiktok",
  Facebook = "facebook",
  Discord = "discord",
}


export interface MemberProps {
  name: string;
  description: string;
  imgUrl: string
  socialMedia: { value: string; href: string }[];
  onekingdomStreamer: boolean;
  staff: boolean;
}

export interface Image {
  src: string;
  alt: string;
}


export interface Event {
  title: string;
  eventDate: string;
  location: string;
  description: string;
  shortDescription: string;
  images: Image[];
  published: boolean;
  author: string;
}

export interface Link {
  name: string;
  href: string;
}