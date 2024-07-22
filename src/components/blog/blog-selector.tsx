"use client";
import { Grid3X3 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { motion, Variant, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Database } from "@/types/supabase";
import Link from "next/link";

type Direction = "left" | "right";

interface BlogSelectorProps {
  prev_post: Database["public"]["Tables"]["roadmap_blog"]["Row"] | null;
  next_post: Database["public"]["Tables"]["roadmap_blog"]["Row"] | null;
}

export default function BlogSelector({ prev_post, next_post }: BlogSelectorProps) {
  const [hover, setHover] = React.useState(false);
  const [hoverLeft, setHoverLeft] = React.useState(false);
  const [hoverRight, setHoverRight] = React.useState(false);

  const hoverVariants = (direction: Direction) => ({
    x: direction === "left" ? "-250px" : "250px",
    transition: { duration: 0.4, ease: "easeInOut" },
  });

  const baseVariants = {
    x: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <div className="h-[200px] w-full bg-accent" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="flex">
        
      </div>
      <div className="container flex items-center h-full justify-between">
        <motion.div
          animate={hover ? hoverVariants("left") : baseVariants}
          onMouseEnter={() => setHoverLeft(true)}
          onMouseLeave={() => setHoverLeft(false)}
        >
          {prev_post ? (
            <Link href={`/roadmap/${prev_post.slug}`} className="flex items-center cursor-pointer">
              <motion.div className="w-[80px] h-[80px] relative overflow-hidden rounded-lg mr-8" animate={hoverLeft ? { scale: 1.1 } : { scale: 1 }}>
                <Image
                  src={prev_post.images[0]}
                  alt="roadmap_prev"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </motion.div>
              <div>
                <p className={cn("text-base text-[#777] uppercase font-semibold font-blog-title")}>prev post</p>
                <h3 className={cn("text-2xl font-bold", { "text-text-accent": hover })}>{prev_post.title}</h3>
              </div>
            </Link>
          ) : (
            <div className="flex items-center  cursor-not-allowed">
              <motion.div className="w-[80px] h-[80px] relative overflow-hidden rounded-lg ml-8 cursor-not-allowed" animate={hoverRight ? { scale: 1.1 } : { scale: 1 }}>
                <Image
                  src="/logo.png"
                  alt="roadmap"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </motion.div>
              <div>
                <p className={cn("text-base text-[#777] uppercase font-semibold font-blog-title ")}>prev post</p>
                <h3 className={cn("text-2xl font-bold", { "text-text-accent": hover })}>No  post available.</h3>
              </div>
            </div>
          )}
        </motion.div>
        <div className="flex items-center h-full space-x-4">
          <Separator
            orientation="vertical"
            className={cn("h-full w-[2px] bg-black transition-all", {
              "bg-text-accent": hover,
            })}
          />
          <div className="grid grid-cols-4 gap-[3px]">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                className={cn("w-[3px] h-[3px] bg-text-primary transition-all", {
                  "bg-text-accent": hover,
                })}
                key={i}
              />
            ))}
          </div>
          <Separator
            orientation="vertical"
            className={cn("h-full w-[2px] bg-black transition-all", {
              "bg-text-accent": hover,
            })}
          />
        </div>
        <motion.div
          animate={hover ? hoverVariants("right") : baseVariants}
          onMouseEnter={() => setHoverRight(true)}
          onMouseLeave={() => setHoverRight(false)}
        >
          {next_post ? (
            <Link href={`/roadmap/${next_post.slug}`} className="flex items-center flex-row-reverse cursor-pointer">
              <motion.div className="w-[80px] h-[80px] relative overflow-hidden rounded-lg ml-8" animate={hoverRight ? { scale: 1.1 } : { scale: 1 }}>
                <Image
                  src={next_post.images[0]}
                  alt="roadmap"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </motion.div>
              <div>
                <p className={cn("text-base text-[#777] uppercase font-semibold font-blog-title text-right")}>next post</p>
                <h3 className={cn("text-2xl font-bold", { "text-text-accent": hover })}>{next_post.title}</h3>
              </div>
            </Link>
          ) : (
            <div className="flex items-center flex-row-reverse cursor-not-allowed">
              <motion.div className="w-[80px] h-[80px] relative overflow-hidden rounded-lg ml-8" animate={hoverRight ? { scale: 1.1 } : { scale: 1 }}>
                <Image
                  src="/logo.png"
                  alt="roadmap"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </motion.div>
              <div>
                <p className={cn("text-base text-[#777] uppercase font-semibold font-blog-title text-right")}>next post</p>
                <h3 className={cn("text-2xl font-bold", { "text-text-accent": hover })}>No next post available.</h3>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
