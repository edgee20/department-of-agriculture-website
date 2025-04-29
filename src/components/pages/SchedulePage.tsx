"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function SchedulePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <div className="flex flex-col items-center mb-7">
        <hr className="border-t-2 border-[#cda530] mt-6 mx-5 w-full"></hr>
        <div className="mt-12 bg-white border rounded-[25px] pr-30 pl-20 pt-20 pb-15 shadow-md w-[900px] border-black mb-10px">
          <div className="[&>h3]:font-bold">
            <h3>Full Name *</h3>
            <Input type="name" placeholder="Enter name"></Input>
            <h3 className="mt-7">Email *</h3>
            <Input type="email" placeholder="Enter email"></Input>
            <h3 className="mt-7">Phone Number *</h3>
            <Input type="number" placeholder="Enter phone number"></Input>
          </div>
        </div>
        <Button variant={"secondaryEDP"}>SELECT DATE & TIME</Button>
      </div>
      <div className="flex flex-col items-center bg-[#1C2D10]">
        <div>
          <h2 className="font-bold mt-8 font">Select a Date & Time</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <Button className="shadow-md mt-10 pl-20 pr-20">Confirm</Button>
        </div>
      </div>
    </div>
  );
}
