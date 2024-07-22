"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  framerProps?: HTMLMotionProps<"p">;
  className?: string;
  hover: boolean;
}

export default function WordRotate({
  words,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2, ease: "easeOut" },
  },
  className,
  hover,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (hover) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  }, [hover]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.p key={words[index]} className={cn(`${className}`, {
          "text-text-accent": hover,
        }) } {...framerProps}>
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
