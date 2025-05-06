"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import SunDiv from "@/components/ui/SunDiv";
import { BG_CONFIG } from "@/lib/config";
import React, { useState } from "react";

export default function SchedulePage() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
  });

  const timeSlots = [
    "8:00am - 9:00am",
    "9:00am - 10:00am",
    "10:00am - 11:00am",
    "11:00am - 12:00pm",
    "1:00pm - 2:00pm",
    "2:00pm - 3:00pm",
    "3:00pm - 4:00pm",
    "4:00pm - 5:00pm",
  ];

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      phoneNumber: "",
      date: "",
      time: "",
    };

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    }

    if (!date) {
      newErrors.date = "Please select a date";
      isValid = false;
    }

    if (!selectedTime) {
      newErrors.time = "Please select a time slot";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const formData = {
        "Full Name": fullName,
        Email: email,
        "Phone Number": phoneNumber,
        Date: date
          ? date.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "",
        "Time Slot": selectedTime,
      };

      alert(
        `Schedule Submitted Successfully!\n\n${JSON.stringify(
          formData,
          null,
          2
        )}`
      );

      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setSelectedTime("");
    }
  };

  return (
    <div className="">
      {/* Header */}
      <div className="flex flex-col items-center mb-20 px-4">
        <hr className="border-t-2 border-[#cda530] mt-6 mx-5 w-[calc(100%-5rem)]" />

        {/* Input Form */}
        <div className="mt-12 bg-white border rounded-[25px] px-8 py-6 xl:px-30 xl:py-15 shadow-lg border-black w-full max-w-3xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold pb-2">Full Name *</h3>
              <Input
                type="text"
                placeholder="Enter name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full ${errors.fullName ? "border-red-500" : ""}`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <h3 className="font-semibold pb-2">Email *</h3>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <h3 className="font-semibold pb-2">Phone Number *</h3>
              <Input
                type="number"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={`w-full ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar & Time */}
      <div className="relative bg-edpgreen overflow-hidden pt-8 pb-8 px-4 lg:px-8 flex flex-col items-center mb-7">
        <div className={`${BG_CONFIG}`}></div>
        <div className="z-10 relative w-full max-w-6xl">
          <SunDiv title={"Select Date & Time"} />
          <div className="flex flex-col lg:flex-row lg:px-40 justify-between w-full mt-10 gap-4">
            {/* Calendar */}
            <div className="flex flex-col items-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
              />
              {errors.date && (
                <p className="text-red-300 text-sm mt-2 text-center">
                  {errors.date}
                </p>
              )}
            </div>

            {/* Time Slots */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4 xl:ml-8 text-center xl:text-left">
                {date
                  ? date.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })
                  : "Select a date"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:ml-8">
                {timeSlots.map((slot, index) => (
                  <Button
                    key={index}
                    variant="secondaryEDP"
                    className={`p-8 w-full ${
                      selectedTime === slot ? "bg-edpyellow" : ""
                    }`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
              {errors.time && (
                <p className="text-red-300 text-sm mt-2 ml-2 xl:ml-8">
                  {errors.time}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10 text-center">
          <Button className="mt-5 mb-10 h-10 w-48" onClick={handleSubmit}>
            CONFIRM
          </Button>
        </div>
      </div>
    </div>
  );
}
