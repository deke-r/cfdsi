import React from 'react';
import img from '../assets/images/istockphoto-1353480176-612x612.jpg'
const WhyChooseUs = () => {
  return (
    <section className="py-5  why_choose_us_div">
      <div className="container">
        <div className="row align-items-center">

        <div className="col-md-5 text-center">
            <img 
              src={img} 
              alt="Why Choose Us" 
              className="img-fluid rounded shadow-sm"
            />
          </div>
          
          {/* Text Content */}
          <div className="col-md-7 mb-4 mb-md-0">
            <h2 className="fw-bold mb-4">Why Choose Us</h2>
            <p className="fw-semibold f_16">
              When it comes to choosing a reliable partner for HT, LT, and OFC cable repair, we stand out for several compelling reasons.
              Our team of experienced technicians is dedicated to delivering top-notch services that prioritize efficiency, reliability, and
              customer satisfaction. With years of expertise in the field, we specialize in repairing high-tension (HT), low-tension (LT),
              and optical fiber cable (OFC) with precision and effectiveness. Whether your cables are experiencing underground faults,
              above-ground damages, or connectivity issues, we have the skills and resources to address them promptly.
            </p>
            <p className="fw-semibold f_16">
              At our company, we understand the critical importance of uninterrupted connectivity for your operations. That's why we offer
              swift response times and flexible scheduling to minimize downtime and ensure your cables are back in optimal working condition
              as soon as possible. When you choose us for your HT, LT, and optical fiber cable (ofc) repair needs, you can trust that you're
              partnering with a reliable team that is dedicated to delivering superior results. Experience the difference with our seamless
              solutions tailored to meet your specific requirements. Contact us today to learn more and schedule your repair service.
            </p>
          </div>

          {/* Optional Image / Illustration */}
       
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
