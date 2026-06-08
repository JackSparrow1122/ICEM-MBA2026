import React from "react";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './pages/Navbar';
import ApplyNowButton from './components/ApplyNowButton'; 
import ICEMVanila from './pages/ICEMVanilla';

function App() {
  return (
    <Router>
      <div className="relative">
        <Helmet>
          <title>ICEM | ICEMVanilla</title>
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<ICEMVanila title="icemvanilla" />} />
          <Route path="/icemvanilla" element={<ICEMVanila title="icemvanilla" />} />
        </Routes>
        <ApplyNowButton />
      </div>
    </Router>
  );
}

export default App;
