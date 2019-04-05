import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from "react-helmet";

const NotFoundScreen = () => {
  return (
    <Styled>
      <Helmet>
        <title>NotFoundScreen</title>
      </Helmet>
      <h1>NotFoundScreen</h1>
    </Styled>
  );
};

export default NotFoundScreen;

const Styled = styled.div`
  label: NotFoundScreen;
`
