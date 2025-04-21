import React from 'react';
import Slider from 'react-slick';
import vandar from '../../assets/images/MECH-images/abc.avif'; 
import micro from '../../assets/images/MECH-images/Microsoft.avif'; 
import ias from '../../assets/images/MECH-images/ias.avif'; 
import tesla from '../../assets/images/MECH-images/tesla.avif'; 
import army from '../../assets/images/MECH-images/army.avif'; 
import abn from '../../assets/images/MECH-images/abn.avif'; 
import hansala from '../../assets/images/Hansala.png';
import arpita from '../../assets/images/Arpita.png';
import nikhil from '../../assets/images/Nikhil.png';
import ankur from '../../assets/images/Ankur.png';
import nilesh from '../../assets/images/Nileshkumar.png';
import apurv from '../../assets/images/Apoorva.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Successor Data
const successors = [
  { id: 1, name: 'Hansala', image: hansala, details: (<>'An Indira alumnus who graduated in 2013, secured a position as a Mechanical Engineer at Vanderlande. Presently, he is based in Jidah, <strong>Saudi Arabia</strong>.'</>), location: 'Jidah, Saudi Arabia', degree: '(Mechanical Engineer)', companyLogo: vandar },
  { id: 2, name: 'Arpita Jha', image: arpita, details: (<>'An exemplary scholar from Indira, initially served as a content writer. She received an <strong>Internship+ offer from Microsoft</strong>, but instead she chose her entrepreneurial journey.'</>), location: 'India', degree: '(Computer Engineering)', companyLogo: micro },
  { id: 3, name: 'Nikhil Pawar', image: nikhil, details: (<>'A former student of Indira, commenced his professional journey at Bridgestone in 2013 & presently holds the esteemed position of a <strong>global supply manager at Tesla in Germany</strong>.</>), location: 'Germany', degree: '(Mechanical Engineering)', companyLogo: tesla },
  { id: 4, name: 'Major Ankur Tyagi', image: ankur, details: (<>'One of our esteemed students, holds the rank of Major in the <strong>Indian Army</strong>. Indira takes immense pride in having him as an alumnus.'</>), location: 'India', degree: '(Mechanical Engineering)', companyLogo: army },
  { id: 5, name: 'Nileshkumar Kshirsagar', image: nilesh, details: (<>'An alumnus of Indira who graduated in 2011, has displayed exceptional achievements and is currently serving as an <strong>IAS officer</strong> in the Chhattisgarh Cadre. (MBA)'</>), location: 'Chhattisgarh, India', degree: '(MBA)', companyLogo: ias },
  { id: 6, name: 'Apoorva Kakkar', image: apurv, details: (<>'Our alumni Apoorva Kakkar, a Mechanical Engineering passout works as a Business Data Modeller at <strong>ABN Amro Bank, Netherlands.</strong>'</>), location: 'Netherlands', degree: '(Mechanical Engineering)', companyLogo: abn },
];

const MechJourny = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 2 cards per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // For tablet and desktop
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // For mobile
    ],
    prevArrow: (
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full">
        <i className="fas fa-chevron-left"></i> {/* Left arrow icon */}
      </div>
    ),
    nextArrow: (
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full">
        <i className="fas fa-chevron-right"></i> {/* Right arrow icon */}
      </div>
    ),
  };

  return (
    <div className="w-full h-full bg-white shadow-lg px-2 mt-6 overflow-hidden  ">
      <h3 className="text-center mb-4 font-bold text-3xl md:text-4xl text-[#0c3249] mb-2">Alumni <span className='text-[#6095ff]'>Journey</span></h3>
      <Slider {...settings}>
        {successors.map((successor) => (
          <div key={successor.id} className="w-full bg-white rounded-lg shadow-lg p-4 flex items-center relative mb-8 border border-[#6095ff] mr-2">
            {/* Company Logo on left side */}
            <div className="absolute top-4 left-4 p-2 bg-white ">
              <img
                src={successor.companyLogo}
                alt={`${successor.name} Company Logo`}
                className="w-16 h-10 object-contain"
              />
            </div>

            {/* Successor's Image (Centered within card) */}
            <div className="flex justify-center items-center w-full h-30 rounded-lg overflow-hidden px-16 ">
              <img
                src={successor.image}
                alt={successor.name}
                className="w-20 h-20 object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Successor's Name and Degree */}
            <div className="text-center font-bold mb-2">
              <h3 className="text-lg font-semibold ">{successor.name}</h3>
              <p className="text-xs text-gray-600">{successor.degree}</p>
              <p className="text-xs text-gray-600">{successor.location}</p>
            </div>

            {/* Successor's Details */}
            <div className="text-center">
              <p className="text-xs text-gray-600">{successor.details}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MechJourny;
