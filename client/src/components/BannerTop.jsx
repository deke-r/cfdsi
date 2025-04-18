import React from 'react';

const BannerTop = (props) => {
  return (
    <section
      className="banner-top mt-5"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="banner-overlay">
        <span>{props.names}</span>
      </div>
    </section>
  );
};

export default BannerTop;
