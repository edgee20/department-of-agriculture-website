"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Article } from "@/lib/types/article";
import ArticleCard from "./ArticleCard";
import { cn } from "@/lib/utils";

interface MultiCarouselProps {
  articles: Article[];
  max_width: string;
  isMobile: boolean;
}

export const MultiCarousel = ({
  articles,
  max_width,
  isMobile,
}: MultiCarouselProps) => {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center mx-auto relative ${max_width}`}
    >
      <Carousel
        className="w-full relative"
        opts={{
          align: "center",
          containScroll: "keepSnaps",
          dragFree: true,
        }}
      >
        <CarouselContent
          className={cn(
            "flex w-full py-4 m-0",
            isMobile ? "gap-0 px-4" : "gap-4 px-8" // Changed to px-8 for better containment
          )}
        >
          {articles.map((article, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "flex justify-center",
                isMobile ? "basis-full" : "basis-1/3" // Changed to exact 1/3 for desktop
              )}
            >
              <div
                className={cn(
                  "w-full",
                  isMobile ? "max-w-[350px]" : "px-2" // Added px-2 for desktop spacing
                )}
              >
                <ArticleCard article={article} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
