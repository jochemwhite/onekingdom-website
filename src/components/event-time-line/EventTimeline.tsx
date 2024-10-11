"use client";
import Divider from "@/components/svg/Divider.svg";
import { useState } from "react";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EventTimelineCard from "./EventTimelineCard";
import EventTimelineNav from "./EventTimelineNav";
import { Event } from "@/types/global";
import { Database } from "@/types/supabase";

interface Props {
  events: Database["public"]["Tables"]["roadmap_blog"]["Row"][];
}

export default function EventTimeline({ events }: Props) {
  const [active, setActive] = useState(1);

  return (
    <div className="relative ">
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(x) => setActive(x.activeIndex + 1)}
          className="w-full"
          modules={[Controller]}
        >
          <EventTimelineNav events={events} active={active} />
          {events &&
            events.map((event, index) => {
              return (
                <SwiperSlide key={index}>
                  <EventTimelineCard event={event} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
