import React from 'react';

const ContactBtn = (props) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToBottom}
      className="btn bg_b text-light rounded-pill mt-3 px-3 py-2 f_14 fw-semibold"
    >
      {props.name ? props.name : 'Contact Us Today'}
    </button>
  );
};

export default ContactBtn;
