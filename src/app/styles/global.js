import { injectGlobal } from 'emotion';

injectGlobal`
  html {
    font-size: 10px;
    font-weight: normal;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'PromptRegular';
  }
  .switch-wrapper {
    position: relative;
  }
  .switch-wrapper > div {
    position: absolute;
  }
  .switch-wrapper > div > div {
    overflow: hidden;
  }
`;