import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from "react-helmet";

import { mediaQuery } from '../app/styles/function';

const HomeScreen = () => {
  return (
    <Styled>
      <Helmet>
        <title>HomeScreen</title>
      </Helmet>
      <h1>HomeScreen</h1>
    </Styled>
  );
};

export default HomeScreen;

const Styled = styled.div`
  label: HomeScreen;
  ${mediaQuery('xs', `
    h1 { color red; }
  `)}
`