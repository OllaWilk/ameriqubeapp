import React from 'react';
import styles from './Card.module.scss';
import { Paragraph, Subtitle } from '../Typography';
import { ButtonRedText } from '../Buttons';

interface Props {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export const Card = ({ title, description, buttonText, buttonUrl }: Props) => {
  return (
    <div className={styles.card}>
      <Subtitle text={title} />
      <Paragraph className={styles.description} text={description} />
      <ButtonRedText text={buttonText} to={buttonUrl} />
    </div>
  );
};
