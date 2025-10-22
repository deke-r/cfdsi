import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import HtCable from './pages/HtCable';
import LtCabel from './pages/LtCabel';
import OfcCable from './pages/OfcCable';
import ScrollToTop from './ScrollToTop';
import ThankYou from './pages/ThankYou';

// ✅ Create a wrapper to handle conditional layout
const Layout = () => {
  const location = useLocation();
  const hideLayout = location.pathname === '/thank-you'; // check route

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cfdsi/about-us/underground-cable-fault-repair-experts" element={<About />} />
        <Route path="/cfdsi/ht-cable-repair-services/high-voltage-cable-fault-detection-repair" element={<HtCable />} />
        <Route path="/cfdsi/lt-cable-repair-services/low-voltage-cable-fault-detection-repair" element={<LtCabel />} />
        <Route path="/cfdsi/ofc-cable-repair-services/optical-fiber-cable-fault-repair-detection" element={<OfcCable />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
};

export default App;
