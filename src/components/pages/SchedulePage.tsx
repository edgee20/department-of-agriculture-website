"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import SunDiv from "@/components/ui/SunDiv";
import { BG_CONFIG } from "@/lib/config";
import React from "react";

export default function SchedulePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  /*timeSlots array*/
  const timeSlots = [
    "8:00am - 9:00am",
    "9:00am - 10:00am",
    "8:00am - 11:00am",
    "8:00am - 12:00pm",
    "1:00pm - 2:00pm",
    "2:00pm - 3:00pm",
    "3:00pm - 4:00pm",
    "4:00pm - 5:00pm",
  ];

  return (
    <div>
      {/* fill up container */}
      <div className="flex flex-col items-center mb-20">
        <hr className="border-t-2 border-[#cda530] mt-6 mx-5 w-[calc(100%-5rem)]"></hr>
        <div className="mt-12 bg-white border rounded-[25px] pr-30 pl-30 pt-15 pb-15 shadow-lg w-[800px] border-black mb-10px">
          <div className="[&>h3]:font-semibold [&>h3]:pb-3">
            <h3>Full Name *</h3>
            <Input type="name" placeholder="Enter name"></Input>
            <h3 className="mt-7">Email *</h3>
            <Input type="email" placeholder="Enter email"></Input>
            <h3 className="mt-7">Phone Number *</h3>
            <Input type="number" placeholder="Enter phone number"></Input>
          </div>
        </div>
        <Button variant={"secondaryEDP"} className="mt-10 w-70 h-11 text-xs">
          SELECT DATE & TIME
        </Button>
      </div>

      {/* Calendar & Time */}
      <div className="relative bg-edpgreen overflow-hidden pt-8 pb-8 lg:p-8 flex flex-col items-center mb-7">
        <div className={`${BG_CONFIG}`}></div>
        <div className="z-10 relative">
          <SunDiv title={"Select Date & Time"} />
          <div className="flex justify-between w-full mt-10">
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md mt-9"
              />
            </div>
            {/* Render time slot buttons */}
            <div className="mt-12 ml-10">
              <h3 className="text-white text-lg font-medium mb-4 ml-8">
                {date
                  ? date.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })
                  : "Select a date"}
              </h3>
              <div className="grid grid-cols-2 gap-6 ml-8 shadow-black">
                {timeSlots.map((slot, index) => (
                  <Button
                    key={index}
                    variant="secondaryEDP"
                    className="p-9 w-60"
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button className="mt-5 mb-10 h-10 w-70">CONFIRM</Button>
        </div>
      </div>
    </div>
  );
}
