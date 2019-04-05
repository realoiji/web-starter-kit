import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from "react-helmet";

const AboutScreen = () => {
  return (
    <Styled>
      <Helmet>
        <title>AboutScreen</title>
      </Helmet>
      <h1>AboutScreen</h1>
    </Styled>
  );
};

export default AboutScreen;

const Styled = styled.div`
  label: AboutScreen;
`