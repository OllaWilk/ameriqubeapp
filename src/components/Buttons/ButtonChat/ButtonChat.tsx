import React, { useState } from 'react';
import { IoChatboxEllipsesOutline, IoClose } from 'react-icons/io5';

import { FormComponent } from '../../Form';
import styles from './ButtonChat.module.scss';
import { Subtitle } from '../../Typography';
import { LineOrnament } from '../../LineOrnament/LineOrnament';

interface Props {
  text: string;
}

export const ButtonChat = ({ text }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.chatButton}>
      <button className={styles.chat} onClick={togglePopup}>
        <IoChatboxEllipsesOutline className={styles.icon} />
        <p className={styles.text}>{text}</p>
      </button>

      {isOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <Subtitle text={'Message'} />
            <LineOrnament />
            <button className={styles.closeButton} onClick={togglePopup}>
              <IoClose className={styles.closeIcon} />
            </button>
            <div className={styles.background}>
              <FormComponent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
