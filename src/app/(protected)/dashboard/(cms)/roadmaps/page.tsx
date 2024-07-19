import { getTeamMembers } from "@/actions/supabase";
import { TeamMemberTable } from "@/components/tables/team-members/team-members-table";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { RoadMapTable } from "@/components/tables/roadmaps/roadmap-table";
import { auth } from "@/auth";
import { createClient } from "@/lib/supabase/server";
export default async function TeamPage() {
  const session = await auth();
  const supabase = createClient(session?.supabaseAccessToken as string);

  const {data, error} = await supabase.from("roadmap_blog").select("*").order("date", { ascending: false });
  

  if (error) {
    console.error(error);
    throw error;
  }

  

  return (
    <div>
      <div className="flex items-center justify-between space-y-2 border rounded p-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">RoadMaps</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/dashboard/roadmaps/edit">
            <Button variant="outline">Add Roadmap</Button>
          </Link>
        </div>
      </div>
      <RoadMapTable roadmaps={data} />
    </div>
  );
}
