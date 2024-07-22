import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialList from "../globals/social-list";

interface IProps {
  img: string;
  author: string;
  bio: string;
  socials: {
    name: string;
    link: string;
  }[];
}

export default function AuthorCard({ img, author, bio, socials }: IProps) {
  return (
    <div className="p-8 flex items-center bg-[#252525] rounded-lg">
      <div className="min-w-[180px] h-[180px] relative rounded-lg overflow-hidden flex-initial mr-10">
        <Image
          src={img}
          alt={author}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="ml-5 flex-initial">
        <h3 className="text-2xl font-medium ">{author}</h3>
        <p className="text-lg my-4">{bio}</p>
        <div>
          <SocialList socails={socials} />
        </div>
      </div>
    </div>
  );
}
