import React from 'react';
import ProgramImage from '../../assets/images/IT-Images/ITIovation.avif';

const ItInovation = () => {
  return (
    <div className="flex flex-col px-4 md:px-8 lg:px-16 py-6 mb-4">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={ProgramImage}
            alt="Innovation in IT"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-center md:text-left text-[#390161]">
            Where Innovation Meets Technology!
          </h2>
          <p className="text-md sm:text-2xl md:text-xl text-gray-600 tracking-wide mt-4 px-2">
            From cloud computing to cybersecurity, and from AI-driven applications to web development, 
            Information Technology (IT) is the driving force behind today’s digital revolution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItInovation;
