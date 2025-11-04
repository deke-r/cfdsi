import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link
            className="navbar-brand ms-md-5 text-light fw-semibold"
            to="/cfdsi"
          >
            CFDSI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto text-center me-md-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fw-semibold f_14"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-semibold f_14"
                  to="/cfdsi/about-us/underground-cable-fault-repair-experts"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-semibold f_14"
                  to="/cfdsi/ht-cable-repair-services/high-voltage-cable-fault-detection-repair"
                >
                  HT Cable
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-semibold f_14"
                  to="/cfdsi/lt-cable-repair-services/low-voltage-cable-fault-detection-repair"
                >
                  LT Cable
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-semibold f_14"
                  to="/cfdsi/ofc-cable-repair-services/optical-fiber-cable-fault-repair-detection"
                >
                  Optical Fibre Cable
                </Link>
              </li>

              <li className="nav-item">
                <button
                  type="button"
                  className="btn fw-semibold f_14 rounded-pill"
                  style={{ backgroundColor: "#8e9fb8" }}
                >
                  +91 9319412012
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
