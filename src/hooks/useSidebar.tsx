'use client'
import { SidebarContext } from "@/providers/sidebar-provider";
import { useContext } from "react";

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("use sidebar must be use with sidebar provier");
  }
  return context;
};