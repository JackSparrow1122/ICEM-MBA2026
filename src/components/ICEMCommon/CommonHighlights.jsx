import React, { useEffect } from 'react';
import {
  FaLaptopCode,
  FaChartLine,
  FaGraduationCap,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HighlightCard = React.memo(({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full hover:border-[#259CA8]/30 group">
    <div className="w-16 h-16 rounded-2xl bg-[#259CA8]/10 text-[#259CA8] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#259CA8] group-hover:text-white group-hover:scale-105 shadow-md shadow-[#259CA8]/5">
      {React.cloneElement(icon, { className: "w-8 h-8 mb-0 text-current" })}
    </div>
    <h3 className="text-xl font-bold text-[#135783] mb-3 transition-colors duration-300 group-hover:text-[#259CA8]">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
));

function CommonHighlights() {
  useEffect(() => {
    const debounceAOS = setTimeout(() => {
      AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, 100);
    return () => clearTimeout(debounceAOS);
  }, []);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#259CA8] mb-8">
        ICEM Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <HighlightCard
          icon={<FaChartLine />}
          title="National Rankings"
          description="Ranked 49th in Top 100 Private Engineering Institutes and 61st in Top 140 Engineering Institutes by Times of India Engineering Colleges."
        />
        <HighlightCard
          icon={<FaLaptopCode />}
          title="Smart India Hackathon"
          description="Winners of Smart India Hackathon for 3 consecutive years organized by Ministry of HRD, AICTE & NASSCOM."
        />
        <HighlightCard
          icon={<FaGraduationCap />}
          title="National Education Award"
          description="Received Outstanding Education Institute (West) Award by National Education Awards 2018."
        />
      </div>
    </section>
  );
}

export default CommonHighlights;
