import React, { memo } from "react";
import backgroundImage from "../../assets/images/plane.avif";

const AdmissionProcess = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="bg-[#259CA8] px-4 md:px-8 lg:px-16 py-10 text-center text-white shadow-lg relative bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#135783] opacity-85 z-0" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Admission Process: How to Apply? 
        </h2>
        <p className="text-lg mb-6">
        Getting into ICEM is easy! Follow these steps:
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto justify-center max-w-5xl">

          {[
            " Check eligibility criteria (12th Science with PCM).",
            "Apply online through our official website",
            "Appear for counseling and secure your seat!",
          ].map((text, index) => (
            <div
              key={index}
              className="relative p-6 shadow-xl w-full text-white"
              style={{ backgroundColor: "rgba(38, 144, 160, 0.5)" }} // translucent primary
            >
              <div
                className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#135783" }}
              >
                {index + 1}
              </div>
              <p className="text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
<div className="relative z-20 px-8 md:px-16 py-4">
  <div className="text-center mb-2">
    <button
      onClick={scrollToTop}
      className="bg-white text-[#135783] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#135783] hover:text-white transition-all duration-300 ease-in-out"
    >
      Apply Now
    </button>
  </div>
</div>

      </div>
  );
};

export default memo(AdmissionProcess);
