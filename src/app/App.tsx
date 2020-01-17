import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import { store, AppContainer } from './store';

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <AppContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
