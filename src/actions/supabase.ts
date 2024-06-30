"use server";

import { auth } from "@/auth";
import { createClient } from "@/lib/supabase/server";
import { Database } from "@/types/supabase";

export async function getUser(): Promise<Database["public"]["Tables"]["users"]["Row"] > {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("users").select("*").single();

  if (error) {
    throw error;
  }

  return data;
}
