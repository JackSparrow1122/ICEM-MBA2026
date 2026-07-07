import React from "react";
// Import React Icons
import { FaClock, FaBriefcase, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

const data = [
  {
    icon: <FaClock className="text-[#F37121] text-4xl" />, // Clock icon for Duration
    value: "Course Duration",
    description: "The MBA Programme spans 2 years across four semesters.",
  },
  {
    icon: <FaBriefcase className="text-[#F37121] text-4xl" />, // Briefcase icon for Internship
    value: "Internship",
    description: "Structured internships with leading organizations across industries.",
  },
  {
    icon: <FaGraduationCap className="text-[#F37121] text-4xl" />, // Graduation cap icon for Placements
    value: "Placements",
    description: "A strong placement record with top recruiters nationwide.",
  },
  {
    icon: <FaClipboardList className="text-[#F37121] text-4xl" />, // Clipboard icon for Eligibility
    value: "Eligibility",
    description: (
      <span>
        Click{" "}
        <a
          href="#faq"
          className="text-[#F37121] hover:underline font-bold transition-all"
        >
          here
        </a>{" "}
        to see eligibility.
      </span>
    ),
  },
];

export default function CompPointers() {
  return (
    <section className="bg-[#F7F3EF] py-2 md:py-4 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Grid of icons in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-5 bg-white border border-gray-100/80 rounded-2xl shadow-sm hover:shadow-md hover:border-[#F37121]/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#F37121]/10 text-[#F37121] transition-colors duration-300 group-hover:bg-[#F37121] group-hover:text-white mt-1">
                {React.cloneElement(item.icon, { className: "w-6 h-6 text-current" })}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-base font-bold text-gray-800 tracking-tight transition-colors duration-300 group-hover:text-[#F37121]">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 mt-0.5 font-medium leading-relaxed break-words">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
