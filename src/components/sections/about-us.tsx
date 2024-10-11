import React from "react";
import DiscordWidget from "../widgets/discord-widget";
import Title from "../global/title";
import StyledButton from "../buttons/styled-button";
import { discord_link } from "@/lib/constant";

export default function AboutUs() {
  return (
    <div className="container flex flex-col-reverse lg:flex-row-reverse gap-4 lg:items-center justify-center my-16 font-secondary text-lg ">
      <div className="hidden md:block">
        <DiscordWidget server_id="706492500096974900" />
      </div>

      <div>
        <div className="w-fit">
          <Title title="One Kingdom" />
        </div>

        <p className="my-8">
          One Kingdom is a community of gamers, streamers, and content creators. We are a group of like-minded people that share a passion for gaming,
          streaming, and creating content. We are a community that is focused on helping each other grow and succeed.
        </p>

        <StyledButton href={discord_link} innerText="Discord" icon="discord" openNewTab={true} />
      </div>
    </div>
  );
}
