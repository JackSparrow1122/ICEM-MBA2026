import Mechhero from '../components/Mech/MechHero'  // Import the Mechhero component (adjust the path as needed)
import MechPointers from '../components/Mech/MechPointers'
import MechInovation from "../components/Mech/MechInovation.jsx"
import MechOfferings from '../components/Mech/MechOfferings'
import MechStudying from '../components/Mech/MechStudying'
import MechBrochure from '../components/Mech/MechBrochure'
import MechApply from '../components/Mech/MechApply'
import MechTestimonials from '../components/Mech/MechTestimonials'
import MechReasons from '../components/Mech/MechReasons.jsx'
import MechRecruiters from '../components/Mech/MechRecruiters.jsx'
import MechPlacement from '../components/Mech/MechPlacement.jsx'
import Footer from '../pages/Footer'
import MechBanner from '../components/Mech/MechBanner.jsx'
function Mechanical() {
  return (
    <div>
      <Mechhero />
      <MechPlacement/>
      <MechRecruiters/> 
      <MechBanner/> 
      <MechInovation/>
      <MechReasons/>
      <MechOfferings />
      <MechBrochure />
      <MechPointers />  
      <MechStudying /> 
      <MechTestimonials />
      <MechApply />
      <Footer/>
    </div>
  )
}

export default Mechanical
