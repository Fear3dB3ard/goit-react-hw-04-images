import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.Loader}>
    <div className={styles.Spinner}></div>
  </div>
);

export default Loader;
