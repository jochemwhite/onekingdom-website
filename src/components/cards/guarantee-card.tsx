"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface GuaranteeCardProps {
  title: string;
  description: string;
  // Icon: IconType
}


export default function GuaranteeCard({ title, description,  }: GuaranteeCardProps) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className={cn(
        "relative border-2 border-accent text-white p-6 rounded-lg overflow-hidden aspect-square w-80 flex justify-center items-center hover:border-highlight transition-all duration-300 ease"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Neon border effect */}

      {/* Top green accent */}
      <div
        className={cn(
          "absolute transition-all duration-300 ease top-0 left-1/2 transform -translate-x-1/2 bg-accent w-36 h-3 before:absolute before:transition-all before:duration-300 before:ease  before:border-solid before:border-transparent before:top-0 before:border-t-0 before:border-r-[12px] before:border-b-[12px] before:border-l-0 before:border-r-accent  before:right-full | after:content-[''] after:absolute after:w-0 after:h-0 after:border-solid after:border-transparent after:transition-all after:duration-300 after:ease after:top-0 after:border-t-[12px] after:border-r-[12px] after:border-b-0 after:border-l-0 after:border-t-[#252525] after:left-full",
          {
            "bg-highlight before:border-r-highlight after:border-t-highlight": hover,
          }
        )}
      />

      <div className="relative z-10 flex flex-col items-center text-center space-y-4 justify-center">
        <div className="p-3 bg-zinc-800 rounded-full">
          <FaLock className="w-6 h-6 text-zinc-400" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
// before:transition-all
// after:transition-all
