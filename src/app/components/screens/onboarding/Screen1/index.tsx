import * as i from 'types';
import * as React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useScaleAnimation } from 'services';
import { Container } from 'common/general';
import { AnimatedText, Heading, TextContent } from 'common/typography';

import { ArrowView, TitleContainer } from './styled';

export const Screen1: React.FC = () => {
  const scaleIn = useScaleAnimation();
  const navigation = useNavigation<i.OnboardingNavigation>();

  React.useEffect(() => {
    setInterval(() => {
      if (scaleIn.current === 'from') {
        scaleIn.transitionTo('open');
      } else if (scaleIn.current === 'open') {
        scaleIn.transitionTo('big');
      } else {
        scaleIn.transitionTo('from');
      }
    }, 1500);
  }, []);

  return (
    <Container>
      <TitleContainer>
        <AnimatedText>
          <Heading color="black" size={40}>Onboarding</Heading>
        </AnimatedText>
        <AnimatedText>
          <Heading color="gray" size={22}>Welcome to the onboarding</Heading>
        </AnimatedText>
      </TitleContainer>

      <Pressable onPress={() => navigation.navigate('Tabs', { screen: 'DashboardTab' })}>
        <ArrowView
          state={scaleIn}
          transition={{ type: 'spring' }}
        >
          <TextContent color="white">Go</TextContent>
        </ArrowView>
      </Pressable>
    </Container>
  );
};
