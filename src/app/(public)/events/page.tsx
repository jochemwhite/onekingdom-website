import Banner from "@/components/global/Banner";
import React from "react";
import { roadmap } from "@/lib/constant";
import EventTimelineCard from "@/components/event-time-line/EventTimelineCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: 'events happening in the OneKingdom community',
}


export default function Page() {
  return (
    <div>
      <Banner bg_image="/img/events/banner.png" />
      <section className="container space-y-12 ">
        {roadmap.map((event, index) => (
          <div key={index}>
            <EventTimelineCard event={event} />
          </div>
        ))}
      </section>
    </div>
  );
}
