import React from 'react';
import img from '../assets/images/section2.jpg';
import BannerTop from '../components/BannerTop';
import { Card } from 'react-bootstrap';
import htImg from '../assets/images/section2.jpg';
import ContactBtn from '../components/ContactBtn';

const HtCable = () => {
  return (
    <>
      <BannerTop names="HT Fault Cable Repair" img={img} />

      <div className="container my-5">
        <div className="row justify-content-center align-items-stretch">
          {/* Left Side - Image */}
          <div className="col-md-5 mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={htImg} alt="HT Cable Fault" />
            </Card>
          </div>

          {/* Right Side - Info */}
          <div className="col-md-7">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold text-center fs-4">
                  HT Cable Fault Finding Services
                </Card.Title>

                <Card.Text className="mt-4 fw-semibold">
                  <span>Service Location:</span> ALL LOCATION
                </Card.Text>
                <hr />

                <Card.Text className="fw-semibold">
                  <span>Usage/Application:</span> Distribution
                </Card.Text>
                <hr />

                <Card.Text className="fw-semibold">
                  <span>Area Type:</span> Upper/Under Ground Cable
                </Card.Text>
                <hr />

                <Card.Text className="fw-semibold">
                  <span>Cable Type:</span> HT Cable
                </Card.Text>
                <hr />

                <Card.Text className="fw-semibold">
                  <span>Testing Type:</span> Continuity and Mega Test
                </Card.Text>
                <hr />

                <Card.Text className="fw-semibold f_13">
                  Experience top-tier HT cable fault finding services designed to keep your operations running smoothly.
                  Our expert technicians utilize advanced techniques and equipment to quickly identify and resolve faults,
                  minimizing downtime. Trust us to efficiently diagnose HT cable issues and provide reliable solutions
                  tailored to your needs.
                </Card.Text>

                <div className="mt-4">
                  <ContactBtn />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default HtCable;
