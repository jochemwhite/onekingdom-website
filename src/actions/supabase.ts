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









// ROLES
export async function getRoles()  {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("role").select("*");

  if (error) {
    throw error;
  }

  
  return data 
}






// Permissions
export async function getPermissions() {
  const session = await auth();
  
  const supabase = createClient(session?.supabaseAccessToken as string);
  
  const { data, error } = await supabase.from("role_permission").select("*").eq("role_id", 1);
  
  if (error) {
    throw error;
  }
  console.log(data)

  return data;
}