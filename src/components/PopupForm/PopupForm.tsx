import React from 'react';
import { Subtitle } from '../Typography';
import { LineOrnament } from '../LineOrnament/LineOrnament';
import { IoClose } from 'react-icons/io5';
import { FormComponent } from '../Form';
import styles from './PopupForm.module.scss';

interface Props {
  togglePopup: () => void;
  isOpen: boolean;
  subtitle: string;
}

export const PopupForm = ({ togglePopup, isOpen, subtitle }: Props) => {
  const popupClass = isOpen ? `${styles.popup} ${styles.open}` : styles.popup;

  return (
    <div className={`${popupClass} `}>
      <button className={styles.closeButton} onClick={togglePopup}>
        <IoClose className={styles.closeIcon} />
      </button>
      <Subtitle text={subtitle} className={styles.subtitle} />
      <LineOrnament className={styles.ornametn} />
      <FormComponent />
    </div>
  );
};
