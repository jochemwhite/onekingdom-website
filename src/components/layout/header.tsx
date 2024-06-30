"use client";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HamburgerMenu } from "./hamburger-menu/hamburger-menu";
import { Link as TLink } from "@/types/global";
const Header = () => {
  const [fixer, setfixer] = useState<boolean>(false);

  useEffect(() => {
    const checkScroll = () => {
      setfixer(window.scrollY > 10);
    };
    window.addEventListener("scroll", checkScroll);
  }, [fixer]);

  const menu: TLink[] = [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Fragment>
      <header
        className={cn("fixed w-full z-50 top-0 left-0 py-5", {
          "bg-primary shadow-md  ": fixer,
        })}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                width={75}
                height={75}
                alt="One Kingdom Logo"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Link>
            <div className="flex justify-between">
              <div className="md:hidden">
                <HamburgerMenu links={menu} />
              </div>

              <ul className="hidden md:flex ml-12 ">
                {menu.map((item, index) => (
                  <li key={index} className={index !== 0 && index !== menu.length - 1 ? "mx-4" : ""}>
                    <Link href={item.href}>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
