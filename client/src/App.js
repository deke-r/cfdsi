import React from 'react'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import HtCable from './pages/HtCable';
import LtCabel from './pages/LtCabel';
import OfcCable from './pages/OfcCable';

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/ht-cabel" element={<HtCable />} />
      <Route path="/lt-cabel" element={<LtCabel />} />
      <Route path="/ofc-cabel" element={<OfcCable />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    
    </>
  )
}

export default App