import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from "react-helmet";

import Header from '../components/Header';

const EnquiryScreen = () => {
  return (
    <Styled>
      <Helmet>
        <title>EnquiryScreen</title>
      </Helmet>
      <Header />
      <h1>EnquiryScreen</h1>
    </Styled>
  );
};

export default EnquiryScreen;

const Styled = styled.div`
  label: EnquiryScreen;
`