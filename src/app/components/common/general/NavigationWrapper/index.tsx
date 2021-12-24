import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFlipper } from '@react-navigation/devtools';

import theme from 'styles/theme';

export const NavigationWrapper: React.FC = ({
  children,
}) => {
  const navigationRef = React.useRef(null);
  useFlipper(navigationRef);

  const linking = {
    prefixes: ['reactprimenative://'],
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme.navigationTheme}
      linking={linking}
    >
      {children}
    </NavigationContainer>
  );
};
