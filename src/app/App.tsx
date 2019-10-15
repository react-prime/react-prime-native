import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import RNBootSplash from 'react-native-bootsplash';

import theme from 'styles/theme';
import { store, AppContainer } from './store';

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;