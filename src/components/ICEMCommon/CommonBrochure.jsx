import React, { memo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const CompBrochure = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex justify-center items-center px-4 py-6 bg-white">
      <div className="w-full max-w-7xl bg-[#259CA8] p-6 rounded-3xl flex flex-col md:flex-row md:justify-between md:items-center gap-4 shadow-lg">
        {/* Text Content */}
        <div className="text-white md:max-w-[65%]">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Syllabus</h2>
          <p className="text-sm md:text-base text-gray-200 hidden sm:block">
            Master core engineering domains including robotics, thermodynamics, CAD/CAM, fluid mechanics, and advanced manufacturing systems.
          </p>
        </div>

        {/* Download Button */}
        <button
          onClick={handleScrollToTop}
          className="bg-[#07a3b3] border border-white text-white px-6 py-2 md:py-3 rounded-3xl hover:bg-white hover:text-[#07a3b3] transition-colors duration-300 ease-in-out flex items-center gap-2 text-sm md:text-base font-medium shadow-md"
        >
          <FontAwesomeIcon icon={faDownload} />
          <span>Download Brochure</span>
        </button>
      </div>
    </div>
  );
};

export default memo(CompBrochure);
