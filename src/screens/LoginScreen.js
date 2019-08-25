import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { mediaQuery } from 'app/styles/function';

import FormLogin from 'components/FormLogin';
// import { signin } from 'services/api';

const LoginScreen = ({ history, ...restProps }) => {
  console.log('Render LoginScreen', history, restProps);
  return (
    <Styled>
      <Helmet>
        <title>LoginScreen</title>
      </Helmet>
      <div className="form-container">
        <FormLogin className="" />
      </div>
    </Styled>
  );
};

export default LoginScreen;

const Styled = styled.div`
  label: LoginScreen;
  background-color: #2f7eff;
  display: flex;
  align-items: center;
  height: 100%;
  .form-container {
    background-color: white;
    border-radius: 12px;
    max-width: 513px;
    width: 100%;
    height: 387px;
    padding: 30px;
    margin-left: 90px;
    margin-right: 90px;
  }
  ${mediaQuery(
    'xs',
    `
    .form-container {
      margin-left: 10px;
      margin-right: 10px;
    }
    `
  )}
`;
