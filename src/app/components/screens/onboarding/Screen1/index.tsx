import * as React from 'react';
import { MotiView } from 'moti';

import { useScaleAnimation } from 'services';
import { Container } from 'common/general';
import { Heading } from 'common/typography';

import { ArrowView, TitleContainer } from './styled';

export const Screen1: React.FC = () => {
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
      <TitleContainer>
        <MotiView
          from={{
            opacity: 0,
            translateY: 20,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            type: 'timing',
            duration: 350,
            delay: 500,
          }}
        >
          <Heading color="black">Label A</Heading>
        </MotiView>
        <MotiView
          from={{
            opacity: 0,
            translateY: 20,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            type: 'timing',
            duration: 350,
            delay: 500,
          }}
        >
          <Heading color="gray" size={22}>A digital agency</Heading>
        </MotiView>
      </TitleContainer>

      <ArrowView
        state={scaleIn}
        transition={{ type: 'spring' }}
      />
    </Container>
  );
};
