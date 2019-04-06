import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import { mediaQuery } from '../app/styles/function';
import { getFile } from '~/utils';
import { ThemeContext } from '../context/theme';
import { TranslateContext } from '../context/translate';

const HomeScreen = () => {
  const { value, increaseNumber, decreaseNumber } = useContext(ThemeContext);
  const { currentLanguage, getAllLanguage, t } = useContext(TranslateContext);
  return (
    <Styled>
      <Helmet>
        <title>HomeScreen</title>
      </Helmet>
      <Header />
      <h1>HomeScreen {value}</h1>
      <img src={getFile('logo.svg')} alt="" />
      <button onClick={() => increaseNumber(1)}>+</button>
      <button onClick={() => decreaseNumber(1)}>-</button>
      <hr />
      <div>currentLanguage : {currentLanguage}</div>
      <div>all language : {getAllLanguage()}</div>
      <div>translate : {t()}</div>
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
