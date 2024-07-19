"use client";
import { Database } from "@/types/supabase";
import Image from "next/image";
import Link from "next/link";

interface Props {
  event: Database["public"]["Tables"]["roadmap_blog"]["Row"];
}

export default function EventTimelineCard({ event }: Props) {
  return (
    <li className="w-full h-[500px]" style={{ margin: "1rem 0" }}>
      <div className="p-[40px] w-full h-full border  rounded-5 flex flex-col items-center lg:flex-row">
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
                    layout="fill"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div className="lg:w-1/2 lg:pl-[77px] text-left w-full pl-0 mt-[40px]">
          <p className="text-left text-lg text-[#cccccc] font-normal  fn_date">
            <span>{new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          </p>
          <h3 className="text-2xl font-medium m-0 p-0 mb-5">
            <Link href={`/events/${event.title}`}>{event.title}</Link>
          </h3>
          <span className="text-left text-lg text-[#cccccc] font-normal ">
            <p>{event.short_description}</p>
          </span>
          <p className="fn_read mt-5">
            <Link href={`/roadmap/${event.slug}`} className="neoh_fn_button only_text">
              <span className="text">Read More</span>
            </Link>
          </p>
        </div>
      </div>
    </li>
  );
}
