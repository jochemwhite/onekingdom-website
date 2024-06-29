import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="neoh_fn_hero h-screen bg-slate-600 flex justify-center items-center font-title">
      <div className="flex flex-col items-center z-30">
        <h4 className="text-4xl   md:text-7xl">Welcome To</h4>
        <h1 className="text-6xl md:text-9xl">One Kingdom</h1>
      </div>
      <VideoBackround url="https://appwrite.amrio.nl/v1/storage/buckets/65c825ce8e79d2939e99/files/65c832f9bc27b7fd47e9/view?project=658fab9280f434656e3b&mode=admin" />
    </div>
  );
}

const VideoBackround = ({ url }: { url: string }) => {
  return (
    <video playsInline={true} autoPlay={true} muted={true} loop={true} className="absolute h-full w-full object-cover">
      <source src={url} type="video/mp4" />
    </video>
  );
};
