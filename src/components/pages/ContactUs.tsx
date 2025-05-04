"use client";

import { BG_CONFIG } from "@/lib/config";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import SunDiv from "../ui/SunDiv";
import ContactInfo from "@/components/ui/ContactInfo";
import Dropdown from "../ui/Dropdown";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    category: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    category: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategorySelect = (category: string) => {
    setFormData({
      ...formData,
      category,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
      category: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Prepare the data for display
      const submissionData = {
        "Full Name": formData.fullName,
        Email: formData.email,
        "Phone Number": formData.phoneNumber,
        Message: formData.message,
        Category: formData.category,
        Timestamp: new Date().toISOString(),
      };

      // Show success alert with JSON data
      alert(
        `Form submitted successfully!\n\n${JSON.stringify(
          submissionData,
          null,
          2
        )}`
      );

      // Reset form after submission
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        category: "",
      });
    } else {
      alert("Please fix the errors in the form before submitting.");
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[425px] overflow-hidden mb-3">
        <Image
          src="/images/image.png"
          alt="Department of Agriculture Building"
          fill
          className="object-cover bg-edpgreen"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
          <SunDiv title={"Contact Us"} />
        </div>
      </div>

      <hr className="border-t-2 border-edpyellow mx-8" />
      <ContactInfo />

      {/* Contact Form Section */}
      <div className="relative bg-edpgreen overflow-hidden pt-8 pb-8 lg:p-8 flex flex-col items-center mb-7">
        <div className={BG_CONFIG} />

        <div className="z-10 w-full max-w-7xl px-9">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row justify-between mt-10 text-white text-base gap-10">
              {/* Left Message */}
              <div className="lg:mt-20 lg:w-1/2">
                <div className="text-xl mb-5 flex flex-col lg:items-start text-center lg:text-left">
                  <h3>
                    If you have any inquiries or require support, please
                    complete the form. We will respond to you as soon as
                    possible.
                  </h3>
                  <Dropdown onSelect={handleCategorySelect} />
                  {errors.category && (
                    <p className="text-red-300 text-sm mt-1">
                      {errors.category}
                    </p>
                  )}
                </div>
              </div>

              {/* Form Section */}
              <div className="lg:w-1/2 space-y-6">
                <div className="text-white">
                  <h3>Full Name *</h3>
                  <Input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className="w-full rounded-xl bg-white border-0 h-13 text-black"
                  />
                  {errors.fullName && (
                    <p className="text-red-300 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <h3>Email *</h3>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    className="w-full rounded-xl bg-white border-0 h-13 text-black"
                  />
                  {errors.email && (
                    <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <h3>Phone Number *</h3>
                  <Input
                    name="phoneNumber"
                    type="number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-xl bg-white border-0 h-13 text-black"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-300 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
                <div>
                  <h3>Message *</h3>
                  <Input
                    name="message"
                    type="text"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    className="w-full rounded-xl bg-white border-0 h-40 text-black"
                  />
                  {errors.message && (
                    <p className="text-red-300 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button type="submit" className="w-40 h-11">
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
