import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import { mediaQuery } from '../app/styles/function';
import { getFile } from '../utils';

const HomeScreen = () => {
  return (
    <Styled>
      <Helmet>
        <title>HomeScreen</title>
      </Helmet>
      <Header />
      <h1>HomeScreen</h1>
      <img src={getFile('logo.svg')} alt="" />
    </Styled>
  );
};

export default HomeScreen;

const Styled = styled.div`
  label: HomeScreen;
  ${mediaQuery(
    'xs',
    `
      h1 { color red; }
    `
  )}
`;
