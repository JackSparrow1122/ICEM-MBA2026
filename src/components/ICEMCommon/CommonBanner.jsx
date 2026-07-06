import React, { memo, useCallback } from 'react';

const CompBanner = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="px-4 md:px-16 py-8">
      <div className="bg-gradient-to-br from-[#F37121] to-[#D75A13] rounded-3xl shadow-2xl px-6 py-12 md:py-16 text-white border border-[#FCFAEE]/20 max-w-6xl mx-auto relative overflow-hidden group">
        {/* Decorative background blur element */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#FCFAEE]/10 rounded-full blur-2xl group-hover:bg-[#FCFAEE]/20 transition-colors duration-500"></div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10 space-y-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Looking for the Best Engineering College in Pune?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl font-light text-gray-200">
            Your search ends at <span className="text-[#FCFAEE] font-bold">ICEM!</span>
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={scrollToTop}
              className="bg-[#FCFAEE] text-[#F37121] font-bold py-4 px-10 rounded-full shadow-lg shadow-[#F37121]/30 hover:bg-white hover:text-[#D75A13] transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.98]"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CompBanner);
