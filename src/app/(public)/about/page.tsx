import StyledButton from "@/components/buttons/styled-button";
import GuaranteeCard from "@/components/cards/guarantee-card";
import Banner from "@/components/global/Banner";
import Title from "@/components/global/title";
import VdeoSection from "@/components/sections/video-section";
import { discord_link } from "@/lib/constant";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About"
}

export default function page() {
  return (
    <main>
      <Banner />

      <section>
        <div className="container flex flex-col-reverse lg:flex-row gap-4 lg:items-center justify-center  my-16 font-secondary text-lg ">
          <div className="w-full flex flex-col md:flex-row gap-16 items-center lg:justify-between">
            <div className="w-full md:w-1/2">
              <div className="aspect-square relative rotate-3 bg-accent  flex items-center justify-center text-zinc-600">
                <Image src="/img/banners/about.jpg" alt="Logo" fill className="rounded-xl -rotate-3 shadow-2xl" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <Title title="The Rise of One Kingdom" alignment="left" />
              <p className="text-zinc-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas exercitationem, earum veniam impedit nam expedita iure!
                Blanditiis, facere. Nostrum veritatis ullam placeat facere repellendus, in officia eveniet impedit rerum.
              </p>
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reprehenderit. Amet aliquam exercitationem doloribus, fugit, dolorum
                velit maxime adipisci architecto nisi, obcaecati natus corrupti aliquid nesciunt nulla iure nemo quo?
              </p>
              <div className="flex gap-4">
                <StyledButton href={discord_link} innerText="Discord" icon="discord" openNewTab={true} />
                <StyledButton href="/contact" innerText="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap-8 container flex flex-col lg:flex-row justify-between items-center">
        <GuaranteeCard
          title="Guarantee 1"
          description="Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est."
        />
        <GuaranteeCard
          title="Guarantee 2"
          description="Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est."
        />
        <GuaranteeCard
          title="Guarantee 3"
          description="Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est."
        />
      </section>

      <section>
        <div className="container flex flex-col-reverse lg:flex-row-reverse gap-4 lg:items-center justify-center  my-16 font-secondary text-lg ">
          <div className="w-full flex flex-col md:flex-row-reverse gap-16 items-center lg:justify-between">
            <div className="w-full md:w-1/2">
              <div className="aspect-square relative rotate-3 bg-accent  flex items-center justify-center text-zinc-600">
                <Image src="/img/banners/about.jpg" alt="Logo" fill className="rounded-xl -rotate-3 shadow-2xl" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <Title title="The Rise of One Kingdom" alignment="left" />
              <p className="text-zinc-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas exercitationem, earum veniam impedit nam expedita iure!
                Blanditiis, facere. Nostrum veritatis ullam placeat facere repellendus, in officia eveniet impedit rerum.
              </p>
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reprehenderit. Amet aliquam exercitationem doloribus, fugit, dolorum
                velit maxime adipisci architecto nisi, obcaecati natus corrupti aliquid nesciunt nulla iure nemo quo?
              </p>
              <div className="flex gap-4">
                <StyledButton href={discord_link} innerText="Discord" icon="discord" openNewTab={true} />
                <StyledButton href="/contact" innerText="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0A0A0A] my-16">
        <VdeoSection href="https://www.youtube.com/embed/dTsOXQrXbe8?si=sTEuW_h5M48uwDhz" bg_img="/img/events/banner.png" />
      </section>
    </main>
  );
}
