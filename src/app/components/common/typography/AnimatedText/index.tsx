import * as React from 'react';
import { MotiView } from 'moti';

export const AnimatedText: React.FC = ({ children }) => {
  return (
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
        duration: 500,
        delay: 500,
      }}
    >
      {children}
    </MotiView>
  );
};
