import React from "react";
import { FaBrain, FaGlobeAmericas, FaChalkboardTeacher, FaRobot } from "react-icons/fa";
import { MdOutlineAnalytics, MdOutlineSportsSoccer } from "react-icons/md";
import { AiOutlineDatabase } from "react-icons/ai";
import { GiArtificialIntelligence, GiGraduateCap } from "react-icons/gi";
import { BsDiagram3 } from "react-icons/bs";

function AidsReasons() {
  return (
    <div className="relative py-8 bg-[#F6FBFF]">
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold  text-center mb-6 z-10 relative">
        Why Choose <span className="text-[#117577]">ICEM</span> for Your <span className="text-[#117577]">AIDS</span> Engineering Journey?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 z-10 relative px-6 md:px-10 lg:px-16">
        
        {/* AI & Machine Learning */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <GiArtificialIntelligence className="text-[#0c3249] text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-[#117577]">AI & Machine Learning</h3>
          <p className="text-sm md:text-base text-gray-700">Train AI models and build self-learning applications!</p>
        </div>

        {/* Big Data & Analytics */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <AiOutlineDatabase className="text-[#0c3249] text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-[#117577]">Big Data & Analytics</h3>
          <p className="text-sm md:text-base text-gray-700">Decode massive datasets for smarter decision-making!</p>
        </div>

        {/* Neural Networks */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <FaBrain className="text-[#0c3249] text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-[#117577]">Neural Networks & Deep Learning</h3>
          <p className="text-sm md:text-base text-gray-700">Explore the tech behind self-driving cars & AI assistants!</p>
        </div>

        {/* Industry-Aligned Curriculum */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <BsDiagram3 className="text-[#0c3249] text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-[#117577]">Industry-Aligned Curriculum</h3>
          <p className="text-sm md:text-base text-gray-700">Hands-on projects, hackathons & real-world applications</p>
        </div>

        {/* Global Career Opportunities */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <FaGlobeAmericas className="text-[#0c3249] text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-[#117577]">Global Career Opportunities</h3>
          <p className="text-sm md:text-base text-gray-700">Work in AI-driven industries worldwide!</p>
        </div>

        {/* Placements */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <GiGraduateCap className="text-[#0c3249] text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-[#117577]">Top-Notch Placements</h3>
          <p className="text-sm md:text-base text-gray-700">Secure jobs with core and IT companies!</p>
        </div>

        {/* Sports */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <MdOutlineSportsSoccer className="text-[#0c3249] text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-[#117577]">Thriving Sports Culture</h3>
          <p className="text-sm md:text-base text-gray-700">Stay active and build teamwork with top-class sports facilities!</p>
        </div>

        {/* Guest Lectures */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <FaChalkboardTeacher className="text-[#0c3249] text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-[#117577]">Expert Guest Lectures</h3>
          <p className="text-sm md:text-base text-gray-700">Learn from industry leaders and mechanical pioneers!</p>
        </div>
      </div>
    </div>
  );
}

export default AidsReasons;
