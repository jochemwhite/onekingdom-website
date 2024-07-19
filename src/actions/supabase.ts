"use server";

import { auth } from "@/auth";
import { createClient } from "@/lib/supabase/server";
import { Users, roles } from "@/types/database";
import { MemberProps } from "@/types/global";
import { Database } from "@/types/supabase";

export async function getUser() {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("user_roles").select("users(*), roles(*)");

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

  if (error) {
    console.error("Error fetching team members:", error);
    throw error;
  }

  return data as Database["public"]["Tables"]["team_members"]["Row"][];
}

// ROLES
export async function getRoles() {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  try {
    const { data, error } = await supabase.from("role_permissions").select("*, roles(name), permissions(name)");

    if (error) {
      throw error;
    }

    console.log("data", data);

    return data;
  } catch (error) {
    console.error("Error fetching roles and permissions:", error);
    return null;
  }
}
// get role by id
export async function getRoleById(role_id: string) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("role_permissions").select("*, roles(name), permissions(name)").eq("role_id", role_id);

  if (error) {
    throw error;
  }

  const rolesMap = new Map();

  data.forEach((item) => {
    const { role_id, roles, permission_id, permissions } = item;

    if (!rolesMap.has(role_id)) {
      rolesMap.set(role_id, {
        role_id: role_id,
        role_name: roles!.name,
        permissions: [],
      });
    }
    rolesMap.get(role_id).permissions.push({
      permission_id: permission_id,
      permission_name: permissions!.name,
    });
  });

  const result: roles = Array.from(rolesMap.values())[0];

  return result;
}

// Permissions
export async function getPermissions() {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("permissions").select("*");

  if (error) {
    throw error;
  }

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

  const { data: rolePermissionsRes, error: rolePermissionsError } = await supabase.from("role_permissions").insert(rolePermissionsData);

  // return data;
}

// update role
export async function updateRole(role: roles) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  // remove all the rows from the rolepermissions table
  const {
    data: rolePermissionsRes,
    error: rolePermissionsError,
    status,
    statusText,
  } = await supabase.from("role_permissions").delete().eq("role_id", role.role_id);

  if (rolePermissionsError) {
    console.error("rolePermissionsError", rolePermissionsError);
    throw rolePermissionsError;
  }

  // add the role to the rolepermissions table
  const rolePermissionsData = role.permissions.map((permission) => ({
    role_id: role.role_id,
    permission_id: permission.permission_id,
  }));

  const { data: rolePermissionsRes2, error: rolePermissionsError2 } = await supabase.from("role_permissions").insert(rolePermissionsData);

  if (rolePermissionsError2) {
    console.error("rolePermissionsError2", rolePermissionsError2);
    throw rolePermissionsError2;
  }

  console.log("rolePermissionsRes2", rolePermissionsRes2);
}

// delete role
export async function deleteRole(role_id: string) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);
  // remove all the rows from the rolepermissions table
  const { data: rolePermissionsRes, error: rolePermissionsError } = await supabase.from("role_permissions").delete().eq("role_id", role_id);

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

// fetch member based of member_id
export async function getTeamMemberById(member_id: string) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("team_members").select("*, socialMedia(*)").eq("id", member_id).single();

  if (error) {
    throw error;
  }

  return data;
}

// create team member
export async function createTeamMember(member: MemberProps) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  // remove the socialMedia key from the object
  const { socialMedia, ...memberData } = member;

  const { data, error } = await supabase.from("team_members").insert([memberData]).select("id").single();

  if (error) {
    if (error.code === "23505") {
      throw new Error(`Member ${member.name} already exists`);
    }
    throw error;
  }

  // add socails
  const socialMediaData = member.socialMedia.map((social) => ({
    member_id: data.id,
    value: social.value,
    href: social.href,
  }));

  const { data: socialMediaRes, error: socialMediaError } = await supabase.from("socialMedia").insert(socialMediaData);

  if (socialMediaError) {
    console.log("socialMediaError", socialMediaError);
    throw socialMediaError;
  }

  return data;
}

// update team member
export async function updateTeamMember(member: MemberProps, member_id: string) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  // remove the socialMedia key from the object
  const { socialMedia, ...memberData } = member;

  const { data, error } = await supabase.from("team_members").update(memberData).eq("id", member_id);

  if (error) {
    throw error;
  }

  // remove all the social media
  const { data: socialMediaRes, error: socialMediaError } = await supabase.from("socialMedia").delete().eq("member_id", member_id);

  if (socialMediaError) {
    throw socialMediaError;
  }

  // add socails
  const socialMediaData = member.socialMedia.map((social) => ({
    member_id: member_id,
    value: social.value,
    href: social.href,
  }));

  const { data: socialMediaRes2, error: socialMediaError2 } = await supabase.from("socialMedia").insert(socialMediaData);

  return data;
}

// roadmaps
export async function getRoadmaps() {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("roadmap_blog").select("*");

  if (error) {
    throw error;
  }

  return data;
}

// get roadmap by id
export async function getRoadmapById(roadmap_id: string) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("roadmap_blog").select("*").eq("id", roadmap_id).single();

  if (error) {
    throw error;
  }

  return data;
}


export async function createRoadmap(roadmap: Database["public"]["Tables"]["roadmap_blog"]["Insert"]) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("roadmap_blog").insert(roadmap).select("id").single();

  if (error) {
    throw error;
  }

  return data;
}


// update roadmap
export async function updateRoadmap(roadmap: Database["public"]["Tables"]["roadmap_blog"]["Update"], roadmap_id: string) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("roadmap_blog").update(roadmap).eq("id", roadmap_id);

  if (error) {
    throw error;
  }

  return data;
}