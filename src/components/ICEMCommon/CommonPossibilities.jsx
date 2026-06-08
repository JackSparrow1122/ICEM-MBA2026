import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images from assets
import compLab from "../../assets/images/comLab.jpg";
import aidsLab from "../../assets/images/aidslab.avif";
import mechLab from "../../assets/images/MechB1.jpg";
import appleLab from "../../assets/images/sp3.avif";
import canteenImg from "../../assets/images/came/3.png";
import gymImg from "../../assets/images/came/10.png";
import wellnessImg from "../../assets/images/came/11.png";

const facilitiesTop = [
  {
    title: "Computer Engineering Lab",
    description: "State-of-the-art computer lab",
    image: compLab,
    accentColor: "text-[#FAB701]"
  },
  {
    title: "Artificial Intelligence & Data Science",
    description: "Advanced computing and AI-ML lab",
    image: aidsLab,
    accentColor: "text-white"
  },
  {
    title: "Mechanical Lab",
    description: "Modern mechanical tooling and machinery lab",
    image: mechLab,
    accentColor: "text-white"
  }
];

const facilitiesBottom = [
  {
    title: "Apple Lab",
    description: "iOS app design and Apple ecosystem training",
    image: appleLab,
  },
  {
    title: "Canteen",
    description: "Hygienic and spacious campus cafeteria",
    image: canteenImg,
  },
  {
    title: "Gym Facility",
    description: "Equipped fitness and strength center",
    image: gymImg,
  },
  {
    title: "Health & Wellness Center",
    description: "First-aid, nurse assistance, and wellness care",
    image: wellnessImg,
  }
];

function CommonPossibilities() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full bg-[#fbfbfa] px-4 md:px-16 py-12 poppins-regular overflow-hidden flex flex-col gap-10">
      {/* Header */}
      <div className="text-center space-y-2" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#135783] leading-tight">
          Where <span className="text-[#259CA8]">Possibilities</span> Are Infinite
        </h2>
        <p className="text-sm md:text-base text-gray-500 font-medium">
          From tech labs to wellness centers, we have it all
        </p>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto w-full space-y-6">
        
        {/* Top Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilitiesTop.map((item, index) => (
            <div
              key={`top-${index}`}
              className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              
              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <h3 className={`text-xl font-bold ${item.accentColor} transition-colors duration-300`}>
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilitiesBottom.map((item, index) => (
            <div
              key={`bottom-${index}`}
              className="relative h-60 sm:h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              
              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#259CA8]">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommonPossibilities;
