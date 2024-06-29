import BasicButton from "@/components/buttons/basic-button";
import NewsCard from "@/components/cards/news-card";
import Title from "@/components/globals/title";
import DividerContainer from "@/components/layout/divider-container";
import EventTimeline from "@/components/sections/_eventtimeline/EventTimeline";
import Hero from "@/components/sections/hero";
import TeamGrid from "@/components/sections/team-grid";
import DiscordWidget from "@/components/widgets/discord-widget";

export default function Home() {
  return (
    <main className="bg-primary">
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
      <section className="container">
        <div className="flex justify-center">
          <Title title="Our Partnerd Streamers" />
        </div>

        <TeamGrid title="Our Partnered Streamers" team="streamers" />
      </section>

      {/* Events */}
      <section className="relative bg-[#0A0A0A]">
        <div className="container py-32">
          <Title title="One Kingdom Roadmap" />

          <DividerContainer>
            <EventTimeline />
          </DividerContainer>
        </div>
      </section>

      {/* our staff team */}
      <section className="container">
        <TeamGrid title="Our Partnered Streamers" team="staff" />
      </section>

      {/* TODO: sponsors */}
      {/* 
      <section className="relative bg-[#0A0A0A]">
        <div className="container py-32">
          <h2 className="font-title text-4xl text-center mb-8 ">Our Sponsors</h2>

          <DividerContainer>
            
          </DividerContainer>
        </div>

        
      </section> */}

      {/* News */}

      <section className="container">
        <Title title="News" />

        <div className="grid grid-cols-3">
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
    </main>
  );
}
