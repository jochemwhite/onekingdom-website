import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="bg-background-primary">{children}</main>
      <Footer />
    </>
  );
}
