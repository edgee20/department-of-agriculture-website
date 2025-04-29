"use client";
import { useState, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import serviceData from "@/data/serviceData.json";
import { AccordionData } from "@/lib/types/services";
import AgencyDetails from "./AgencyDetails";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const accordionData: AccordionData[] = serviceData;
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl lg:max-w-[1200px] mx-auto space-y-4">
      {accordionData.map((service, index) => {
        // assign refs to each accordion content using the contentRefs array
        const contentRef = (el: HTMLDivElement | null) => {
          contentRefs.current[index] = el;
        };

        return (
          <div key={`${service.accordionTitle}-${index}`} className="group">
            {/* Accordion Header */}
            <div className="flex">
              <div className="w-1 bg-edpgreen rounded-l-md"></div>
              <button
                className="flex-1 flex justify-between items-center w-full p-4 text-left font-medium transition-all bg-white text-black rounded-r-md shadow-lg hover:shadow-xl"
                onClick={() => toggleAccordion(index)}
              >
                <span>{service.accordionTitle}</span>
                {activeIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-edpyellow" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-edpyellow" />
                )}
              </button>
            </div>

            {/* Accordion Content */}
            <div
              ref={contentRef}
              className="overflow-hidden transition-all duration-300 flex"
              style={{
                maxHeight:
                  activeIndex === index
                    ? `${
                        (contentRefs.current[index]?.scrollHeight ?? 0) + 15
                      }px`
                    : "0px",
              }}
            >
              <div className="w-1 bg-edpyellow rounded-l-md"></div>
              <div className="flex-1 p-4 bg-edpyellow/50 rounded-r-md border border-gray-200 border-t-0">
                {service.accordionData.map((item) => (
                  <div key={item.category} className="mb-6">
                    <h4 className="font-medium">
                      {item.category.toUpperCase()}
                    </h4>
                    <ol className="list-decimal list-inside ml-[20px] py-2">
                      {item.services_offered.map((serviceItem) => (
                        <li key={serviceItem} className="text-sm leading-6">
                          {serviceItem}
                        </li>
                      ))}
                    </ol>

                    {/* Agency Details */}
                    <div className="mt-4">
                      <h3 className="font-medium">DA AGENCY CONCERNED</h3>
                      <AgencyDetails agency={item.agency} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
