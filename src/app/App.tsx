import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import client from 'config/client';
import theme from 'styles/theme';
import { setStatusBar } from 'services';
import RootNavigator from 'navigators/RootNavigator';
import { NavigationWrapper } from 'common/general';
import { ScrollProvider } from 'modules/general';

const App: React.FC = () => {
  React.useEffect(() => {
    setStatusBar('light');
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationWrapper>
            <ScrollProvider>
              <RootNavigator />
            </ScrollProvider>
          </NavigationWrapper>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
