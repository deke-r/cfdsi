import React, { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import HtCable from "./pages/HtCable";
import LtCabel from "./pages/LtCabel";
import OfcCable from "./pages/OfcCable";
import ScrollToTop from "./ScrollToTop";
import ThankYou from "./pages/ThankYou";

const AppContent = () => {
  const location = useLocation();

  // List of routes where Navbar and Footer should be hidden
  const hideLayout = ["/thank-you"];

  useEffect(() => {
    // --- Google Analytics (gtag.js) ---
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-HT7FCJV8YM";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-HT7FCJV8YM");

    // --- Google Tag Manager ---
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-MZSB4BBG");
  }, []);

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MZSB4BBG"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      <ScrollToTop />

      {/* Conditionally render Navbar/Footer */}
      {!hideLayout.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cfdsi/about-us/underground-cable-fault-repair-experts"
          element={<About />}
        />
        <Route
          path="/cfdsi/ht-cable-repair-services/high-voltage-cable-fault-detection-repair"
          element={<HtCable />}
        />
        <Route
          path="/cfdsi/lt-cable-repair-services/low-voltage-cable-fault-detection-repair"
          element={<LtCabel />}
        />
        <Route
          path="/cfdsi/ofc-cable-repair-services/optical-fiber-cable-fault-repair-detection"
          element={<OfcCable />}
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      {!hideLayout.includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
