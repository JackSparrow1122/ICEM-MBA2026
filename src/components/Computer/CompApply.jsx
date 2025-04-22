import React, { memo } from "react";
import backgroundImage from "../../assets/images/plane.avif";

const AdmissionProcess = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="bg-[#6095ff] px-4 md:px-8 lg:px-16 py-10 text-center text-white shadow-lg relative bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-800 opacity-80 z-0" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Admission Process: Get Started Today!
        </h2>
        <p className="text-lg mb-6">
          Follow these simple steps to apply for the Computer Engineering
          programme at ICEM College Pune:
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
          {[...Array(5)].map((_, index) => {
            const stepTexts = [
              "Fill out the online application form on our website.",
              "Submit the required documents (mark sheets, ID, etc.)",
              "Pay the application fee securely online.",
              "Attend the counseling and interview session.",
              "Confirm your seat and join ICEM College!",
            ];

            return (
              <div
                key={index}
                className="relative p-6 shadow-xl w-full text-white"
                style={{ backgroundColor: "rgba(139, 197, 255, 0.5)" }}
              >
                <div
                  className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "rgba(0, 102, 204, 0.9)" }}
                >
                  {index + 1}
                </div>
                <p className="text-lg">{stepTexts[index]}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-20 px-8 md:px-16 py-4">
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-2">
            Admissions Open for 2025!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Secure your seat & start your journey in the world of technology with ICEM!
          </p>
          <button
            onClick={scrollToTop}
            className="bg-[#F7F0FC] text-[#161e3a] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#2241ac] hover:text-[#F7F0FC] transition-all duration-300 ease-in-out"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(AdmissionProcess);
