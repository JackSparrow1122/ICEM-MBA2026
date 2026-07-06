import React from "react";
import {
  FaBullseye,
  FaTrophy,
  FaSatelliteDish,
  FaFire,
  FaGraduationCap,
} from "react-icons/fa";

const features = [
  {
    title: "Guaranteed Placement Assistance",
    description: "Secure your career with top recruiters!",
    Icon: FaBullseye,
  },
  {
    title: "State-of-the-Art Infrastructure",
    description: "Smart classrooms, seminar halls, and a rich library!",
    Icon: FaTrophy,
  },
  {
    title: "Industry-Tied Programs",
    description: "Get hands-on experience with live projects!",
    Icon: FaSatelliteDish,
  },
  {
    title: "Vibrant Campus Life",
    description: "Management Fests, Leadership Summits, and Sports!",
    Icon: FaFire,
  },
  {
    title: "Holistic Learning",
    description: "A mix of management, soft skills, and leadership training!",
    Icon: FaGraduationCap,
  },
];

export default function WhyChooseICEM() {
  return (
    <section className="bg-[#F7F3EF] py-4 px-4 md:px-16 ">
      {/* Heading Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-[#F37121]">ICEM</span> for Your{" "}
          <span className="text-[#F37121]">MBA</span> Journey?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          At Indira College of Engineering and Management (ICEM), an Autonomous
          institute, we empower innovators, problem solvers, and business leaders! With
          world-class faculty, industry-aligned curriculum, and top-notch
          placements, ICEM is where your MBA dreams take flight.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {features.map(({ title, description, Icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left p-6 bg-[#FCFAEE] border border-[#e2e8f0] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F37121]/5 hover:bg-white hover:border-[#F37121]/30 group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F37121]/10 text-[#F37121] mb-4 transition-all duration-300 group-hover:bg-[#F37121] group-hover:text-white">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#F37121]">
              {title
            }</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

