import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import theme from 'styles/theme';
import { store, AppWithNavigationState } from './store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppWithNavigationState />
    </ThemeProvider>
  </Provider>
);

export default App;
