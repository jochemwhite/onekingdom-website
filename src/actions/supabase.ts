"use server";

import { auth } from "@/auth";
import { createClient } from "@/lib/supabase/server";
import { Database } from "@/types/supabase";

export async function getUser(): Promise<Database["public"]["Tables"]["users"]["Row"]> {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("users").select("*").single();

  if (error) {
    throw error;
  }

  return data;
}

// TEAM MEMBERS
export async function getTeamMembers(): Promise<Database["public"]["Tables"]["team_members"]["Row"][]> {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("team_members").select("*");
3
  if (error) {
    throw error;
  }

  return data as Database["public"]["Tables"]["team_members"]["Row"][];
}
