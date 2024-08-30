import React from 'react';
import { ColumnTextContent } from '../ColumnTextContent/ColumnTextContent';
import {
  LineOrnament,
  Video,
  Paragraph,
  SectionHeader,
  Subtitle,
} from '../../components';
import styles from './OurMissionSection.module.scss';

interface Props {
  header: string;
  description: string;
  subtitle: string;
}

export const OurMissionSection = ({ header, description, subtitle }: Props) => {
  return (
    <section className={styles.section}>
      <Video />
      <ColumnTextContent>
        <Subtitle text={subtitle} className={styles.subtitle} />
        <SectionHeader text={header} />
        <LineOrnament className={styles.ornament} />
        <Paragraph text={description} />
      </ColumnTextContent>
    </section>
  );
};
