import React, { useCallback, useEffect, useState } from 'react';
import styles from './CookieBanner.module.scss';
import { Link } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import { Container } from '../../layout';
import { Paragraph, Subtitle } from '../Typography';
import { ButtonBlack } from '../Buttons';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAccept = useCallback(() => {
    setIsVisible(false);
  }, []);

  return isVisible ? (
    <div className={styles.cookieBanner}>
      <Modal />
      <div className={styles.info}>
        <Container className={styles.wrap}>
          <Subtitle text={'COOKIE POLICY'} className={styles.underlineText} />
          <Paragraph
            text={
              'Dear Users, as part of our service, we use cookies. Using the website without changing the settings for cookies means that they will be placed on your end device. If you do not agree, please kindly make the appropriate changes in your web browser settings, though this may affect the availability of some functionalities.'
            }
          />
          <div className={styles.buttonsWrap}>
            <ButtonBlack text={'accept cookie'} onClick={handleAccept} />
            <Link to={'/cookies'} className={styles.goToCookiePolicy}>
              * more about our cookie policy can be read here <span>here</span>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  ) : null;
};

export { CookieBanner };
