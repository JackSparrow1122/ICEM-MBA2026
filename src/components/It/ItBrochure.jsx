import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import gearImage from '../../assets/images/circuit-dots.png'; // Ensure path is correct

const MechBrochure = () => {
  const handleDownloadClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      className="flex justify-between items-center bg-[#F7F0Fc] text-white shadow-lg h-auto px-4 md:px-8 lg:px-16 py-2 md:py-4 poppins-regular relative"
      style={{
        backgroundImage: `url(${gearImage}), url(${gearImage})`,
        backgroundPosition: 'left bottom, right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="w-full bg-[#390161] p-4 rounded-3xl flex flex-col md:flex-row justify-between items-center">
        {/* Text Content */}
        <div className="max-w-full md:max-w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-white">Syllabus</h2>
          <p className="text-lg text-white hidden sm:block">
            Dive into core mechanical domains like robotics, thermodynamics, CAD/CAM, automotive systems, and advanced manufacturing techniques.
          </p>
        </div>

        {/* Download Button */}
        <div className="mt-2 md:mt-4">
          <a
            href="" // Replace with actual download link
            onClick={handleDownloadClick}
            className="bg-[#390161] border-2 border-white text-white px-6 py-3 rounded-3xl hover:border-white transition duration-300 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MechBrochure;
