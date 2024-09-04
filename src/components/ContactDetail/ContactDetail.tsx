import React from 'react';
import styles from './ContactDetail.module.scss';

interface ContactDetailProps {
  label: string | undefined;
  value?: string | string[];
  isLink?: boolean;
}

export const ContactDetail = ({
  label,
  value,
  isLink = false,
}: ContactDetailProps) => {
  if (!value) return null;

  if (isLink && typeof value === 'string') {
    return (
      <div className={styles.contactWrap}>
        <p className={styles.contactName}>{label}: </p>
        <a href={value} target='_blank' rel='noopener noreferrer'>
          {value}
        </a>
      </div>
    );
  }

  return Array.isArray(value) ? (
    <>
      {value.map((v, i) => (
        <div key={i} className={styles.contactWrap}>
          <p className={styles.contactName}>{label}: </p>
          <span>{v}</span>
        </div>
      ))}
    </>
  ) : (
    <div className={styles.contactWrap}>
      <p className={styles.contactName}>{label}: </p>
      <span>{value}</span>
    </div>
  );
};
