import type { Database } from "./supabase";

// schemas
export type PublicSchema = Database["public"]["Tables"];

// tables

export type TeamMemberTable = PublicSchema["team_members"];
export type RoleTable = PublicSchema["roles"];
export type socialsTable = PublicSchema["socials"];
export type usersTable = PublicSchema["users"];

export type roles = {
  role_name: string;
  role_id: string;
  permissions: {
    permission_id: string;
    permission_name: string;
  }[];
};

export type Users = {
  
  roles: RoleTable["Row"][];
} & usersTable["Row"];
