import Image from "next/image";
import Link from "next/link";
import { links } from "@/data/links.json";
export default function Navbar() {
  return (
    <main className="max-h-[71.5px]">
      <div className="bg-black flex items-center justify-between">
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
          <div>
            <Image
              alt="philippine sun"
              src={"/images/philippine-sun.png"}
              height={20}
              width={20}
            />
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
    </main>
  );
}
