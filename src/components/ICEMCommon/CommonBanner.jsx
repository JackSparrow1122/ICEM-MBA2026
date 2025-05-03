import React, { memo } from 'react';

const CompBanner = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-4 md:py-8 px-4 md:px-8 lg:px-16 sm:px-12 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out bg-white">
      <div className="mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s text-[#135783]">
          Looking for the Best  Engineering College in Pune?
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-semibold mb-2 md:mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Your search ends at <span className="text-[#259CA8] font-bold">ICEM!</span>
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={scrollToTop}
            className="bg-[#259CA8] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-[#259CA8] border-2 border-[#259CA8] transition-all duration-300 ease-in-out"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CompBanner);
