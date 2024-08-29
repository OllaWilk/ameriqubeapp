import React, { useCallback, useEffect, useState } from 'react';
import { CookiePolicy } from '../../types/navigation-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { Modal } from '../Modal/Modal';
import { Container } from '../../layout';
import { Paragraph, Subtitle } from '../Typography';
import { ButtonBlack } from '../Buttons';

import styles from './CookieBanner.module.scss';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const cookies: CookiePolicy = t('cookies', {
    returnObjects: true,
  });

  useEffect(() => {
    const userAcceptedCookies = Cookies.get('userAcceptedCookies');

    if (!userAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    Cookies.set('userAcceptedCookies', 'true', { expires: 365 });
    window.location.reload(); //reload window after cookie accept
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
