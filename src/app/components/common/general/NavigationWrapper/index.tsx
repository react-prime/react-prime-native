import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import theme from 'styles/theme';

export const NavigationWrapper: React.FC = ({ children }) => {
  const ref = React.useRef(null);

  const linking = {
    prefixes: ['reactprimenative://'],
  };

  return (
    <NavigationContainer
      ref={ref}
      theme={theme.navigationTheme}
      linking={linking}
    >
      {children}
    </NavigationContainer>
  );
};
