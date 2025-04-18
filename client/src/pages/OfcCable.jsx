import React from 'react';
import img from '../assets/images/section2.jpg';
import BannerTop from '../components/BannerTop';
import { Card } from 'react-bootstrap';
import ltImg from '../assets/images/section3.jpg'; // Replace with your actual image
import ContactBtn from '../components/ContactBtn';

const OfcCable = () => {
  return (
    <>
      <BannerTop names="OFC Fault Cable Repair" img={img} />

      <div className="container my-5">
        <div className="row justify-content-center align-items-stretch">
          {/* Left Side - Image */}
          <div className="col-md-5 mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={ltImg} alt="OFC Cable Fault" />
            </Card>
          </div>

          {/* Right Side - Details */}
          <div className="col-md-7">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold text-center fs-4">
                  OFC Cable Fault Finding Services
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
                  <span>Area Type:</span> Under Ground Cable
                </Card.Text>
                <hr />

                <Card.Text className="fw-semibold">
                  <span>Cable Type:</span> Optical Fiber Cable (OFC)
                </Card.Text>
                <hr />

                <Card.Text className="fw-semibold">
                  <span>Testing Type:</span> OTDR Test
                </Card.Text>
                <hr />

                <Card.Text className="fw-semibold f_13">
                  Discover seamless Optical Fiber Cable (OFC) fault finding services tailored to your needs. Our skilled
                  technicians employ cutting-edge technology and expertise to swiftly identify and resolve issues,
                  ensuring uninterrupted connectivity. Trust us to efficiently diagnose and address OFC cable faults,
                  keeping your network running at peak performance.
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

export default OfcCable;
