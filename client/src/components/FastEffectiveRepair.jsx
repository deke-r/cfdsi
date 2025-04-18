import React from 'react';
import ContactBtn from './ContactBtn';

const FastEffectiveRepair = ({ title, paragraphs, image, bgColor = '#0D141F' }) => {
  return (
    <section className="py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6 mb-4 mb-md-0 order-2 order-md-1">
            <h2 className="mb-3 fw-bold f_50 text-light">{title}</h2>
            {paragraphs.map((text, index) => (
              <p key={index} className="fw-semibold f_16 text-light">
                {text}
              </p>
            ))}
            <ContactBtn />
          </div>

          {/* Image Content */}
          <div className="col-md-6 text-center order-1 order-md-2">
            <img 
              src={image} 
              alt="HT LT OFC Cable Repair" 
              className="img-fluid rounded" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastEffectiveRepair;
