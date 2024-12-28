import Image from "next/image";
import React from "react";
import type { MemberProps } from "@/types/global";
import SocialIcon from "../global/social-icon";

interface Props {
  member: MemberProps;
}

export default function TeamMemberCard({ member }: Props) {
  const { name, description, imgUrl, socialMedia } = member;

  return (
    <div className="border-2 border-primary hover:border-highlight  rounded-lg transition-all duration-300 ease">
      <div className="px-[40px] py-[40px] pt-[20px] text-center">
        <div className="w-full  mx-auto mb-[26px] relative h-full aspect-square">
          <Image src={imgUrl} alt={member.name} fill className="w-full h-full object-cover rounded-full" />
        </div>

        <div className="w-full">
          <h3 className="m-0 p-0 text-[22px] font-medium mb-[8px]">{name}</h3>
          <p className="text-[18px]">{description}</p>
        </div>
      </div>
      <div className=" w-full px-[40px]">
        <ul
          className={`relative list-none flex justify-center items-center bg-[#252525] py-1 min-h-10
            before:absolute before:border-b-[#252525] before:border-solid before:border-b-[40px] before:border-l-[12px] before:border-transparent before:right-full  before:top-0 
            after:absolute   after:border-transparent after:border-l-[#252525] after:border-solid after:border-t-[40px] after:border-b-0 after:border-l-[12px]  after:left-full `}
        >
          {socialMedia
            .sort((a, b) => a.value.localeCompare(b.value))
            .map((social) => (
              <li key={social.value} className="mt-[5px] mb-[5px] ml-[8px] hover:text-highlight">
                <a href={social.href} target="_blank" rel="noreferrer" className="flex text-lg justify-center items-center text-center py-[2px]">
                  <SocialIcon value={social.value.toLocaleLowerCase()} />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
