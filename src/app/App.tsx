import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import client from 'config/client';
import theme from 'styles/theme';
import { setStatusBar } from 'services';
import RootNavigator from 'navigators/RootNavigator';
import { NavigationWrapper } from 'common/general';

const App: React.FC = () => {
  React.useEffect(() => {
    setStatusBar('dark');
    RNBootSplash.hide();
  }, []);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationWrapper>
            <RootNavigator />
          </NavigationWrapper>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
