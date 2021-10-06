import React from 'react';
import Heading from './Heading';
import Button from '../common/Button';
import styles from './Overview.module.scss';

const data = [
  { title: 'Document owner', value: 'Vardenis Pavardenis' },
  { title: 'Creation date', value: '2020.03.10 12:00' },
  { title: 'Deadline', value: '2020.03.21 14:00' },
];

const Overview = () => (
  <div className={styles.overview}>
    <Heading>Overview</Heading>
    <div className={styles.content}>
      {data.map((item) => (
        <div key={item.value}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.value}>{item.value}</p>
        </div>
      ))}
    </div>
    <div className={styles.buttonWrapper}>
      <Button title="Show all participants" />
    </div>
  </div>
);

export default Overview;
