import type { Database } from "./supabase";

// schemas
export type PublicSchema = Database['public']['Tables']

// tables

export type TeamMemberTable = PublicSchema['team_members']
export type socialsTable = PublicSchema['socials']
export type usersTable = PublicSchema['users']
