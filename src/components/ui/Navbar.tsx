"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/data/links.json";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const COLOR_CONFIG = isScrolled
    ? "bg-white text-edpgreen"
    : "bg-black/80 text-white";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 980) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="fixed top-0 left-0 w-full z-50">
      <div
        className={`flex items-center justify-between transition-all duration-300 ease-in-out ${COLOR_CONFIG}`}
      >
        {/* Left section */}
        <div className=" flex items-center ">
          {/* image container */}
          <div className="px-7 py-2">
            <Link href={"/"}>
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
                isScrolled ? "bg-edpgreen" : "bg-white"
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
        {/* Mobile View */}
        {isMobile ? (
          <>
            <div className="flex justify-end font-bold font-inter text-[14px] pr-5">
              <button onClick={() => setMenuOpened(!menuOpened)}>
                {menuOpened ? <HiMenuAlt3 /> : <HiMenu />}
              </button>
            </div>
            {menuOpened && (
              <div
                className={`absolute z-[-1] top-13 right-0 w-full p-5 flex flex-col items-end font-bold transform transition-all duration-300 ease-in-out ${COLOR_CONFIG}`}
              >
                {links.map((value, index) => (
                  <Link
                    key={index}
                    href={`${value.link}`}
                    className="px-4 py-2"
                    onClick={() => setMenuOpened(!menuOpened)}
                  >
                    {value.title}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          // Desktop View
          <div className="flex justify-end font-bold font-inter text-[14px] pr-5">
            {links.map((value, index) => {
              return (
                <Link key={index} href={`${value.link}`} className="px-4">
                  {value.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <hr
        className={`border-t-2 ${
          isScrolled ? "border-edpgreen" : "border-white"
        }`}
      />
    </main>
  );
}
