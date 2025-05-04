"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Article } from "@/lib/types/article";

interface ArticleCardProps {
  article: Article;
  articleUrl?: string;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/article/${article.id}`);
  };

  const formattedDate = new Date(article.datePublished).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

  return (
    <div
      className="relative max-w-[380px] w-full h-[250px] border-[2px] border-edpyellow flex flex-col group cursor-pointer transition-all duration-500 ease-in-out shadow-lg rounded-lg overflow-hidden"
      onClick={handleClick}
    >
      {/* Background Image */}
      <Image
        src={article.thumbnail}
        alt={article.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Fixed Yellow Content */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-edpyellow/80 p-2 flex flex-col">
        {/* Date */}
        <p className="text-sm text-white mb-1">{formattedDate}</p>
        {/* Title */}
        <h1 className="text-[16px]/[1.25] font-bold text-white">
          {article.title}
        </h1>
      </div>
    </div>
  );
}
