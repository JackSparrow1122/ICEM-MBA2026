import React from 'react';
import placementImage from '../../assets/images/topplace.avif';

function IntegratedBbaMbaPlacement() {
  return (
    <div className="py-10 w-full flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#555555]">
        College <span className="text-[#259CA8]">Top</span> Placements
      </h1>

      {/* Single Placement Image */}
      <div className="w-full">
        <img
          src={placementImage}
          alt="College Top Placements"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default IntegratedBbaMbaPlacement;
