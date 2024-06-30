"use client";

import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";

interface SidebarProviderProps {
  children: ReactNode;
}

type SidebarContextType = {
  isOpen: boolean;
  ToggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  ToggleSidebar: () => {},
});

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const ToggleSidebar = () => setIsOpen(!isOpen);

  return <SidebarContext.Provider value={{ ToggleSidebar, isOpen }}>{children}</SidebarContext.Provider>;
};


