import React from 'react';
import ContactBtn from './ContactBtn';

const CableFaultRepair = ({ title, paragraphs, image }) => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6 mb-4 mb-md-0 order-2 order-md-1">
            <h1 className="mb-3 fw-bold f_50">{title}</h1>
            {paragraphs.map((para, index) => (
              <p key={index} className="fw-semibold f_16">{para}</p>
            ))}
            <ContactBtn />
          </div>

          {/* Image Content */}
          <div className="col-md-6 text-center order-1 order-md-2">
            <img 
              src={image} 
              alt="Cable Fault Repair Visual" 
              className="img-fluid rounded" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CableFaultRepair;
