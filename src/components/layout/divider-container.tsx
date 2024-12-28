import React from "react";
import Divider from "@/components/svg/divider.svg";

interface Props {
  children: React.ReactNode;
}
export default function DividerContainer({ children }: Props) {
  return (
    <div className="relative">
      <span className="fill-background-primary absolute inset-x-0 w-full top-0 h-auto block  text-black">
        <Divider />
      </span>

      {children}

      <span className="fill-background-primary absolute inset-x-0 bottom-[-1px] transform rotate-180">
        <Divider />
      </span>
    </div>
  );
}
