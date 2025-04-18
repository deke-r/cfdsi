import React from 'react';
import '../styles/ServiceCard.css';
import ContactBtn from './ContactBtn';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="card service-card h-100 d-flex flex-column shadow-sm border-0">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text f_16 fw-semibold">{description}</p>
        </div>
        <div className="mt-3">
          <ContactBtn name="Know More" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
