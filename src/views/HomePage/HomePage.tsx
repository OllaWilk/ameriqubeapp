import React from 'react';
import { Container, TextSplash } from '../../layout';
import { UnderConstruction } from '../UnderConstruction/UnderConstruction';

export const HomePage = () => {
  return (
    <>
      <TextSplash />
      <Container>
        <UnderConstruction />
      </Container>
    </>
  );
};
