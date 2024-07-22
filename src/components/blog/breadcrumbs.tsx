import Link from "next/link";
import React from "react";

interface IData {
  title: string;

}


export default function BreadCrumbs({ title }: IData) {
  return (
    <div className="text-lg flex">
      <Link href="/" className="hover:text-text-accent">
        <p>Home</p>
      </Link>
      <span className="mx-2">/</span>
      <Link href="/roadmap" className="hover:text-text-accent">
        <p>Roadmaps</p>
      </Link>
      <span className="mx-2">/</span>
      <p>{title}</p>
    </div>
  );
}
