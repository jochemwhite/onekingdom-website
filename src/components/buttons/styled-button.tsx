"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import SocialIcon from "@/components/global/social-icon";

interface BasicButtonProps {
  href: string;
  innerText: string;
  openNewTab?: boolean;
  icon?: string;
}

export default function StyledButton({ href, innerText, openNewTab, icon }: BasicButtonProps) {
  const [isHover, setIsHover] = useState(false);

  const toggleHover = (value: boolean) => () => {
    setIsHover(value);
  };

  return (
    <Link
      href={href}
      target={openNewTab ? "_blank" : ""}
      className={cn(
        "flex items-center transition justify-between w-fit max-w-full no-underline text-base uppercase border-primary border-2 rounded-md leading-[46px] px-5 relative text-center tracking-wide *:mx-2",
        {
          "border-highlight over:text-white": isHover,
        }
      )}
      onMouseEnter={toggleHover(true)}
      onMouseLeave={toggleHover(false)}
      rel="noreferrer"
    >
      {icon && (
        <span className="flex items-center">
          <SocialIcon value={icon} size={25} />
          <span
            className={cn("block relative w-[2px] h-8 ml-5 bg-primary", {
              "after:bg-highlight after-w-[2px] after:h-8 after:block after:animate-lineFromTopToBottom ": isHover,
              "after:bg-highlight after-w-[2px] after:h-8 after:hidden after:animate-lineFrombottomToBottomEnd": !isHover,
            })}
          />
        </span>
      )}
      <span className="text font-sans">
        {innerText}
      </span>
    </Link>
  );
}
