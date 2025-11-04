import React from 'react';
import img from '../assets/images/section2.jpg';
import BannerTop from '../components/BannerTop';
import { Card } from 'react-bootstrap';
import htImg from '../assets/images/ltcable.jpg';
import ContactBtn from '../components/ContactBtn';
import PageHelmet from '../components/PageHelmet'
const HtCable = () => {
  return (
    <>

<PageHelmet
  title="LT Cable Repair & Fault Detection | CFDSI Low Voltage Specialists"
  description="CFDSI offers reliable LT cable repair and low voltage fault detection services. Our team ensures minimal downtime with precision cable testing and jointing solutions."
  keywords="LT cable repair, Low voltage cable fault detection, Underground cable repair, Cable jointing services, Emergency cable repair, Cable testing, Delhi cable repair, Cable fault locator"
  canonicalUrl="https://cfdsi.com/cfdsi/lt-cable-repair-services/low-voltage-cable-fault-detection-repair"
/>


      <BannerTop names="LT Fault Cable Repair" img={img} />

      <div className="container my-5">
        <div className="row justify-content-center align-items-stretch">
          {/* Left Side - Image */}
          <div className="col-md-5 mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={htImg} alt="LT Cable Fault" />
            </Card>
          </div>

          {/* Right Side - Info */}
          <div className="col-md-7">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold text-center fs-4">
                  LT Cable Fault Finding Services
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
                  <span>Cable Type:</span> LT Cable
                </Card.Text>
                <hr />

                <Card.Text className="fw-semibold">
                  <span>Testing Type:</span> Continuity and Mega Test
                </Card.Text>
                <hr />

                <Card.Text className="fw-semibold f_13">
                  Uncover LT cable faults swiftly with our specialized fault-finding services. Our expert technicians utilize advanced
                  techniques and equipment to pinpoint issues accurately, ensuring minimal disruption to your operations. Trust us to
                  quickly diagnose and resolve LT cable faults, keeping your systems running smoothly.
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
