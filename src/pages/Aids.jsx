import React from 'react';
import AidsHero from '../components/Aids/AidsHero';
import AidsPointers from '../components/Aids/AidsPointers';
import AidsInovation from '../components/Aids/AidsInovation'
import AidsReasons from '../components/Aids/AidsReasons';
import AidsStudying from '../components/Aids/AidsStudying'
import AidsPlacement from '.././components/Aids/AidsPlacement'
import AidsBrochure from '../components/Aids/AidsBrochure'
import AidsOfferings from "../components/Aids/AidsOfferings"
import AidsBanner from '../components/Aids/AidsBanner';
import AidsApply from '../components/Aids/AidsApply'
import AidsTestimonials from '../components/Aids/AidsTestimonials'
import AidsRecruiters from '../components/Aids/AidsRecruiters'
import Footer from '../pages/Footer';
function Aids() {
  return (
    <div>
      <AidsHero />  
      <AidsPlacement/>
      <AidsRecruiters/>
      <AidsBanner/>
      <AidsInovation/>
      <AidsReasons/>
      <AidsOfferings/>
      <AidsBrochure /> 
      <AidsPointers />
      <AidsStudying/>
      <AidsApply/>
      <AidsTestimonials />
      <Footer/>
    </div>
  );
}

export default Aids;
