import React from 'react';
import { AboutUs } from '../../types/aboutPage-types';
import { useTranslation } from 'react-i18next';
import {
  AboutUsSection,
  ContactBanner,
  Container,
  TextSplash,
  OurMissionSection,
} from '../../layout';

export const AboutPage = () => {
  const { t } = useTranslation();

  const aboutContent: AboutUs = t('pages.about', {
    returnObjects: true,
  });

  const { title, intro, aboutSection, ourMissionSection } = aboutContent;

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
      <Container>
        <OurMissionSection
          header={ourMissionSection.header}
          description={ourMissionSection.description}
          subtitle={ourMissionSection.subtitle}
        />
      </Container>
    </>
  );
};
