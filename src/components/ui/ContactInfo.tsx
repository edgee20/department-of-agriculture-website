// components/ContactCard.tsx
import React from "react";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaLocationDot, FaClock } from "react-icons/fa6";

const ContactCard = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8 mt-9">
        Get In Touch With Us Now!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-black transform -translate-y-1/2"></div>
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black transform -translate-x-1/2"></div>

        {/* Upper Left - Phone Number */}
        <div className="p-4 flex flex-col items-center justify-center">
          <HiPhone size={40} />
          <h2 className="text-xl font-semibold mb-3 mt-3.5">Phone Number</h2>
          <p className="text-center">+63 (2) 8928-8741 to 64</p>
          <p className="text-center">+63 (2) 8273-2474</p>
        </div>

        {/* Upper Right - Email */}
        <div className="p-4 flex flex-col items-center justify-center">
          <HiMail size={40} />
          <h2 className="text-xl font-semibold mb-3 mt-3.5">Email</h2>
          <p className="text-center">osec.official@da.gov.ph</p>
          <p className="text-center">osec.invitation@da.gov.ph</p>
        </div>

        {/* Lower Left - Location */}
        <div className="p-4 flex flex-col items-center justify-center">
          <FaLocationDot size={40} />
          <h2 className="text-xl font-semibold mb-3 mt-3.5">Location</h2>
          <p className="text-center">Elliptical Road, Diliman,</p>
          <p className="text-center">Quezon City, 1100</p>
        </div>

        {/* Lower Right - Working Hours */}
        <div className="p-4 flex flex-col items-center justify-center">
          <FaClock size={40} />
          <h2 className="text-xl font-semibold mb-3 mt-3.5">Working Hours</h2>
          <p className="text-center">Monday to Friday</p>
          <p className="text-center">8:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
