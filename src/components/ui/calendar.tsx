"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { enUS } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={{
        ...enUS,
        options: { weekStartsOn: 1 },
      }}
      className={cn("p-16 bg-white text-base", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-4",
        month: "flex flex-col gap-6",
        caption: "flex justify-between items-center pt-2 px-2 w-full",
        caption_label: "text-base font-bold order-1",
        nav: "flex items-center gap-2 order-2",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "w-8 h-8 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "",
        nav_button_next: "",
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell: "rounded-md w-10 font-semibold text-base",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-1 text-center text-sm focus-within:relative focus-within:z-20",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-full"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-8 h-8 p-0 font-semibold text-base flex items-center justify-center rounded-full"
        ),
        day_selected:
          "bg-[#CDA530] text-black rounded-full hover:bg-[#CDA530] focus:bg-[#CDA530]",
        day_today: "bg-accent text-accent-foreground font-bold",
        day_outside: "invisible",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-5", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-5", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
