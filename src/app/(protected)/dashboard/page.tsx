import LogOutButton from "@/components/buttons/logout-button";
import React from "react";

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div>Dashboard</div>

      <LogOutButton />
    </main>
  );
}
