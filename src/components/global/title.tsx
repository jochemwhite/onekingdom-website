import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title: string;
  alignment?: "left" | "center" | "right";
}

export default function Title({ title, alignment="center" }: Props) {
  return (
    <div className={cn("w-full flex flex-col",{
      "text-start": alignment === "left",
      "items-center": alignment === "center",
      "items-end": alignment === "right",
    })}>
      <h3 className="text-6xl mb-[6px] font-primary  ">{title}</h3>
      <div className="relative w-36 after:absolute after:w-1 after:h-[10px] after:left-1/2 after:-ml-[2px] after:bg-[#666] after:rounded-[10px] ">
        <span className={`w-36 block h-[2px] bg-[#666] absolute top-1
            after:left-1/2 after:ml-3 after:w-[2px] after:bg-[#666] after:absolute after:z-10 after:-mt-[3px] after:h-[6px] after:top-1/2 
            before:right-1/2 before:mr-3 before:w-[2px] before:bg-[#666] before:absolute before:z-10 before:-mt-[3px] before:h-[6px] before:top-1/2 
          `} />
      </div>
    </div>
  );
}
