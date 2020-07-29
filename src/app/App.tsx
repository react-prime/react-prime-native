import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { setStatusBar } from 'services';

import theme from 'styles/theme';
import RootNavigator from 'navigators/RootNavigator';

import { store } from './store';

const App: React.FC = () => {
  const ref = React.useRef();

  useEffect(() => {
    setStatusBar('light');
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer ref={ref}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
