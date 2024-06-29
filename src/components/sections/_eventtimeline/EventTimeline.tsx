"use client";
import Divider from "@/components/svg/Divider.svg";
import { events } from "@/lib/const";
import { useState } from "react";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EventTimelineCard from "./EventTimelineCard";
import EventTimelineNav from "./EventTimelineNav";

export default function EventTimeline() {
  const [active, setActive] = useState(1);

  return (
    <div className="relative ">
      <div className="container">
        <div className="neoh_fn_timeline">
          <div className="timeline_content">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={(x) => setActive(x.activeIndex + 1)}
              className="timeline_list"
              style={{ width: "100%" }}
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
      </div>
    </div>
  );
}
