"use client";
import { useState, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface DropdownProps {
  onSelect: (option: string) => void;
}

const Dropdown = ({ onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ["Farmer", "Businessman", "Student", "Researcher", "Other"];

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0 mt-6">
      {/* Dropdown Header */}
      <div className="flex group">
        {/* Green left border */}
        <div className="w-1 bg-edpyellow rounded-l-md"></div>

        <button
          type="button"
          className="flex-1 flex justify-between items-center w-full p-4 text-left font-medium transition-all bg-white text-black rounded-r-md shadow-lg hover:shadow-xl"
          onClick={toggleDropdown}
        >
          <span className="text-sm">
            {selectedOption || "Please choose one. *"}
          </span>
          {isOpen ? (
            <FiChevronUp className="w-5 h-5 text-edpyellow" />
          ) : (
            <FiChevronDown className="w-5 h-5 text-edpyellow" />
          )}
        </button>
      </div>

      {/* Dropdown Options */}
      <div
        ref={dropdownRef}
        className="overflow-hidden transition-all duration-300 flex"
        style={{
          maxHeight: isOpen ? `${dropdownRef.current?.scrollHeight}px` : "0px",
        }}
      >
        {/* Yellow left border */}
        <div className="w-1 bg-edpyellow rounded-l-md"></div>

        {/* Options container - changed to text-left */}
        <div className="flex-1 bg-[#F4D579] rounded-r-md border border-gray-200 border-t-0 text-left">
          {options.map((option) => (
            <div
              key={option}
              className="p-3 hover:bg-edpyellow/70 cursor-pointer transition-colors text-black text-sm pl-4"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
