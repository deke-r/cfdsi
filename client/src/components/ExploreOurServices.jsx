import React from 'react';
import { Card } from 'react-bootstrap';

import htImg from '../assets/images/htcable.webp';
import ltImg from '../assets/images/ltcable.jpg';
import ofcImg from '../assets/images/section4.jpg';
import ContactBtn from './ContactBtn';
const ServiceCard = ({ title, location, usage, areaType, cableType, testType, description, image }) => {
  return (
    <div className="col-md-4">
      <Card className="service-card shadow-sm h-100">
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body className=''>
          <Card.Title className="fw-semibold text-center">{title}</Card.Title>
          <Card.Text className='mt-4 fw-semibold'>
            <span className=''>Service Location: </span>{location}
          </Card.Text>
          <hr/>
          <Card.Text className='fw-semibold'>
            <span>Usage/Application: </span>{usage}
          </Card.Text>
          <hr/>

          <Card.Text className='fw-semibold'>
            <span>Area Type: </span>{areaType}
          </Card.Text>
          <hr/>

          <Card.Text className='fw-semibold'>
            <span>Cable Type: </span>{cableType}
          </Card.Text>
          <hr/>

          <Card.Text className='fw-semibold'>
            <span>Testing Type: </span>{testType}
          </Card.Text>
          <hr/>

          <Card.Text  className='fw-semibold f_13'>{description}</Card.Text>
          <ContactBtn/>
        </Card.Body>
      </Card>
    </div>
  );
};

const ExploreOurServices = () => {
  return (
    <section className="py-5 my-5 explore-services-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Explore Our Services</h2>
        <div className="row">
          {/* LT Cable Fault Finding Service */}
          <ServiceCard 
            title="LT Cable Fault Finding Services"
            location="ALL LOCATION"
            usage="Distribution"
            areaType="Upper/Under Ground Cable"
            cableType="LT Cable"
            testType="Continuity and Mega Test"
            description="Uncover LT cable faults swiftly with our specialized fault-finding services. Our expert technicians utilize advanced techniques and equipment to pinpoint issues accurately, ensuring minimal disruption to your operations. Trust us to quickly diagnose and resolve LT cable faults, keeping your systems running smoothly."
            image={htImg}
          />
          {/* OFC Cable Fault Finding Service */}
          <ServiceCard 
            title="OFC Cable Fault Finding Services"
            location="ALL LOCATION"
            usage="Distribution"
            areaType="Under Ground Cable"
            cableType="Optical Fiber Cable (OFC)"
            testType="OTDR Test"
            description="Discover seamless Optical Fiber Cable (OFC) fault finding services tailored to your needs. Our skilled technicians employ cutting-edge technology and expertise to swiftly identify and resolve issues, ensuring uninterrupted connectivity. Trust us to efficiently diagnose and address OFC cable faults, keeping your network running at peak performance."
            image={ltImg}
          />
          {/* HT Cable Fault Finding Service */}
          <ServiceCard 
            title="HT Cable Fault Finding Services"
            location="ALL LOCATION"
            usage="Distribution"
            areaType="Upper/Under Ground Cable"
            cableType="HT Cable"
            testType="Continuity and Mega Test"
            description="Experience top-tier HT cable fault finding services designed to keep your operations running smoothly. Our expert technicians utilize advanced techniques and equipment to quickly identify and resolve faults, minimizing downtime. Trust us to efficiently diagnose HT cable issues and provide reliable solutions tailored to your needs."
            image={ofcImg}
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreOurServices;
