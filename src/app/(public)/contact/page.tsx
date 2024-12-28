import { ContactForm } from "@/components/forms/contact-form";
import Banner from "@/components/global/Banner";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Contact"
}


export default function ContactPage() {
  return (
    <main>
      <Banner />

      <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="h-96 w-full relative">
          <Image src="/img/logo.png" alt="Contact" fill style={{ objectFit: "contain" }} />
        </div>

        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
