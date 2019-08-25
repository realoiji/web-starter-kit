import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { createBrowserHistory, createHashHistory } from 'history';

import './styles';
import Routes from './routes';
import { isProtocolFile } from 'utils';
import ThemeProvider from 'context/theme';
import TranslateProvider from 'context/translate';
import ScrollToTop from 'components/ScrollToTop';
import Loading from 'components/Loading';

const { PUBLIC_URL } = process.env;

const browserHistory = createBrowserHistory({
  basename: PUBLIC_URL, // The base URL of the app (see below)
  forceRefresh: false, // Set true to force full page refreshes
  keyLength: 6, // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
});
const hashHistory = createHashHistory({
  hashType: 'noslash' // Omit the leading slash
});
const history = isProtocolFile() ? hashHistory : browserHistory;

const App = () => {
  return (
    <>
      <Loading />
      <Router history={history}>
        <ThemeProvider>
          <TranslateProvider>
            <ScrollToTop>
              <Styled>
                <Helmet>
                  <title>App</title>
                  <meta
                    name="description"
                    content="testing react  web starter kit"
                  />
                  <meta name="keywords" content="react,seo, web starter kit" />
                </Helmet>
                <Route render={props => <Routes {...props} />} />
              </Styled>
            </ScrollToTop>
          </TranslateProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;

const Styled = styled.div`
  label: AppRouter;
`;
