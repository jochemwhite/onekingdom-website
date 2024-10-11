import React from "react";
import Title from "../global/title";
import TeamGrid from "../team-grind";
import { members } from "@/lib/constant";
import { MemberProps } from "@/types/global";

interface TeamSectionProps {
  team: "streamers" | "staff" | "all";
  title: string;

}

export default function TeamSection({ team, title }: TeamSectionProps) {
  // console.log(members);


  return (
    <div className="container">
      <div className="mb-20">
        <Title title={title} />
      </div>

      <TeamGrid team={team} />
    </div>
  );
}
