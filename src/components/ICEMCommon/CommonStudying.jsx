import React, { useEffect } from 'react';
import {
  FaLaptopCode,
  FaUniversity,
  FaTools,
  FaBuilding,
  FaChalkboardTeacher,
  FaMicroscope,
  FaRocket,
  FaChartLine,
  FaGraduationCap,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InfoCard = React.memo(({ icon, text }) => (
  <div
    className="bg-white p-6 border border-gray-100 shadow-md shadow-gray-200/30 flex items-center gap-5 rounded-2xl hover:shadow-lg hover:border-[#259CA8]/30 transition-all duration-300 hover:-translate-y-0.5 group"
    data-aos="zoom-in"
  >
    <div className="flex-shrink-0 text-[#259CA8] transition-transform duration-300 group-hover:scale-110">
      {React.cloneElement(icon, { className: "w-12 h-12 text-current mr-0" })}
    </div>
    <span className="text-sm sm:text-base text-left text-gray-700 font-medium leading-relaxed">
      {text}
    </span>
  </div>
));

const HighlightCard = React.memo(({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full hover:border-[#259CA8]/30 group">
    <div className="w-16 h-16 rounded-2xl bg-[#259CA8]/10 text-[#259CA8] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#259CA8] group-hover:text-white group-hover:scale-105 shadow-md shadow-[#259CA8]/5">
      {React.cloneElement(icon, { className: "w-8 h-8 mb-0 text-current" })}
    </div>
    <h3 className="text-xl font-bold text-[#135783] mb-3 transition-colors duration-300 group-hover:text-[#259CA8]">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
));

function ComputerEngineering() {
  useEffect(() => {
    const debounceAOS = setTimeout(() => {
      AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, 100);
    return () => clearTimeout(debounceAOS);
  }, []);

  const cards = [
    {
      icon: <FaUniversity />,
      text: '2 Decades of Academic Excellence in Engineering Education',
    },
    {
      icon: <FaTools />,
      text: 'Hands-on Training through Industry Visits, Internships & Live Projects',
    },
    {
      icon: <FaBuilding />,
      text: '450+ Leading Recruiters across IT, Core, and Emerging Tech Domains',
    },
    {
      icon: <FaChalkboardTeacher />,
      text: 'Mentorship from Industry Experts across Mechanical, IT, AI, and Electronics',
    },
    {
      icon: <FaMicroscope />,
      text: 'Advanced Labs for CAD, AI-ML, Networking, Robotics & Cloud Computing',
    },
    {
      icon: <FaRocket />,
      text: 'State-of-the-Art Infrastructure with Advanced Labs & Apple Labs, Sports Facilities & Vibrant Campus Life',
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-12 poppins-regular overflow-hidden flex flex-col gap-8">
        <div className="w-full space-y-4" data-aos="fade-up">
          {/* Engineering Excellence Badge */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#259CA8]">
            <span className="w-8 h-0.5 bg-[#259CA8]"></span>
            Engineering Excellence
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-[#135783] leading-tight">
            Your Gateway to the Best <span className="text-[#259CA8]">Engineering</span> College in Pune!
          </h1>
          
          <h2 className="text-lg md:text-xl font-semibold text-[#259CA8]">
            Build, Innovate & Excel with ICEM Engineering!
          </h2>
          
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-5xl">
            Indira College of Engineering & Management (ICEM) is one of the top engineering colleges in Pune, offering AICTE-approved B.E. programmes in Computer, IT, Mechanical, ENTC, and AI & Data Science. With 450+ recruiters, industry-aligned curriculum, and a campus equipped with Apple Labs, smart classrooms, R&D zones, and sports facilities—ICEM ensures holistic development.
          </p>
        </div>

        {/* 6-Card Grid below the text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {cards.map((card, index) => (
            <InfoCard key={index} icon={card.icon} text={card.text} />
          ))}
        </div>
      </div>

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
    </>
  );
}

export default ComputerEngineering;
