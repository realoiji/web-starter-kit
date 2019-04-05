import React from 'react';
import { BrowserRouter as Router }  from 'react-router-dom';
import styled from '@emotion/styled';

import Routes from './routes';
import './styles';

const App = () => {
  return (
    <Router>
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
