import Image from "next/image";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/actions/auth/sign-out";

export default function LogOutButton() {


  return (
    <form action={signOut} className=" ">
      <button className="hover:bg-gray-800 p-8 rounded-xl">sign out</button>
    </form>
  );
}
