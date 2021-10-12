import * as i from 'types';
import * as React from 'react';
import { Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { useScaleAnimation } from 'services';
import { Container } from 'common/general';
import { AnimatedText, Heading } from 'common/typography';

import { ArrowView, TitleContainer } from './styled';

export const Screen1: React.FC = () => {
  const scaleIn = useScaleAnimation();
  const navigation = useNavigation<StackNavigationProp<i.OnboardingStack>>();

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
      <TitleContainer>
        <AnimatedText>
          <Heading color="black">Label A</Heading>
        </AnimatedText>
        <AnimatedText>
          <Heading color="gray" size={22}>A digital agency</Heading>
        </AnimatedText>
      </TitleContainer>

      <Pressable onPress={() => navigation.navigate('Screen2')}>
        <ArrowView
          state={scaleIn}
          transition={{ type: 'spring' }}
        />
      </Pressable>
    </Container>
  );
};
