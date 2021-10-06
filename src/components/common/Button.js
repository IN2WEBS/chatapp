import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ title }) => (
  <button type="button" className={styles.button}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
