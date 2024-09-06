import React from 'react';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import styles from './ButtonChat.module.scss';

export const ButtonChat = () => {
  return (
    <div className={styles.chatButton}>
      <button className={styles.chat}>
        <p> Chat with us</p>
        <IoChatboxEllipsesOutline />
      </button>
    </div>
  );
};
