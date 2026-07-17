import React, { memo, useCallback } from 'react';

const CompBanner = () => {
  const handleApplyClick = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-apply-modal"));
  }, []);

  return (
    <div
      className="flex justify-between items-center bg-contain bg-center text-white shadow-lg py-2 px-4 md:px-8 lg:px-16 poppins-regular"
    >
      <div className="w-full bg-[#F37121] p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-0 md:whitespace-nowrap">
            Everything about ICEM's MBA Programme, in one place.
          </h2>
        </div>

        <button
          onClick={handleApplyClick}
          className="bg-[#D75A13] border-2 border-white text-white px-8 py-3 rounded-3xl hover:bg-[#F37121] transition duration-300 flex items-center justify-center cursor-pointer font-bold"
        >
          <span>Apply Now</span>
        </button>
      </div>
    </div>
  );
};

export default memo(CompBanner);
