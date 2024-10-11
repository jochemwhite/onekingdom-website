import React from "react";
import { MemberProps } from "@/types/global";
import TeamMemberCard from "./cards/team-member-card";
import { members } from "@/lib/constant";

interface TeamGridProps {
  team: "streamers" | "staff" | "all";

}

export default async function TeamGrid({ team }: TeamGridProps) {
  return (
    <div className="flex flex-wrap justify-center ">
      {members.map((member, index) => {
        if (team === "all" || (team === "streamers" && member.onekingdomStreamer) || (team === "staff" && !member.onekingdomStreamer)) {
          return (
            <div className="w-full md:w-1/2 lg:w-1/3 p-4 " key={index}>
              <TeamMemberCard member={member}  />
            </div>
          );
        }
      })}
    </div>
  );
}
