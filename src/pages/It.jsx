import React from 'react';
import ItHero from '../components/It/ItHero';  // Import the ItHero component
import ItPointers from '../components/It/ItPointers';  // Import the ItPointers component
import ItOfferings from '../components/It/ItOfferings';
import ItStudying from '../components/It/ItStudying';
import ItBrochure from '../components/It/ItBrochure'
import ItApply from '../components/It/ItApply';
import ItTestimonials from '../components/It/ItTestimonials';
import ItInovation from '../components/It/ItInovation';
import ItReasons from '../components/It/ItReasons';
import ItPlacement from '../components/It/ItPlacement';
import CompRecruter from '../components/Computer/CompRecruiter';
import ItBanner from '../components/It/ItBanner';
import Footer from '../pages/Footer'
function It() {
  return (
    <div>
      <ItHero />
      <ItPlacement/>
      <CompRecruter/>
      <ItBanner/>  
      <ItInovation/>
      <ItReasons/>
      <ItOfferings />
      <ItBrochure /> 
      <ItPointers />  
      <ItStudying /> 
      <ItApply />
      <ItTestimonials />  
      <Footer/>
    </div>
  );
}

export default It;
