"use server";

import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async () => {
  "use server";

  // 1. Create a Supabase client
  const supabase = createClient();
  const origin = headers().get("origin");

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  } else {
    return redirect(origin ?? "/");
  }
};
