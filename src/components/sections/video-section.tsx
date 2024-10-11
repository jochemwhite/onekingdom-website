"use client";
import React from "react";
import DividerContainer from "../layout/divider-container";
import { IoIosPlay } from "react-icons/io";
import { useModal } from "@/providers/modal-provider";
import Image from "next/image";
// import { useModal } from "../ui/animated-modal";

interface Props {
  href: string;
  bg_img: string;
}

export default function VdeoSection({ href, bg_img }: Props) {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(
      <div className="w-full h-full flex items-center justify-center ">
        <iframe
          className="aspect-video w-full h-full"
          src={href + "&autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  };

  return (
    <DividerContainer>
      <div className="container py-32 z-50 ">
        <Image src={bg_img} alt="Video" fill style={{ objectFit: "cover" }} className="opacity-50" />
        <div className="flex items-center justify-center cursor-pointer " onClick={handleClick}>
          <span className="relative border-2 border-accent rounded-full w-32 h-32 hover:border-highlight transition-all duration-300 ease">
            <IoIosPlay  className="absolute text-9xl hover:text-highlight top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent ml-2 transition-all duration-300 ease" />
          </span>
        </div>
      </div>
    </DividerContainer>
  );
}
