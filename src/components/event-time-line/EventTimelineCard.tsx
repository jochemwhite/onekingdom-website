"use client";
import { Database } from "@/types/supabase";
import Image from "next/image";
import Link from "next/link";
import StyledButton from "../buttons/styled-button";

interface Props {
  event: Database["public"]["Tables"]["roadmap_blog"]["Row"];
}

export default function EventTimelineCard({ event }: Props) {
  return (
    <div className="w-full h-[800px] lg:h-[500px] list-none " style={{ margin: "1rem 0" }}>
      <div className="p-[40px] w-full h-full border-primary hover:border-highlight border-2  rounded-md flex flex-col items-stretch lg:flex-row transition-all duration-300 ease">
        <div className="w-full lg:w-1/2 h-full grid grid-cols-2 gap-4">
          {event.images &&
            event.images.length > 0 &&
            event.images.slice(0, 3).map((image, index) => {
              let colSpan = "col-span-1";
              let rowSpan = "";

              if (event.images.length === 1) {
                colSpan = "col-span-2";
              } else if (index === 0 && event.images.length > 2) {
                rowSpan = "row-span-2";
              }

              return (
                <div key={index} className={`relative ${colSpan} ${rowSpan}`}>
                  <Image
                    src={image}
                    alt={`Event image ${index + 1}`}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div className="lg:w-1/2 lg:pl-[77px] text-left w-full pl-0 ">
          <div>
            <p className="text-left text-lg text-[#cccccc] font-normal ">
              <span>{new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </p>
            <h3 className="text-2xl font-medium m-0 p-0 mb-5">
              <Link href={`/events/${event.title}`}>{event.title}</Link>
            </h3>
          </div>
          <span className="text-left  text-[#cccccc] font-normal">
            <p>{event.short_description}</p>
          </span>
          <p className="mt-5">
            <StyledButton href={`/events/${event.slug}`} innerText="View Event" openNewTab={false} />
          </p>
        </div>
      </div>
    </div>
  );
}
