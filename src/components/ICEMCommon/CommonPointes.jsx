import React from "react";
// Import React Icons
import { FaClock, FaBriefcase, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

const data = [
  {
    icon: <FaClock className="text-[#F37121] text-4xl" />, // Clock icon for Duration
    value: "Course Duration",
    description: "The MBA Programme lasts 2 years.",
  },
  {
    icon: <FaBriefcase className="text-[#F37121] text-4xl" />, // Briefcase icon for Internship
    value: "Internship",
    description: "Internships with leading organizations across industries.",
  },
  {
    icon: <FaGraduationCap className="text-[#F37121] text-4xl" />, // Graduation cap icon for Placements
    value: "Placements",
    description: "Excellent placement record with top companies nationwide.",
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
    <section className="bg-[#F7F3EF] py-4 md:py-12 px-4 md:px-8 lg:px-16 font-sans">
      <div className="w-auto grid md:grid-cols-2 gap-2 items-center overflow-hidden">
        
        {/* Left content */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl text-center md:text-left md:text-[44px] font-bold leading-tight text-gray-900">
            ICEM: The Gateway to
            <br />
            <span className="text-[#F37121]">Exceptional Careers</span>
          </h2>
          <p className="text-lg text-center md:text-left md:text-xl text-gray-700 font-medium mb-2">
            Your Pathway to Success and World-Class Opportunities
          </p>
        </div>

        {/* Right side: icons + badge */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Grid of icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-5 bg-white border border-gray-100/80 rounded-2xl shadow-sm hover:shadow-md hover:border-[#F37121]/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#F37121]/10 text-[#F37121] transition-colors duration-300 group-hover:bg-[#F37121] group-hover:text-white">
                  {React.cloneElement(item.icon, { className: "w-6 h-6 text-current" })}
                </div>
                <div>
                  <div className="text-base font-bold text-gray-800 tracking-tight transition-colors duration-300 group-hover:text-[#F37121]">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5 font-medium leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
