import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import gearImage from '../../assets/images/gears.png'; // Import the gear image

function MechBrochure() {
  return (
    <div
      className="flex justify-between items-center bg-[#FFF8F0] text-white shadow-lg h-auto px-8 md:px-16 py-2 md:py-4 poppins-regular relative"
      style={{
        backgroundImage: `url(${gearImage}), url(${gearImage})`,
        backgroundPosition: 'left bottom, right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="w-full bg-[#01224F] p-4 rounded-3xl flex flex-col md:flex-row justify-between items-center">
        {/* Text Content */}
        <div className="max-w-full md:max-w-2/3 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 m-0 text-white">Syllabus</h2>
          <p className="text-lg text-white hidden sm:block">
            Dive into core mechanical domains like robotics, thermodynamics, CAD/CAM, automotive systems, and advanced manufacturing techniques.
          </p>
        </div>

        {/* Download Button */}
        <div className="mt-4 md:mt-4">
          <a
            href="" // replace with your actual file path
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#FFC80] border-2 border-[#FFB700] text-white px-6 py-3 rounded-3xl hover:bg-[#FFB700] hover:text-black hover:border-white transition duration-300 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MechBrochure;
