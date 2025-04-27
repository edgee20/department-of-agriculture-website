"use client";
import Link from "next/link";
import Image from "next/image";
import { links, footer } from "@/data/links.json";
import { footerLogos } from "@/data/footerLogos.json";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const LAYOUT_CONFIG = isMobile
    ? "flex-col items-center justify-center"
    : "justify-between";
  const FOOTER_LAYOUT_CONFIG = isMobile
    ? "text-center items-center justify-center"
    : "";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1020) {
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

  function toTitleCase(str: string): string {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  const emails = [
    { link: "osec.official@da.gov.ph" },
    { link: "osec.invitation@da.gov.ph" },
  ];

  return (
    <div className=" bg-white">
      {/* main container (upper & lower) */}
      <div className="flex flex-col px-16">
        {/* upper panel */}
        <div className={`flex ${LAYOUT_CONFIG}`}>
          {/* logo container */}
          <div className="flex items-center text-black py-6">
            <Link href={"/"}>
              <Image
                src={"/images/doa-logo.png"}
                alt="doa-logo"
                width={60}
                height={60}
              ></Image>
            </Link>
            <div className="pl-6">
              <h1 className="font-bold text-[22px]">
                DEPARTMENT OF AGRICULTURE
              </h1>
              <p className="text-[14px]">
                All content is in the public domain unless otherwise stated
              </p>
            </div>
          </div>

          {/* footer logos */}
          <div className="flex justify-end pb-10">
            {footerLogos.map((image, index) => {
              return (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    src={`${image.src}`}
                    alt={`${image.alt}`}
                    width={50}
                    height={50}
                    className="px-2"
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>

        {/* lower panel */}
        <div
          className={`flex text-[14px] ${
            isMobile ? "" : "pt-4"
          } ${LAYOUT_CONFIG}`}
        >
          {/* quick links container */}
          <div className={`pb-3 ${FOOTER_LAYOUT_CONFIG}`}>
            <p className="font-bold py-0.5">Quick Links</p>
            {links.map((value, index) => {
              return (
                <nav key={index} className="hover:underline py-0.5">
                  <Link href={`${value.link}`}>{toTitleCase(value.title)}</Link>
                </nav>
              );
            })}
          </div>
          {/* email and socmeds */}
          <div
            className={`${
              isMobile ? "" : "text-right"
            } ${FOOTER_LAYOUT_CONFIG}`}
          >
            <p className="font-bold pb-0.5">Email</p>
            {emails.map((email, index) => {
              return (
                <div key={index} className="py-0.5">
                  <nav>
                    <Link
                      href={`mailto:${email.link}`}
                      className="hover:underline "
                    >
                      {email.link}
                    </Link>
                  </nav>
                </div>
              );
            })}
            <div className={`${isMobile ? "pt-3 mb-6" : ""}`}>
              <p className={`font-bold py-0.5`}>Social Media</p>
              <nav>
                <Link
                  href={"https://www.facebook.com/dacentralphilippines"}
                  className="hover:underline "
                >
                  https://www.facebook.com/dacentralphilippines
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* line break */}
      <hr className="border-t-2 border-edpyellow mx-8" />
      {/* footer bottom external links */}
      <div className={`flex items-center justify-center py-4 ${LAYOUT_CONFIG}`}>
        {footer.map((value, index) => {
          return (
            <div key={index} className={`${isMobile ? "py-1.5" : ""}`}>
              <Link
                href={`${value.link}`}
                className="hover:underline px-20 text-black font-bold"
              >
                {value.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
