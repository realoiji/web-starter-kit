import React from 'react';
import { BrowserRouter as Router }  from 'react-router-dom';
import styled from '@emotion/styled';
import { Helmet } from "react-helmet";

import Routes from './routes';
import './styles';

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>App</title>
        <meta name="description" content="testing react  web starter kit" />
        <meta name="keywords" cpntent="react,seo, web starter kit" />
      </Helmet>
      <Styled>
        <Routes/>
      </Styled>
    </Router>
  );
}

export default App;

const Styled = styled.div`
  label: AppRouter;
`;
