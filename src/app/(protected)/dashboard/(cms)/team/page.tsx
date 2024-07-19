import { getTeamMembers } from "@/actions/supabase";
import { TeamMemberTable } from "@/components/tables/team-members/team-members-table";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div>
      <div className="flex items-center justify-between space-y-2 border rounded p-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Team Members</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/dashboard/team/edit">
            <Button variant="outline">Add Team Member</Button>
          </Link>
        </div>
      </div>
      <TeamMemberTable teamMembers={teamMembers} />
    </div>
  );
}
