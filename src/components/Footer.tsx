import Link from "next/link";
import Image from "next/image";
import { links, footer } from "@/data/links.json";
import { footerLogos } from "@/data/footerLogos.json";

export default function Footer() {
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
      <div className="flex justify-between px-18">
        {/* left panel */}
        <div>
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

          {/* quick links container */}
          <div className="font-inter text-black text-[14px] pb-4">
            <p className="font-bold py-0.5">Quick Links</p>
            {links.map((value, index) => {
              return (
                <nav key={index} className="hover:underline py-0.5">
                  <Link href={`${value.link}`}>{toTitleCase(value.title)}</Link>
                </nav>
              );
            })}
          </div>
        </div>

        {/* right panel */}
        <div>
          <div className="flex flex-col justify-end pt-8">
            {/* footer logos */}
            <div className="flex pb-10">
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

            {/* email and socmeds */}
            <div className="font-inter text-black text-[14px] pb-4 text-right">
              <p className="font-bold py-0.5">Email</p>
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
              <p className="font-bold py-0.5">Social Media</p>
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
      <hr className="border-t-2 border-[#cda530] mx-8" />
      {/* footer bottom external links */}
      <div className="flex items-center justify-center py-4">
        {footer.map((value, index) => {
          return (
            <div key={index} className="">
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
