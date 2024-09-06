import React, { useCallback, useEffect, useState } from 'react';
import { CookiePolicy } from '../../types/navigation-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Modal } from '../Modal/Modal';
import { Container } from '../../layout';
import { Paragraph, Subtitle } from '../Typography';
import { ButtonBlack } from '../Buttons';

import styles from './CookieBanner.module.scss';
import {
  handleAcceptCookies,
  hasUserAcceptedCookies,
} from '../../utils/cookie';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const cookies: CookiePolicy = t('cookies', {
    returnObjects: true,
  });

  useEffect(() => {
    if (!hasUserAcceptedCookies()) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    handleAcceptCookies();
    window.location.reload();
    setIsVisible(false);
  }, []);

  return isVisible ? (
    <div className={styles.cookieBanner}>
      <Modal />
      <div className={styles.info}>
        <Container className={styles.wrap}>
          <Subtitle text={cookies.title} className={styles.underlineText} />
          <Paragraph text={cookies.cookieInfoBaner} />
          <div className={styles.buttonsWrap}>
            <ButtonBlack
              text={cookies.acceptButton.text}
              onClick={handleAccept}
            />
            <Link
              to={cookies.asterixInfo.url}
              className={styles.goToCookiePolicy}
            >
              * {cookies.asterixInfo.text}
            </Link>
          </div>
        </Container>
      </div>
    </div>
  ) : null;
};
