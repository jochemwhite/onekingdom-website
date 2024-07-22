import Link from "next/link";
import React from "react";
import SocialIcon from "./social-icon";

interface ISocialListProps {
  socails: {
    name: string;
    link: string;
  }[];
}

export default function SocialList({ socails }: ISocialListProps) {
  return (
    <ul className="flex items-center [&>li]:px-2 text-white">
      {socails.map((social) => (
        <li key={social.name}>
          <Link href={social.link} target="_blank" className="hover:text-text-accent">
            <SocialIcon value={social.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
