import { injectGlobal } from 'emotion';
import PromptRegular from '../../assets/fonts/Prompt/Prompt-Regular.woff';
import PromptRegularItalic from '../../assets/fonts/Prompt/Prompt-RegularItalic.woff';
import PromptLight from '../../assets/fonts/Prompt/Prompt-Light.woff';
import PromptLightItalic from '../../assets/fonts/Prompt/Prompt-LightItalic.woff';
import PromptSemiBold from '../../assets/fonts/Prompt/Prompt-SemiBold.woff';
import PromptSemiBoldItalic from '../../assets/fonts/Prompt/Prompt-SemiBoldItalic.woff';

injectGlobal`
  @font-face {
    font-family: 'PromptRegular';
    src: url(${PromptRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PromptRegularItalic';
    src: url(${PromptRegularItalic}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PromptLight';
    src: url(${PromptLight}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PromptLightItalic';
    src: url(${PromptLightItalic}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PromptSemiBold';
    src: url(${PromptSemiBold}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PromptSemiBoldItalic';
    src: url(${PromptSemiBoldItalic}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;