import EventTimeline from "@/components/event-time-line/EventTimeline";
import Title from "@/components/global/title";
import DividerContainer from "@/components/layout/divider-container";
import AboutUs from "@/components/sections/about-us";
import Hero from "@/components/sections/hero";
import TeamSection from "@/components/sections/team-section";
import { members, roadmap } from "@/lib/constant";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
}



export default async function Home() {

  return (
    <main className="min-h-screen">
      {/* hero */}
      <section>
        <Hero />
      </section>

      {/* about us */}
      <section className="">
        <AboutUs />
      </section>

      {/* Partnerd streamer list */}

      <section>
        <TeamSection team="streamers" title="One Kingdom Streamers" />
      </section>

      {/* Events */}
      <section className="relative bg-[#0A0A0A] my-16">
        <DividerContainer>
          <div className="container py-32">
            <div className="mb-20">
            <Title title="One Kingdom Roadmap" alignment="center" />
          </div>

            <EventTimeline events={roadmap} />
          </div>
        </DividerContainer>
      </section>

      <section>
        <TeamSection team="staff" title="Staff" />
      </section>
    </main>
  );
}
