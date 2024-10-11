import Link from "next/link";
import React from "react";
import SocialIcon from "./social-icon";
import { socialMedia } from "@/lib/constant";




export default function SocialList() {
  return (
    <ul className="flex items-center [&>li]:px-2 text-white">
      {socialMedia.map((social) => (
        <li key={social.platform}>
          <Link href={social.href} target="_blank" className="hover:text-highlight" aria-label={social.platform + " link"}>
            <SocialIcon value={social.platform} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
