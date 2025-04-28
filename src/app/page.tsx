"use client";
import { Button } from "@/components/ui/button";
import { MultiCarousel } from "@/components/ui/MultiCarousel";
import SunDiv from "@/components/ui/SunDiv";
import Image from "next/image";
import { useEffect, useState } from "react";
import articleJson from "@/data/articleData.json";
import { Article } from "@/lib/types/article";
import ProjectTable from "@/components/ui/ProjectTable";

const articles: Article[] = articleJson.articleData.article.map((article) => ({
  ...article,
  content: "",
  imageUrl: [],
}));

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 786) {
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

  const BG_CONFIG =
    "absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)]";

  return (
    <main>
      <div className="relative w-full h-[680px] overflow-hidden">
        {/* Background Image */}
        <div>
          <Image
            src="/images/hero-section.png"
            alt="Department of Agriculture Building"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60"></div>

        {/* heading section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
          <h1 className="text-white text-[40px] md:text-[55px] lg:text-[80px] font-bold italic text-center max-w-[1230px] px-4 pb-4">
            Masaganang Agrikultura, Maunlad na Ekonomiya!
          </h1>
          <Button>SCHEDULE A MEETING</Button>
        </div>
      </div>

      {/* current news section */}
      <div className="relative bg-edpgreen overflow-hidden pt-8 pb-8 lg:p-8">
        <div className={`${BG_CONFIG}`}></div>
        <div className="z-10 relative">
          <SunDiv title={"Current News"} />
          <div className="flex">
            <MultiCarousel
              articles={articles}
              isMobile={isMobile}
              max_width={"max-w-[1200px]"}
            />
          </div>
        </div>
      </div>

      {/* projects section */}
      <div>
        <p className="text-white text-[10px]">
          hidden gem haha, we love u maem giya
        </p>
        <hr className="border-t-2 border-edpyellow mx-8" />
        <div className="flex flex-col items-center">
          <h1 className="text-edpgreen text-[30px] font-bold py-3 text-center max-w-[500px]">
            Projects by the Department of Agriculture
          </h1>
          <ProjectTable />
        </div>
      </div>
    </main>
  );
}
