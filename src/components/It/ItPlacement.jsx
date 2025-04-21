import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import profile images
import johnDoeImage from '../../assets/images/bca/sidharth.avif';
import janeSmithImage from '../../assets/images/bca/shwetank.avif';
import arjunPatelImage from '../../assets/images/bca/Vishwajeet_Mahendra_Ranaware.png';
import snehaRaoImage from '../../assets/images/bca/amitsing.avif';
import aliKhanImage from '../../assets/images/bca/poornima.avif';
import meeraDasImage from '../../assets/images/bca/kushal.avif';

// Profile data
const profiles = [
  {
    name: "Mr. Siddhant Kadam",
    batch: "(Batch : 2024-25)",
    ctc: "27",
    image: johnDoeImage,
  },
  {
    name: "Mr. Shwetank Upadhyay",
    batch: "(Batch : 2024-25)",
    ctc: "27",
    image: janeSmithImage,
  },
  {
    name: "Mr. Vishwajeet",
    batch: "(Batch : 2024-25)",
    ctc: "21",
    image: arjunPatelImage,
  },
  {
    name: "Mr. Amitsingh Tanwar",
    batch: "(Batch : 2024-25)",
    ctc: "21",
    image: snehaRaoImage,
  },
  {
    name: "Ms. Poornima Theurkar",
    batch: "(Batch : 2024-25)",
    ctc: "21",
    image: aliKhanImage,
  },
  {
    name: "Mr. Kushal Swamy",
    batch: "(Batch : 2024-25)",
    ctc: "21",
    image: meeraDasImage,
  },
];

function ItPlacement() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-10 px-4 sm:px-6 md:px-8 bg-white">
      {/* Heading */}
      <h1
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#555555]"
        data-aos="fade-up"
      >
        Our <span className="text-[#A540FF]">Top</span> Placements
      </h1>

      {/* Responsive Profiles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 border-[#A540FF] object-cover object-top"
              loading="lazy"
            />
            <div className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap">
              {profile.name}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">{profile.batch}</div>

            {/* CTC Tag */}
            <div className="bg-gradient-to-l from-[#DC8620] via-[#FDD951] to-[#DC8620] px-3 py-1 rounded-full text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center gap-1">
              <span className="font-medium">CTC</span>
              <span className="text-lg sm:text-xl md:text-2xl">{profile.ctc}</span>
              <span className="font-medium">LPA</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItPlacement;
