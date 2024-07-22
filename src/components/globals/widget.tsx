import React from "react";
import { text } from "stream/consumers";

interface Props {
  text: string;
}

export default function Widget({ text }: Props) {
  return (
    <div
      className={`relative list-none flex justify-center items-center bg-[#252525] py-1 min-h-10 w-full
    before:absolute before:border-b-[#252525] before:border-solid before:border-b-[40px] before:border-l-[12px] before:border-transparent before:right-full  before:top-0 
    after:absolute   after:border-transparent after:border-l-[#252525] after:border-solid after:border-t-[40px] after:border-b-0 after:border-l-[12px]  after:left-full `}
    >
      <span className="">{text}</span>
      <span className="absolute border-[6px] border-transparent border-t-accent border-x-[7px] top-full left-1/2 -ml-[7.5px] " />
    </div>
  );
}
