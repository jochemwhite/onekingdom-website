import { auth } from "@/auth";
import SocialIcon from "@/components/globals/social-icon";
import RenderContent from "@/components/render-editor";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("roadmap_blog").select().eq("slug", params.slug).single();

  if (error) {
    if (error.code === "PGRST116") {
      return notFound();
    }

    throw error;
  }

  if (!data || !data.content) {
    return notFound();
  }

  return (
    <section className="relative ">
      <div className="pt-[165px] container">
        <div className="absolute w-full h-[750px] bg-secondary left-0 top-0 -z-10" />

        <div className="text-lg text-text-primary mb-[10px]">
          <div className="flex items-center ">
            <span className="mr-5">
              <p>Share: </p>
            </span>
            <ul className="flex items-center [&>li]:px-2 text-white">
              <li>
                <Link href="" target="_blank" className="hover:text-text-accent">
                  <SocialIcon value="twitter" />
                </Link>
              </li>
              <li>
                <Link href="" target="_blank" className="hover:text-text-accent">
                  <SocialIcon value="instagram" />
                </Link>
              </li>
              <li>
                <Link href="" target="_blank" className="hover:text-text-accent">
                  <SocialIcon value="tiktok" />
                </Link>
              </li>
              <li>
                <Link href="" target="_blank" className="hover:text-text-accent">
                  <SocialIcon value="twitch" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-lg flex">
            <Link href="/" className="hover:text-text-accent">
              <p>Home</p>
            </Link>
            <span className="mx-2">/</span>
            <Link href="/roadmap" className="hover:text-text-accent">
              <p>Roadmaps</p>
            </Link>
            <span className="mx-2">/</span>
            <p>{data.title}</p>
          </div>
        </div>
        <div className="relative w-full h-[750px] rounded-lg overflow-hidden my-10">
          <Image
            src={data.images[1]}
            alt={data.title}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        <div className="flex space-x-6">
          <div
            className="relative list-none flex justify-center items-center bg-[#252525] py-1 min-h-10            
            after:absolute   after:border-transparent after:border-l-[#252525] after:border-solid after:border-t-[40px] after:border-b-0 after:border-l-[12px]  after:left-full "
          >
            {data.date}
          </div>
          <div
            className="relative list-none flex justify-center items-center bg-[#252525] py-1 min-h-10            
            after:absolute  after:border-transparent after:border-l-[#252525] after:border-solid after:border-t-[40px] after:border-b-0 after:border-l-[12px]  after:left-full "
          >
            by {data.author}
          </div>
          <div className="relative list-none flex justify-center items-center bg-[#252525] py-1 min-h-10            
            after:absolute   after:border-transparent after:border-l-[#252525] after:border-solid after:border-t-[40px] after:border-b-0 after:border-l-[12px]  after:left-full ">
            comments 3
          </div>
        </div>

        <RenderContent content={data.content as string} />
      </div>
    </section>
  );
}
