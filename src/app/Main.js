import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import theme from 'styles/theme';
import { store, AppWithNavigationState } from './store';

class Main extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppWithNavigationState />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default Main;
