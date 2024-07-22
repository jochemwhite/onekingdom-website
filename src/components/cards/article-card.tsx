"use client";
import React from "react";
import { number } from "zod";
import WordRotate from "../magicui/word-rotate";

interface Props {
  title: string;
  date: string;
  number: number;
}

export default function ArticleCard({ title, date, number }: Props) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className="w-full bg-accent p-5  rounded-md font-blog-title relative h-[127px] hover:bg-[#050505] transition-all"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 className="text-xl mb-2 ">{title}</h3>
      {/* <p className="text-sm text-[#aaa]">{date}</p> */}
      <WordRotate words={["June 22, 2021", "5 comments"]} hover={hover} />
      <span className="block w-[40px] h-[40px] font-medium text-lg tracking-normal text-text-primary bg-primary rounded-full text-center leading-10 -bottom-5 right-0 absolute">
        {number}
      </span>
    </div>
  );
}
