import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLinkPage.module.scss';

interface Props {
  website: string;
}

export const ButtonLinkPage = ({ website }: Props) => (
  <div className={styles.contactWrap}>
    <p className={styles.contactName}>Website: </p>
    <Link to={website} target='_blank' rel='noopener noreferrer'>
      {website}
    </Link>
  </div>
);
