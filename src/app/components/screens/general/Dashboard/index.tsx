import React from 'react';
import { Platform, Text } from 'react-native';
import { useAnimationState } from 'moti';

import { Container } from 'common/general';

import { Block } from './styled';

const instructions = Platform.select({
  ios: 'Welcome to React Native Prime on iOS',
  android: 'Welcome to React Native Prime on Android',
});

const useFadeAnimation = () => useAnimationState({
  from: {
    opacity: 0,
    translateY: -15,
  },
  to: {
    opacity: 1,
    translateY: 0,
  },
});

const useScaleAnimation = () => useAnimationState({
  from: {
    opacity: 0,
    transform: [{
      translateY: -15,
      scale: 0.5,
    }],
  },
  open: {
    opacity: 1,
    transform: [{
      translateY: 0,
      scale: 1,
    }],
  },
  big: {
    opacity: 1,
    transform: [{
      translateY: 0,
      scale: 1.5,
    }],
  },
});

export const Dashboard: React.FC = () => {
  const scaleIn = useScaleAnimation();

  React.useEffect(() => {
    setInterval(() => {
      if (scaleIn.current === 'from') {
        scaleIn.transitionTo('open');
      } else if (scaleIn.current === 'open') {
        scaleIn.transitionTo('big');
      } else {
        scaleIn.transitionTo('from');
      }
    }, 3000);
  }, []);

  return (
    <Container>
      <Text>{instructions}</Text>
      <Block
        state={scaleIn}
        transition={{ type: 'spring' }}
      />
    </Container>
  );
};
