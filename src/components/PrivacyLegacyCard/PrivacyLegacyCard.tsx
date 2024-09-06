import React from 'react';
import { PiCookieLight, PiFilePdfDuotone } from 'react-icons/pi';

import { Paragraph, Subtitle } from '../Typography';
import { Link } from 'react-router-dom';
import { LineOrnament } from '../LineOrnament/LineOrnament';
import styles from './PrivacyLegacyCard.module.scss';

interface Props {
  title: string;
  description: string;
  downloadLink?: string;
  url?: string;
  btnTExt: string;
}

export const PrivacyLegacyCard = ({
  title,
  description,
  downloadLink,
  url,
  btnTExt,
}: Props) => {
  console.log(url);
  return (
    <article key={`document-${title}`} className={styles.card}>
      <div className={styles.cartContent}>
        <div className={styles.logos}>
          {url ? <PiCookieLight /> : <PiFilePdfDuotone />}
          <div className={styles.titleWrap}>
            <Subtitle text={title} />
            <LineOrnament />
          </div>
        </div>
        <Paragraph text={description} />
      </div>
      <div className={styles.btnDownloadWrap}>
        {url ? (
          <Link to={url} className={styles.downloadLink}>
            {btnTExt}
          </Link>
        ) : (
          <a
            href={downloadLink}
            download
            target='_blank'
            rel='noopener noreferrer'
            className={styles.downloadLink}
          >
            {btnTExt}
          </a>
        )}
      </div>
    </article>
  );
};
