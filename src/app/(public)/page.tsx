import BasicButton from "@/components/buttons/basic-button";
import NewsCard from "@/components/cards/news-card";
import TestimonialCard from "@/components/cards/testimonial-card";
import Title from "@/components/globals/title";
import DividerContainer from "@/components/layout/divider-container";
import Marquee from "@/components/magicui/marquee";
import EventTimeline from "@/components/sections/_eventtimeline/EventTimeline";
import Hero from "@/components/sections/hero";
import TeamGrid from "@/components/sections/team-grid";
import DiscordWidget from "@/components/widgets/discord-widget";
import { reviews } from "@/lib/const";

export default function Home() {
  return (
    <main className="bg-primary ">
      {/* Hero section */}
      <section>
        <Hero />
      </section>

      {/* about us */}
      <section className="container grid grid-cols-1 lg:grid-cols-2 my-16 items-center justify-center ">
        <div className="hidden md:block">
          <DiscordWidget server_id="706492500096974900" />
        </div>

        <div>
          <div className="w-fit">
            <Title title="One Kingdom" />
          </div>

          <p className="my-8">
            One Kingdom is a community of gamers, streamers, and content creators. We are a group of like-minded people that share a passion for
            gaming, streaming, and creating content. We are a community that is focused on helping each other grow and succeed.
          </p>

          <BasicButton href="#" innerText="Discord" icon="discord" openNewTab={true} />
        </div>
      </section>

      {/* our partnerd streamers */}
      <section className="container my-16">
        <div className="mb-20">
          <Title title="Our Partnerd Streamers" />
        </div>

        <TeamGrid title="Our Partnered Streamers" team="streamers" />
      </section>

      {/* Events */}
      <section className="relative bg-[#0A0A0A] my-16">
        <div className="container py-32">
          <div className="mb-20">
            <Title title="One Kingdom Roadmap" />
          </div>

          <DividerContainer>
            <EventTimeline />
          </DividerContainer>
        </div>
      </section>

      {/* our staff team */}
      <section className="container my-16">
        <div className="mb-20">
          <Title title="Our Staff Team" />
        </div>
        <TeamGrid title="Our Partnered Streamers" team="staff" />
      </section>

      {/* News */}

      <section className="container my-16">
        <div className="mb-20">
          <Title title="News" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <NewsCard
            date="June 01, 2022"
            description="Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est."
            href="#"
            title="Neohs NFT Goes Public In Nod To Crypto Adoption"
          />
          <NewsCard
            date="June 01, 2022"
            description="Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est."
            href="#"
            title="Neohs NFT Goes Public In Nod To Crypto Adoption"
          />
          <NewsCard
            date="June 01, 2022"
            description="Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est."
            href="#"
            title="Neohs NFT Goes Public In Nod To Crypto Adoption"
          />
        </div>
      </section>

      {/* testimonials */}

      <section>
        <div className="mb-8">
          <Title title="What our community says" />
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background py-20 md:shadow-xl">
          <Marquee pauseOnHover reverse className="[--duration:20s]">
            {reviews.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover  className="[--duration:20s]">
            {reviews.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div> */}
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
        </div>
      </section>
    </main>
  );
}
