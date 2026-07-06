import { useEffect } from "react";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import ApplyNowButton from './components/ApplyNowButton';
import ICEMVanila from './pages/ICEMVanilla';
import ThankYou from './pages/ThankYou';
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return (
    <Router>
      <div className="relative">
        <title>ICEM Pune - MBA Admissions Open 2026 | Top MBA College in Pune, Maharashtra</title>
        <Navbar />
        <Routes>
          <Route path="/" element={<ICEMVanila title="icemvanilla" />} />
          <Route path="/icemvanilla" element={<ICEMVanila title="icemvanilla" />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <ApplyNowButton />
      </div>
    </Router>
  );
}

export default App;
