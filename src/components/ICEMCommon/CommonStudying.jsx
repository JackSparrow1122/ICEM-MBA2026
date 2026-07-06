import React, { useEffect } from 'react';
import {
  FaUniversity,
  FaTools,
  FaBuilding,
  FaChalkboardTeacher,
  FaMicroscope,
  FaRocket,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InfoCard = React.memo(({ icon, text }) => (
  <div
    className="bg-white p-6 border border-gray-100 shadow-md shadow-gray-200/30 flex items-center gap-5 rounded-2xl hover:shadow-lg hover:border-[#F37121]/30 transition-all duration-300 hover:-translate-y-0.5 group"
    data-aos="zoom-in"
  >
    <div className="flex-shrink-0 text-[#F37121] transition-transform duration-300 group-hover:scale-110">
      {React.cloneElement(icon, { className: "w-12 h-12 text-current mr-0" })}
    </div>
    <span className="text-sm sm:text-base text-left text-gray-700 font-medium leading-relaxed">
      {text}
    </span>
  </div>
));


function MBAStudying() {
  useEffect(() => {
    const debounceAOS = setTimeout(() => {
      AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, 100);
    return () => clearTimeout(debounceAOS);
  }, []);

  const cards = [
    {
      icon: <FaUniversity />,
      text: '2 Decades of Academic Excellence in Management & Engineering Education',
    },
    {
      icon: <FaTools />,
      text: 'Hands-on Training through Industry Visits, Summer Internships (SIP) & Live Projects',
    },
    {
      icon: <FaBuilding />,
      text: '450+ Leading Recruiters across Management, IT, Finance, and Consulting Domains',
    },
    {
      icon: <FaChalkboardTeacher />,
      text: 'Mentorship from Experienced Academicians & Corporate Professionals in Marketing, Finance, HR, and Operations',
    },
    {
      icon: <FaMicroscope />,
      text: 'Interactive Case Studies, Seminars, Workshops, and Business Simulation Games',
    },
    {
      icon: <FaRocket />,
      text: 'State-of-the-Art Campus with Smart Classrooms, Seminar Halls, Library & Vibrant Student-led Clubs',
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-12 poppins-regular overflow-hidden flex flex-col gap-8">
        <div className="w-full space-y-4" data-aos="fade-up">
          {/* MBA Excellence Badge */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F37121]">
            <span className="w-8 h-0.5 bg-[#F37121]"></span>
            MBA Excellence
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Gateway to the Best <span className="text-[#F37121]">MBA</span> College in Pune!
          </h1>
          
          <h2 className="text-lg md:text-xl font-semibold text-[#F37121]">
            Lead, Innovate & Excel with ICEM MBA!
          </h2>
          
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-5xl">
            Indira College of Engineering & Management (ICEM) is one of the premier institutes in Pune, offering AICTE-approved, SPPU-affiliated Master of Business Administration (MBA) programmes. With a dedicated Training & Placement cell, 450+ recruiters, industry-integrated curriculum, case study pedagogy, and regular corporate interactions—ICEM shapes the next generation of business leaders.
          </p>
        </div>

        {/* 6-Card Grid below the text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {cards.map((card, index) => (
            <InfoCard key={index} icon={card.icon} text={card.text} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MBAStudying;

