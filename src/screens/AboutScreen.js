import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from "react-helmet";

import Header from '../components/Header';

const AboutScreen = () => {
  return (
    <Styled>
      <Helmet>
        <title>AboutScreen</title>
      </Helmet>
      <Header />
      <h1>AboutScreen</h1>
    </Styled>
  );
};

export default AboutScreen;

const Styled = styled.div`
  label: AboutScreen;
`