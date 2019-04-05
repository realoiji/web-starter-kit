import { breakpoints } from '../variables';

export const mediaQuery = (deviceSize, value) => {
  const screenSize = breakpoints[deviceSize] || '0px';
  return `@media (max-width: ${screenSize}) {
    ${value}
  }`;
};

export const transition = (duration = 0.4, easing = 'ease-in-out') => {
  return `transition: ${duration}s ${easing};`;
};

export default {};
