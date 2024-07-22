import { auth } from "@/auth";
import BlogComments from "@/components/blog/blog-comments";
import BlogSelector from "@/components/blog/blog-selector";
import BreadCrumbs from "@/components/blog/breadcrumbs";
import MiniItems from "@/components/blog/mini-items";
import BasicButton from "@/components/buttons/basic-button";
import ArticleCard from "@/components/cards/article-card";
import AuthorCard from "@/components/cards/author-card";
import SocialIcon from "@/components/globals/social-icon";
import SocialList from "@/components/globals/social-list";
import SocialLlist from "@/components/globals/social-list";
import Widget from "@/components/globals/widget";
import RenderContent from "@/components/render-editor";
import { Separator } from "@/components/ui/separator";
import { socials } from "@/lib/const";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaDiscord } from "react-icons/fa";

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

  // get the next and previous post
  const { data: next_post, error: next_error } = await supabase
    .from("roadmap_blog")
    .select()
    .lt("date", data.date)
    .order("date", { ascending: false })
    .eq("published", true)
    .neq("content", null);

  if (next_error) {
    throw next_error;
  }

  const { data: prev_post, error: prev_error } = await supabase
    .from("roadmap_blog")
    .select()
    .gt("date", data.date)
    .order("date")
    .eq("published", true)
    .neq("content", null);

  if (prev_error) {
    throw prev_error;
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
            <SocialList socails={socials} />
          </div>
          <BreadCrumbs title={data.title} />
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
            loading="eager"
            priority
          />
        </div>
        <div className="flex">
          {/* content */}
          <div className="w-full ">
            <MiniItems date={data.date} author={data.author} />

            <h2 className="text-4xl font-medium font-blog-title">{data.title}</h2>

            <RenderContent content={data.content as string} />

            <AuthorCard
              img={data.images[0]}
              author={data.author}
              bio="As is stated in my bio, I stream on Wednesdays and Sundays. My intention is to stream some gaming content but chat's often too damn gezellig so I end up Just Chatting 90% of the time... Oh well."
              socials={socials}
            />
          </div>

          {/* sep */}
          <div className="mx-8">
            <Separator orientation="vertical" className="h-full w-[2px]  transition-all bg-accent" />
          </div>

          {/* sidebar */}
          <div className="flex flex-col items-center min-w-[350px] relative ">
            <div className="mb-8 w-full px-5">
              <Widget text="TOP ARTICLES" />
            </div>
            <div className="space-y-10 w-full mb-8 ">
              {Array.from({ length: 3 }).map((_, i) => (
                <ArticleCard key={i} title="Use social media to jump-start your creative career." date="2021-12-12" number={i + 1} />
              ))}
            </div>

            <div className="mb-8 w-full px-5">
              <Widget text="SUBSCRIBE & FOLLOW" />
            </div>

            <div>
              <ul className="flex items-center [&>li]:px-2 text-white">
                {socials.map((social) => (
                  <li key={social.name}>
                    <Link href={social.link} target="_blank" className="hover:text-text-accent text-2xl">
                      <SocialIcon value={social.name} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-8 w-full p-8 flex justify-center items-center bg-accent rounded-md">
              <div className="flex flex-col justify-center items-center space-y-5">
                <FaDiscord className="text-6xl text-white" />
                <h4 className="text-2xl font-blog-title">Join Our Discord</h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <BasicButton innerText="Join Now"   href=""/>
              </div>
            </div>
          </div>

          {/* end sidebar */}
        </div>
      </div>
      <div className="my-8 z-100">
        <BlogSelector next_post={next_post[0]} prev_post={prev_post[0]} />
      </div>

      <div className="container my-12">
        <BlogComments comments={[]} postId={data.id} />
      </div>
    </section>
  );
}
