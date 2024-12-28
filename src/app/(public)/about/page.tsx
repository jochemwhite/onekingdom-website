import StyledButton from "@/components/buttons/styled-button";
import GuaranteeCard from "@/components/cards/guarantee-card";
import Banner from "@/components/global/Banner";
import Title from "@/components/global/title";
import VdeoSection from "@/components/sections/video-section";
import { discord_link } from "@/lib/constant";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

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
                It all started with a simple idea: one Discord, one goal. A group of streamers came together, not just to share their passion but to
                build something bigger—something that could support, entertain, and inspire. And so, One Kingdom was born: a community where
                creativity thrives, friendships form, and success is something we achieve together. <br /> <br />
                We&apos;re not just about numbers or streams; we&apos;re about moments. The late-night brainstorming sessions, the &apos;just one more game&apos; spirals,
                and the annual meetups where we trade pixels for real-life laughs—whether it&apos;s braving the wilds of the Efteling or lounging at the
                beach with a volleyball and a bbq.
                <br /> <br />
                At our core, One Kingdom is a place where professionalism meets a warm, welcoming sense of togetherness. Here, streamers, gamers, and
                creators unite to share ideas, support each other, and create content that truly stands out. We&apos;re on a mission to help every member
                grow and to make the kind of content that gets people talking.
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
                The dream? To become Europe&apos;s go-to community for streamers and content creators, a hub of talent and collaboration that supports its
                members at every level. With 1,000 Discord members on the horizon, a growing social media presence, and partnerships that make a real
                impact, we&apos;re building a future where creators can thrive.
              </p>
              <p className="text-zinc-400">
                Whether you&apos;re here for the laughs, the advice, or the inspiration, welcome to One Kingdom. Together, we&apos;re creating something
                unforgettable—one stream, one moment, one kingdom at a time.
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
