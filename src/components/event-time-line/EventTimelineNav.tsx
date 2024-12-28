"use client";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { cn } from "@/lib/utils";
import { Database } from "@/types/supabase";
import { useEffect, useRef } from "react";

import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";

interface Props {
  events: Database["public"]["Tables"]["roadmap_blog"]["Row"][];
  active: number;
}

export default function EventTimelineNav({ events, active }: Props) {
  const { width } = useWindowDimensions();
  const swiper = useSwiper();
  const swiperRef = useRef<SwiperClass | null>(null);

  const calcFilter = (value: number) => (100 / active) * value;

  const onClick = (value: number) => {
    swiper.slideTo(value - 1);

    if (swiperRef.current) {
      swiperRef.current.slideTo(value - 1);
    }
  };
  const activeClass = (value: number) => (value === active ? "active" : value > active ? "next" : "previous");

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(swiper.activeIndex); 
    }
  }, [swiper.activeIndex]);

  return (
    <>
      <div className="relative h-[62px] ">
        <div className="w-full h-full relative">
          <div className="absolute left-0 top-8 bg-[#252525] w-full h-[2px]">
            <Swiper
              slidesPerView={width ? (width < 1024 ? 2 : 5) : 2}
              // freeMode={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              pagination={{
                clickable: true,
              }}
 
              className="overflow-visible space-x-4"
              style={{ overflow: "visible" }}
            >
              {events.map((event, index) => {
                let delay = 0.3 * (index + 1);

                if (index > 5) {
                  delay = 0;
                }
                index++;

                return (
                  <SwiperSlide key={index} className="!ml-1 md:!mr-0">
                    <li className={activeClass(index)} style={{ cursor: "pointer" }}>
                      <a
                        onClick={() => onClick(index)}
                        className="block text-[10px] text-uppercase absolute whitespace-nowrap top-full py-2   after:absolute after:bottom-full after:w-full after:h-full after:left-0"
                      >
                        <span
                          className={cn("block text-[#666] text-sm uppercase", {
                            "text-[#ccc]": index === active,
                          })}
                        >
                          {new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </span>
                        <span
                          className={cn("w-3 h-3 rounded-full block absolute bg-[#252525] bottom-full left-1/2 -ml-[5px] -mb-[6px]", {
                            "bg-[#78f701]": index <= active,
                            // create a brighness filter for the next events
                          })}
                          style={{ filter: `brightness(${index >= active ? 300 : calcFilter(index)}%)` }}
                        />
                      </a>
                    </li>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
