import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ children }) => (
  <div className={styles.heading}>{children}</div>
);

Comment.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
