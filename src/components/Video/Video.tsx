import React from 'react';
import styles from './Video.module.scss';
import { videos } from '../../img';

export const Video = () => (
  <div className={styles.videoContainer}>
    <video autoPlay loop muted src={videos.videoBg} className={styles.video} />
  </div>
);
