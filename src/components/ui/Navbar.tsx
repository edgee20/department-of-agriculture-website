"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/data/links.json";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="fixed top-0 left-0 w-full z-50 max-h-[71.5px]">
      <div
        className={`flex items-center justify-between ransition-all duration-300 ease-in-out ${
          isScrolled ? "bg-white text-epdgreen" : "bg-black/80"
        }`}
      >
        {/* Left section */}
        <div className=" flex items-center ">
          {/* image container */}
          <div className="px-7 py-2">
            <Link href={""}>
              <Image
                src={"/images/doa-logo.png"}
                alt={"logo"}
                height={35}
                width={35}
              />
            </Link>
          </div>

          {/* sun-divider */}
          <div className="relative px-5 ">
            <div
              className={`h-13 w-[2px] ${
                isScrolled ? "bg-[#1c2d10]" : "bg-white"
              }`}
            />
            {/* Sun */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                alt="philippine sun"
                src="/images/philippine-sun.png"
                height={20}
                width={20}
                className="drop-shadow-lg"
              />
            </div>
          </div>

          <div>
            <p className="px-4 font-niconne">
              Official website of the Department of Agriculture
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="flex justify-end font-bold font-inter text-[14px] pr-5">
          {links.map((value, index) => {
            return (
              <Link key={index} href={`${value.link}`} className="px-4">
                {value.title}
              </Link>
            );
          })}
        </div>
      </div>
      <hr
        className={`border-t-2 ${
          isScrolled ? "border-[#1c2d10]" : "border-white"
        }`}
      />
    </main>
  );
}
