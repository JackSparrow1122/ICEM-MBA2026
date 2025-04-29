import React, { memo } from 'react';

const CompBanner = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-4 md:py-8 px-4 md:px-8 lg:px-16 sm:px-12 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out">
      <div className="mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Looking for the Best Computer Engineering College in Pune?
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-semibold mb-2 md:mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Your search ends at <span className="text-[#134C93] font-bold">ICEM!</span>
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-4">
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

export default memo(CompBanner);
