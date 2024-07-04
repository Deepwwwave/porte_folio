import React, { useState, useEffect } from 'react';
import styles from '../../styles/loading-circle.module.css'

const LoadingCircle = ({ duration, onComplete }) => {


  return (
    <div className={`  lg:w-3/4 xl:ml-10 xl:pr-56 2xl:w-3/4 lg:pt-40 mb-40 bg-transparent pb-40 ${styles.loadingCircle}`}>
      <svg className={`mt-6 ${styles.circle}`} viewBox="0 0 36 36">
        <path
          className={styles.circleBg}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={styles.circleProgress}
          strokeDasharray={`${styles.progress}, 100`}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  );
};

export default LoadingCircle;