import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { setStatusBar } from 'services';
import theme from 'styles/theme';
import RootNavigator from 'navigators/RootNavigator';
import { NavigationProvider } from 'common/general';

import { store } from './store';

const App: React.FC = () => {
  React.useEffect(() => {
    setStatusBar('light');
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
