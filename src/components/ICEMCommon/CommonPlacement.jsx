import React from 'react';
import placementImage from '../../assets/images/topplace.avif';

function IntegratedBbaMbaPlacement() {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-8 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#555555]">
        College <span className="text-[#259CA8]">Top</span> Placements
      </h1>

      {/* Single Placement Image */}
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <img
          src={placementImage}
          alt="College Top Placements"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default IntegratedBbaMbaPlacement;
