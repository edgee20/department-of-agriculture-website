"use client";
import Image from "next/image";
import { Article } from "@/lib/types/article";
import { BG_CONFIG } from "@/lib/config";
import { MultiCarousel } from "../ui/MultiCarousel";
import SunDiv from "../ui/SunDiv";
import { useEffect, useState } from "react";
import articleJson from "@/data/articleData.json";

interface ArticleViewProps {
  article: Article;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article }) => {
  const [isMobile, setIsMobile] = useState(false);
  const filteredArticles = articleJson.articleData.article
    .filter((item) => item.id !== article.id)
    .map((item) => ({
      ...item,
      content: "",
      imageUrl: [],
    }));

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
  // Format content with line breaks
  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-4 text-lg text-gray-800">
        {paragraph}
      </p>
    ));
  };

  // Format the published date to readable words
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      {/* Article Thumbnail */}
      <div className="relative w-full h-[450px] overflow-hidden mb-3">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-transparent shadow-[inset_0_10px_100px_10px_rgba(255,223,0,0.5)]"></div>
      </div>

      <hr className="border-t-2 border-edpyellow mx-8" />

      <div className="px-6 lg:px-[125px] xl:px-[300px] 2xl:px-[500px]">
        {/* Article Title */}
        <h1 className="text-4xl font-semibold mt-14">{article.title}</h1>

        {/* Article Author and Date */}
        <div className="text-sm text-black mb-6">
          By {article.author} | {formatDate(article.datePublished)}
        </div>

        {/* Article Content */}
        <div className="mt-6">{formatContent(article.content || "")}</div>
        {/* Display Images if available */}
        {article.imageUrl && article.imageUrl.length > 0 && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {article.imageUrl.map((url, index) => (
              <div
                key={index}
                className="relative h-64 w-full max-w-[600px] mx-auto"
              >
                <Image
                  src={url}
                  alt={`Article Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* green bg */}
      <div className="relative bg-edpgreen overflow-hidden pt-8 pb-8 lg:p-8 mt-20">
        <div className={`${BG_CONFIG}`}></div>
        <div className="z-10 relative">
          <SunDiv title={"More Articles"} />
          <div className="flex">
            <MultiCarousel
              articles={filteredArticles}
              isMobile={isMobile}
              max_width={"max-w-[1200px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
