import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ItReasons() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const reasons = [
    {
      icon: "🖥",
      title: "Industry-Integrated Curriculum",
      desc: "Learn trending tech like AI & Cloud computing!",
    },
    {
      icon: "🚀",
      title: "Live Projects & Internships",
      desc: "Gain hands-on experience with real-world projects!",
    },
    {
      icon: "🎓",
      title: "Expert Faculty & Industry Mentors",
      desc: "Learn from top professionals!",
    },
    {
      icon: "💼",
      title: "Top Placements",
      desc: "Get hired by leading tech giants & startups!",
    },
    {
      icon: "🌍",
      title: "Global Career Prospects",
      desc: "Opportunities in MNCs across the world!",
    },
    {
      icon: "🏆",
      title: "Hackathons & Coding Competitions",
      desc: "Compete, innovate & build solutions!",
    },
    {
      icon: "🏫",
      title: "State-of-the-Art Labs",
      desc: "High tech IT & Apple labs!",
    },
    {
      icon: "🎉",
      title: "Exciting Campus Life",
      desc: "Sports, events & tech fests to fuel your passion!",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 py-10 bg-[#F7F0FC]">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Why Choose <span className="text-[#390161]">ICEM</span> for Your{" "}
        <span className="text-[#390161]">IT Engineering</span> Journey?
      </h2>

      {/* Grid Container */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-xl hover:border-2 hover:border-[#390161] transition-all duration-300"
          >
            <div className="text-4xl text-[#390161] mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#390161] mb-2">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItReasons;
