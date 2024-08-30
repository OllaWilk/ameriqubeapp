import React from 'react';
import { AboutUs } from '../../types/aboutPage-types';
import { useTranslation } from 'react-i18next';
import {
  AboutUsSection,
  ContactBanner,
  Container,
  TextSplash,
} from '../../layout';

export const AboutPage = () => {
  const { t } = useTranslation();

  const aboutContent: AboutUs = t('pages.about', {
    returnObjects: true,
  });

  const { title, intro, aboutSection } = aboutContent;

  return (
    <>
      <TextSplash splashHeader={intro} splashHeading={title} />
      <Container>
        <AboutUsSection
          header={aboutSection.header}
          description={aboutSection.description}
        />
      </Container>
      <ContactBanner />
    </>
  );
};
