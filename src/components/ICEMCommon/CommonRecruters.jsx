import React, { useEffect, useState } from 'react';

const CompRecruiter = () => {
  const [isVisible, setIsVisible] = useState(true);

  const logos = [
    '/logos/schlumberger.avif',
    '/logos/sas-min.avif',
    '/logos/yash-min.avif',
    '/logos/philips-min.avif',
    '/logos/jaspay-min.avif',
    '/logos/veritas-min.avif',
    '/logos/fis-min.avif',
    '/logos/infosys-min.avif',
    '/logos/kpit-min.avif',
    '/logos/nttdata-min.avif',
    '/logos/palo-min.avif',
    '/logos/Persistent-min.avif',
    '/logos/Tcs-min.avif',
    '/logos/dataaxle-min.avif',
    '/logos/tetrapak.avif',
    '/logos/thermax.avif',
    '/logos/mastercard.avif',
    '/logos/nutanix.avif',
    '/logos/faurecia.avif',
    '/logos/force.avif',
    '/logos/techM.avif',
    '/logos/bridgestone.avif',
    '/logos/thy.avif',
    '/logos/bluestar.avif',
    '/logos/jade.avif',
    '/logos/Servicenow.avif',
    '/logos/clsa.avif',
    '/logos/Datamatics.avif',
    '/logos/piaggio.avif',
    '/logos/mantruck_.avif',
    '/logos/kinatic.avif'
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="logo-slider-section py-4 roboto-regular">
      <div className="text-center mb-4">
        <h2 className="text-3xl lg:text-4xl xl:text-4xl font-bold">
          Top <span className='text-[#259CA8]'>Recruiters</span>
        </h2>
      </div>
      <div className="logo-slider relative overflow-hidden w-full">
        <div className={`logo-slider-track flex ${isVisible ? 'animate' : ''}`}>
          {/* Map over the logos and display them */}
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-16 sm:h-20 max-w-[120px] object-contain"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-16 sm:h-20 max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f2f7fc] z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f2f7fc] z-10" />
      </div>

      <style>{`
        .logo-slider {
          position: relative;
          padding: 0 20px;
        }

        .logo-slider-track {
          display: flex;
          width: fit-content;
        }

        .logo-slider-track.animate {
          animation: slide 40s linear infinite;
        }

        .logo-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-slider:hover .logo-slider-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .logo-slider-track.animate {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};

export default CompRecruiter;
