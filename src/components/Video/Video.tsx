import React from 'react';
import styles from './Video.module.scss';

export const Video = () => (
  <div className={styles.videoContainer}>
    <video
      src='/path/to/your/video.mp4'
      className={styles.video}
      autoPlay
      loop
      muted
    />
  </div>
);
