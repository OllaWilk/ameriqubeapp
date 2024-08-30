import React from 'react';
import {
  LineOrnament,
  LogoText,
  Paragraph,
  SectionHeader,
} from '../../components';
import { ColumnTextContent } from '../ColumnTextContent/ColumnTextContent';
import styles from './AboutUsSection.module.scss';

interface Props {
  header: string;
  description: string;
}
export const AboutUsSection = ({ header, description }: Props) => {
  return (
    <section className={styles.section}>
      <LogoText />
      <ColumnTextContent>
        <SectionHeader text={header} />
        <LineOrnament className={styles.ornament} />
        <Paragraph text={description} />
      </ColumnTextContent>
    </section>
  );
};
