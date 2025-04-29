<<<<<<< HEAD
import SchedulePage from "@/components/pages/SchedulePage";
=======
"use client";
>>>>>>> faf57a065353b58f52327e9ea78c06610237a04c
import { Button } from "@/components/ui/button";
import { MultiCarousel } from "@/components/ui/MultiCarousel";
import SunDiv from "@/components/ui/SunDiv";
import Image from "next/image";
import { useEffect, useState } from "react";
import articleJson from "@/data/articleData.json";
import { Article } from "@/lib/types/article";
import ProjectTable from "@/components/ui/ProjectTable";
import { BG_CONFIG } from "@/lib/config";

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

  return (
    <main>
<<<<<<< HEAD
      <SchedulePage></SchedulePage>
=======
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
      <div className="mb-8">
        <p className="text-white text-[10px]">
          easter egg haha, we love u maem giya
        </p>
        <hr className="border-t-2 border-edpyellow mx-8" />
        <div className="flex flex-col items-center">
          <h1 className="text-edpgreen text-[30px] font-bold py-8 text-center max-w-[500px]">
            Projects by the Department of Agriculture
          </h1>
          <ProjectTable />
        </div>
      </div>

      {/* secretary section */}
      <div className="relative bg-edpgreen overflow-hidden pt-8 pb-8 lg:p-8">
        <div className={`${BG_CONFIG}`}></div>
        <div className="z-10 relative">
          <SunDiv title={"The Secretary"} />

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-4 lg:px-8 mt-8">
            <div className="w-full lg:w-1/3 flex justify-center">
              <Image
                src={"/images/Secretary_Francisco_Tiu_Laurel_Jr.png"}
                alt={"Secretary Francisco Tiu Laurel Jr."}
                width={300}
                height={400}
                className="border-edpyellow border-[3px] object-cover shadow-lg"
              />
            </div>

            {/* Text content on right */}
            <div className="w-full lg:w-2/3 text-white space-y-4 px-4 xl:px-0">
              <p className="font-bold text-edpyellow">SECRETARY</p>

              <h2 className="text-2xl font-bold">
                Francisco P. Tiu Laurel Jr.
              </h2>

              {/* content container */}
              <div className="text-[14px]">
                <p className="italic font-medium">
                  See Francisco Tiu Laurel Jr. leading PH agriculture to a new,
                  bold direction
                </p>
                <p>
                  On November 3, 2023, Francisco P. Tiu Laurel Jr. took his oath
                  as Secretary of the Department of Agriculture before President
                  Ferdinand Marcos Jr.
                </p>
                <p>
                  Before entering public service, Secretary Tiu Laurel built a
                  successful career in business for over 30 years, leading
                  projects in many industries like fishing, marine services,
                  food processing, cold storage, and energy. He always advocates
                  for practices that protect the environment while helping the
                  economy grow.
                </p>
                <p>
                  He played a key role in promoting sustainable fishing, better
                  use of resources, and care for nature. These values continue
                  to guide him as he leads the Department of Agriculture. Now in
                  government, Sec. Tiu Laurel brings deep knowledge of the
                  agriculture sector and its struggles. His goal is to improve
                  farming and fishing in the country.
                </p>
                <p>
                  He wants farmers and fisherfolk to earn more. He aims to
                  secure the country’s food supply and make farming attractive
                  again to the youth.
                </p>
                <div className="pt-4">
                  <p>
                    One of his first big steps was to launch a long-term plan to
                    fix problems that have held back Philippine agriculture. He
                    knows the sector is the backbone of the economy and needs
                    major support.
                  </p>
                  <br />
                  <p>His roadmap includes:</p>
                  <ul className="list-disc pl-5">
                    <li>Modernizing farming equipment and tools</li>
                    <li>Reducing energy costs for agriculture</li>
                    <li>Improving storage and logistics systems</li>
                    <li>Strengthening food supply chains</li>
                    <li>Building private sector partnerships</li>
                  </ul>
                </div>
                <p className="pt-4">
                  Secretary Tiu Laurel believes these goals can only be met
                  through teamwork and clear direction. With his bold vision,
                  the Department of Agriculture is preparing for a stronger
                  future - one that is modern, competitive, and ready to face
                  new challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> faf57a065353b58f52327e9ea78c06610237a04c
    </main>
  );
}
