"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";

interface Props {
  bg_image?: string;
}

function Banner({ bg_image = "/img/banners/banner.jpg" }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [pathName, setPathname] = useState<string[]>([]);

  useEffect(() => {
    const pathNames = pathname.split("/");
    setPathname(pathNames);
  }, [pathname]);

  const handleClick = (index: number) => {
    const path = pathName.slice(0, index + 1).join("/");

    const fullURL = typeof window !== "undefined" ? `${window.location.origin}${path}` : "";
    router.push(fullURL);
  };

  return (
    <div className="w-full relative h-80 flex justify-center items-center flex-col  ">
      <h2 className="font-primary font-bold text-7xl z-10 capitalize">{pathName[pathName.length - 1]}</h2>
      <Breadcrumb className="font-secondary mt-4 z-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {pathName.map((item, index) => {
            if (index === pathName.length - 1) {
              return (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className="capitalize">{item}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            }

            return (
              <div key={index} className="flex items-center">
                <BreadcrumbItem key={index} onClick={() => handleClick(index)}>
                  <BreadcrumbLink className="capitalize cursor-pointer">{item}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <Image src={bg_image} alt="banner" fill className="z-0  object-cover object-center opacity-50" />
    </div>
  );
}

export default Banner;
