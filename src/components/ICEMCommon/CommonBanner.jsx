import React, { memo, useCallback } from 'react';

const CompBanner = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg px-4 sm:px-8 md:px-12 lg:px-16 py-8 transition-transform duration-700 ease-in-out">
      <div className="text-center max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#135783] mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Looking for the Best Engineering College in Pune?
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Your search ends at <span className="text-[#259CA8] font-bold">ICEM!</span>
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className="bg-[#259CA8] text-white font-bold py-3 px-8 rounded-full shadow-md border-2 border-[#259CA8] hover:bg-white hover:text-[#259CA8] transition-all duration-300 ease-in-out"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CompBanner);
