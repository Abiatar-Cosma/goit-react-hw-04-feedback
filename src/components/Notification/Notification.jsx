import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Setăm vizibilitatea la true după ce componenta este montată
    setIsVisible(true);
  }, []);

  return (
    <p className={`${styles.notification} ${isVisible ? styles.fadeIn : ''}`}>
      {message}
    </p>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;