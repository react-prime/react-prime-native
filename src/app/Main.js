import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';

import theme from 'styles/theme';
import { store } from './store';

const instructions = Platform.select({
  ios: 'Welcome to React Native Prime on iOS',
  android: 'Welcome to React Native Prime on Android',
});

class Main extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SentryBoundary>
            {instructions}
          </SentryBoundary>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default Main;
