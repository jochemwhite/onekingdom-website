import { discord_link } from "@/lib/constant";
import { YouTubeBackground } from "../YouTubeBackground";
import StyledButton from "../buttons/styled-button";

export default function Hero() {
  return (
    <div className="neoh_fn_hero h-screen bg-black flex justify-center items-center font-primary">
      <YouTubeBackground videoId="dTsOXQrXbe8">
        <div className="flex flex-col items-center z-30">
          <h4 className="text-4xl md:text-7xl">Welcome To</h4>
          <h1 className="text-6xl md:text-9xl">One Kingdom</h1>

          <div className="w-full flex justify-center mt-8">
            <StyledButton href={discord_link} innerText="Join Discord" icon="discord" openNewTab={true} />
          </div>
        </div>
      </YouTubeBackground>
    </div>
  );
}
