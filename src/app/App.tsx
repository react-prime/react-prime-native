import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { setStatusBar } from 'services';
import theme from 'styles/theme';
import RootNavigator from 'navigators/RootNavigator';
import { NavigationProvider } from 'common/general';

import { store } from './store';

const App: React.FC = () => {
  useEffect(() => {
    setStatusBar('light');
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationProvider>
            <RootNavigator />
          </NavigationProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
