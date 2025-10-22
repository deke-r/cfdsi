// src/pages/ThankYou.jsx
import React from 'react';
import styles from '../styles/ThankYou.module.css';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>🎉 Thank You!</h1>
        <p className={styles.message}>
          Your message has been sent successfully. Our team will contact you soon.
        </p>
        <Link to="/" className={styles.homeBtn}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
