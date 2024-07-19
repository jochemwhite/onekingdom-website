import React from "react";
import TeamMemberCard from "../cards/team-member-card";
import { auth } from "@/auth";
import { createClient } from "@/lib/supabase/server";
import { MemberProps } from "@/types/global";

interface TeamGridProps {
  title: string;
  team: "streamers" | "staff" | "all";
  members: MemberProps[];
}

export default async function TeamGrid({ title, team, members }: TeamGridProps) {



  return (
    <div className="flex flex-wrap justify-center ">
      {members.map((member, index) => {
        if (team === "all" || (team === "streamers" && member.patherdstreamer) || (team === "staff" && !member.patherdstreamer)) {
          return (
            <div className="w-full md:w-1/2 lg:w-1/3 p-4 " key={index}>
              <TeamMemberCard member={member} />
            </div>
          );
        }
      })}
    </div>
  );
}
