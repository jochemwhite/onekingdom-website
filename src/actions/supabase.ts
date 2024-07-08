"use server";

import { auth } from "@/auth";
import { createClient } from "@/lib/supabase/server";
import { Users, roles } from "@/types/database";
import { Database } from "@/types/supabase";

export async function getUser() {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("userstoroles").select("users(*), roles(*)")

  if (error) {
    throw error;
  }

  


  return data
}

// TEAM MEMBERS
export async function getTeamMembers(): Promise<Database["public"]["Tables"]["team_members"]["Row"][]> {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("team_members").select("*");
  3;
  if (error) {
    throw error;
  }

  return data as Database["public"]["Tables"]["team_members"]["Row"][];
}

// ROLES
export async function getRoles() {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  try {
    const { data, error } = await supabase.from("rolepermissions").select("*, roles(name), permissions(name)");

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching roles and permissions:", error);
    return null;
  }

  return;
}

// Permissions
export async function getPermissions() {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("permissions").select("*");

  if (error) {
    throw error;
  }
  // console.log(data);

  return data;
}

// create role
export async function createRole(role: roles) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data: roleRes, error: roleError } = await supabase.from("roles").insert([{ id: role.role_id, name: role.role_name }]);

  if (roleError) {
    throw roleError;
  }

  // add the role to the rolepermissions table
  const rolePermissionsData = role.permissions.map((permission) => ({
    role_id: role.role_id,
    permission_id: permission.permission_id,
  }));

  const { data: rolePermissionsRes, error: rolePermissionsError } = await supabase.from("rolepermissions").insert(rolePermissionsData);

  // return data;
}

// delete role
export async function deleteRole(role_id: string) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);
  // remove all the rows from the rolepermissions table
  const { data: rolePermissionsRes, error: rolePermissionsError } = await supabase.from("rolepermissions").delete().eq("role_id", role_id);


  if (rolePermissionsError) {
    throw rolePermissionsError;
  }
  const { data, error } = await supabase.from("roles").delete().eq("id", role_id);

  if (error) {
    throw error;
  }

  return data;
}


// get all roles
export async function getAllRoles() {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("roles").select("*");

  if (error) {
    throw error;
  }

  return data;
}