import React from 'react';
import ServiceCard from './ServiceCard';

import htImg from '../assets/images/htcable.webp';
import ltImg from '../assets/images/ltcable.jpg';
import ofcImg from '../assets/images/section4.jpg';

const OurServices = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Our Services</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <ServiceCard
              image={htImg}
              title="HT Cable Repair"
              description="Experience top-tier HT cable repair services designed to minimize downtime and ensure optimal performance. Our expert technicians deliver swift solutions, addressing faults promptly to keep your high-tension cables running smoothly. Trust us for reliable, efficient repairs tailored to your needs."
              url='/cfdsi/ht-cable-repair-services/high-voltage-cable-fault-detection-repair'
            />
          </div>
          <div className="col-md-4 mb-4">
            <ServiceCard
              image={ltImg}
              title="LT Cable Repair"
              description="Seeking efficient LT cable repair services? Look no further! Our expert team specializes in addressing low-tension cable issues swiftly and effectively. We ensure minimal disruption to your operations."
              url='/cfdsi/lt-cable-repair-services/low-voltage-cable-fault-detection-repair'
            />
          </div>
          <div className="col-md-4 mb-4">
            <ServiceCard
              image={ofcImg}
              title="OFC Cable Repair"
              description="Looking for expert OFC cable repair services? Our skilled technicians repair optical fiber cables promptly and efficiently, ensuring seamless connectivity and reliable performance."
              url='/cfdsi/ofc-cable-repair-services/optical-fiber-cable-fault-repair-detection'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
