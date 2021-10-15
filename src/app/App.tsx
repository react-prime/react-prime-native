import * as React from 'react';
import { Provider } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import { setStatusBar } from 'services';
import theme from 'styles/theme';
import RootNavigator from 'navigators/RootNavigator';
import { NavigationWrapper } from 'common/general';

import { store } from './store';

const App: React.FC = () => {
  React.useEffect(() => {
    setStatusBar('light');
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationWrapper>
            <RootNavigator />
          </NavigationWrapper>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
