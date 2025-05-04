"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import SunDiv from "@/components/ui/SunDiv";
import { BG_CONFIG } from "@/lib/config";
import React, { useState } from "react";

export default function SchedulePage() {
  // State for inputs
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Error states
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
  });

  // Time slots array
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
    <div>
      {/* fill up container */}
      <div className="flex flex-col items-center mb-20">
        <hr className="border-t-2 border-[#cda530] mt-6 mx-5 w-[calc(100%-5rem)]"></hr>
        <div className="mt-12 bg-white border rounded-[25px] pr-30 pl-30 pt-15 pb-15 shadow-lg w-[800px] border-black mb-10px">
          <div className="[&>h3]:font-semibold [&>h3]:pb-3">
            <h3>Full Name *</h3>
            <Input
              type="text"
              placeholder="Enter name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={errors.fullName ? "border-red-500" : ""}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}

            <h3 className="mt-7">Email *</h3>
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            <h3 className="mt-7">Phone Number *</h3>
            <Input
              type="number"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={errors.phoneNumber ? "border-red-500" : ""}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>
        </div>
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
              {errors.date && (
                <p className="text-red-300 text-sm mt-2 text-center">
                  {errors.date}
                </p>
              )}
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
                    variant={
                      selectedTime === slot ? "secondaryEDP" : "secondaryEDP"
                    }
                    className={`p-9 w-60 ${
                      selectedTime === slot ? "bg-edpyellow" : ""
                    }`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
              {errors.time && (
                <p className="text-red-300 text-sm mt-2 ml-8">{errors.time}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button className="mt-5 mb-10 h-10 w-70" onClick={handleSubmit}>
            CONFIRM
          </Button>
        </div>
      </div>
    </div>
  );
}
