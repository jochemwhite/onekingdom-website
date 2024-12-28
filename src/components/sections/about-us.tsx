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
          One Kingdom is a thriving community of gamers, streamers, and content creators built on passion, creativity, and connection. We support each
          other in growing and succeeding while enjoying the journey together. Combining professionalism with a gezellig atmosphere, we create a space
          where collaboration and friendships flourish. Whether through gaming, streaming, or creating, One Kingdom is where shared goals and
          memorable moments come together.
        </p>

        <StyledButton href={discord_link} innerText="Discord" icon="discord" openNewTab={true} />
      </div>
    </div>
  );
}
