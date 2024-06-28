import BasicButton from "@/components/buttons/basic-button";
import Hero from "@/components/sections/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section>
        <Hero />
      </section>

      {/* about us */}

      <section className="container grid grid-cols-1 lg:grid-cols-2 my-16 ">
        <div className="font-serif">Dit is een test bericht om het font te testen</div>

        <div>
          <h2 className="font-assassin text-5xl">One Kingdom</h2>
          <p className="font-sans my-8">
            One Kingdom is a community of gamers, streamers, and content creators. We are a group of like-minded people that share a passion for
            gaming, streaming, and creating content. We are a community that is focused on helping each other grow and succeed.
          </p>

          <BasicButton href="#" innerText="Discord" icon="discord" openNewTab={true} />
        </div>
      </section>
    </main>
  );
}
