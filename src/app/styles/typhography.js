import { injectGlobal } from 'emotion';

injectGlobal`
  h1, h2, h3, h4, h5, h6, span, p, a, b, i, strong {
    line-height: 1;
    font-weight: normal;
    font-style: normal;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.8rem;
  }
  h5 {
    font-size: 1.6rem;
  }
  h6, p, a, b, i, strong {
    font-size: 1.2rem;
  }
`;