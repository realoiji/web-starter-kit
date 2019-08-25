import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';

import { PRELOAD_DURATION } from 'app/variables';

const animatePreloadDuration = (PRELOAD_DURATION * 1000) / 3;
const PreloadRight = posed.div({
  exit: {
    x: '0%',
    transition: { duration: animatePreloadDuration }
  },
  enter: {
    delay: 1000,
    x: '100%',
    transition: { duration: animatePreloadDuration }
  }
});
const PreloadLeft = posed.div({
  exit: {
    x: '0%',
    transition: { duration: animatePreloadDuration }
  },
  enter: {
    delay: 1000,
    x: '-100%',
    transition: { duration: animatePreloadDuration }
  }
});

const elEvent = document.querySelector('body');

export const triggerPreload = ({
  pageName = 'home',
  pageStatus = 'enter',
  ...rest
}) => {
  console.log('triggerPreload', pageName, pageStatus, rest);
  const eventPreload = new CustomEvent('preload', {
    bubbles: true,
    detail: {
      pageName,
      pageStatus
    }
  });
  elEvent.dispatchEvent(eventPreload);
};

const Loading = () => {
  console.log('create Loading');
  const [animationStatus, setAnimationStatus] = useState('enter');

  useEffect(() => {
    console.log('useEffect didmount');
    const changePreloadStatus = ({ detail, ...rest }) => {
      const { pageName, pageStatus, ...detailRest } = detail;
      console.log('changeStatusPreload', pageName, pageStatus, detailRest);
      setAnimationStatus(pageStatus);
    };

    elEvent.addEventListener('preload', changePreloadStatus);
    return () => {
      elEvent.removeEventListener('preload', changePreloadStatus);
    };
  }, []);

  console.log('render animationStatus', animationStatus);
  return (
    <Styled className="loadding">
      <PreloadRight
        className="preload right"
        initialPose="exit"
        pose={animationStatus}
      />
      <PreloadLeft
        className="preload left"
        initialPose="exit"
        pose={animationStatus}
      />
    </Styled>
  );
};

export default Loading;

const Styled = styled.div`
  label: Loading;
  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  .preload {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: blue;
    z-index: 9;
    pointer-events: visible;
    &.left {
      left: 0%;
    }
    &.right {
      right: 0%;
    }
  }
`;
