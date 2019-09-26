import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import RNBootSplash from 'react-native-bootsplash';

import theme from 'styles/theme';
import { store, AppWithNavigationState } from './store';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppWithNavigationState />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
