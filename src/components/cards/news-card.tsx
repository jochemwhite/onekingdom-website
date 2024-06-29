import React from "react";
import BasicButton from "../buttons/basic-button";



interface Props {
  date: string;
  title: string;
  description: string;
  href: string;
}

export default function NewsCard({ date, title, description, href}: Props) {
  return (
    <div className="p-4 *:my-4 ">
      <h4
        className={`
            relative list-none flex justify-center items-center bg-[#252525] py-1 min-h-8 w-40            
            after:absolute after:border-transparent after:border-l-[#252525] after:border-solid after:border-t-[32px] after:border-b-0 after:border-l-[12px]  after:left-full
          `}
      >
        {date}
      </h4>

      <h3 className="text-2xl">{title}</h3>
      <p className="text-[18px]">
        {description}
      </p>

      <BasicButton href="#" innerText="Read More" />
    </div>
  );
}
