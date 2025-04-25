import React from 'react';
import '../styles/ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ image, title, description,url }) => {
  return (
    <div className="card service-card h-100 d-flex flex-column shadow-sm border-0">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text f_16 fw-semibold">{description}</p>
        </div>
        <div className="mt-3">
          <Link to={url}>
        <button

      className="btn bg_b text-light rounded-pill mt-3 px-3 py-2 f_14 fw-semibold"
    >
      Know More
    </button>
    </Link>

        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
