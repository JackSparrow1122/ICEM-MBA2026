import React, { useEffect } from 'react';
import {
  FaChartLine,
  FaLaptopCode,
  FaHandshake,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HighlightCard = React.memo(({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full hover:border-[#F37121]/30 group">
    <div className="w-16 h-16 rounded-2xl bg-[#F37121]/10 text-[#F37121] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#F37121] group-hover:text-white group-hover:scale-105 shadow-md shadow-[#F37121]/5">
      {React.cloneElement(icon, { className: "w-8 h-8 mb-0 text-current" })}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#F37121]">{title}</h3>
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
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F37121] mb-8">
        ICEM Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <HighlightCard
          icon={<FaChartLine />}
          title="Business Leadership & Strategy"
          description="Develop a profound understanding of organizational dynamics, financial strategies, and competitive positioning to make impactful management decisions."
        />
        <HighlightCard
          icon={<FaLaptopCode />}
          title="Data & Digital Integration"
          description="Gain hands-on experience with business intelligence tools, analytics platforms, and emerging digital trends to solve modern organizational challenges."
        />
        <HighlightCard
          icon={<FaHandshake />}
          title="Corporate & Industry Connect"
          description="Learn from senior corporate leaders, work on real-world business cases, and participate in live simulations with leading brands."
        />
      </div>
    </section>
  );
}

export default CommonHighlights;


