import CompHero from "../components/Computer/CompHero"; // Import CompHero
import CompPointers from "../components/Computer/CompPointers"; // Import CompPointers
import CompStudying from "../components/Computer/CompStudying";
import CompBrochure from "../components/Computer/CompBrochure";
import CompRecruiter from "../components/Computer/CompRecruiter";
import ComCreative from "../components/Computer/ComCreative";
import ComReasons from "../components/Computer/ComReasons";
import Compofferings from "../components/Computer/Compoffrings";
import ComPlacement from "../components/Computer/ComPlacement";
import CompBanner from "../components/Computer/CompBanner";
import CompApply from "../components/Computer/CompApply"
import CompTestimonials from '../components/Computer/CompTestimonials'
import Footer from '../pages/Footer'
function Computer() {
  return (
    <div>
      <CompHero />
      <ComPlacement/>
      <CompRecruiter />
      <CompBanner/>
      <ComCreative/>
      <ComReasons/>
      <Compofferings/>
      <CompBrochure />
      <CompPointers />
      <CompStudying />
      <CompTestimonials/>
      <CompApply/>
      <Footer/>
    </div>
  );
}

export default Computer;
