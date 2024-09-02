import React from 'react';
import {
  ButtonRedText,
  LogoText,
  Paragraph,
  SectionHeader,
  Subtitle,
} from '../../components';
import { photos } from '../../img';
import { ColumnTextContent } from '../ColumnTextContent/ColumnTextContent';
import { Container } from '../Container/Container';
import styles from './AmeriQubeWelcomeTwoo.module.scss';

export const AmeriQubeWelcomeTwoo = () => (
  <section className={styles.welcomeSection}>
    <Container>
      <div className={styles.content}>
        <ColumnTextContent>
          <Subtitle text={'welcome to'} className={styles.subtitle} />
          <SectionHeader text='AMERIqube' className={styles.header} />
          <Paragraph
            className={styles.text}
            text={
              'At AmeriQube, innovation meets relsiability in the realm of climate control and enclosure solutions. As the parent company to ICEqube and SMARTqube, we uphold a legacy of excellence that spans decades, delivering cutting-edge products and services to industries around the globe'
            }
          />
        </ColumnTextContent>
        <LogoText src={photos.ameriqubeText} className={styles.logo} />
      </div>
      <div className={styles.additional}>
        <Paragraph
          className={styles.paragraph}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum unde voluptatibus eveniet! Ipsam, numquam repellendus! Ut nam eum distinctio cupiditate, veritatis nesciunt. Beatae necessitatibus aspernatur magni excepturi provident praesentium repudiandae?'
          }
        />
        <Paragraph
          className={styles.paragraph}
          text={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aperiam optio nam. Odit, nostrum? Quam, et earum iusto quaerat ad dolore praesentium cum suscipit corrupti nobis perspiciatis, velit optio cumque.Id sequi, illo perspiciatis quam, doloribus quasi animi, iste deserunt nisi ratione ipsum explicabo iusto sint illum quod saepe praesentium qui commodi doloremque eveniet harum distinctio! Blanditiis eaque unde porro.'
          }
        />
        <ButtonRedText to='/about' text='About us' />
      </div>
    </Container>
  </section>
);
