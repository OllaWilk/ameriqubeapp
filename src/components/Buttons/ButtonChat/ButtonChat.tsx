import React, { useEffect, useState } from 'react';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import { PopupForm } from '../../PopupForm/PopupForm';
import styles from './ButtonChat.module.scss';

interface Props {
  text: string;
}

export const ButtonChat = ({ text }: Props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const subtitle: string = t('contactBanner.subtitle');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isOpen]);

  return (
    <div className={styles.chatButton}>
      <button className={styles.chat} onClick={togglePopup}>
        <IoChatboxEllipsesOutline className={styles.icon} />
        <p className={styles.text}>{text}</p>
      </button>

      {isOpen && (
        <div className={styles.popupOverlay}>
          <PopupForm
            isOpen={isOpen}
            togglePopup={togglePopup}
            subtitle={subtitle}
          />
        </div>
      )}
    </div>
  );
};
