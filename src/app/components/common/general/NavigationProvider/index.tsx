import * as React from 'react';
import {
  NavigationContainer,
  InitialState,
  useLinking,
} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import theme from 'styles/theme';

type NavigationContextType = undefined | {
  initialState?: InitialState;
};

export const NavigationContext = React.createContext<NavigationContextType>(undefined);

export const useNavigationContext = () => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    console.error('useNavigationContext should be used inside the NavigationProvider component');
  }
  return context;
};

type InitialStateType = undefined | InitialState;

export const NavigationProvider: React.FC = ({
  children,
}) => {
  const ref = React.useRef(null);
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState<InitialStateType>(undefined);

  const { getInitialState } = useLinking(ref, {
    prefixes: ['reactprimenative://'],
  });

  const onGetState = () => {
    getInitialState()
      .then((state: InitialStateType) => {
        if (state !== undefined) {
          setInitialState(state);
        }
      });

    setIsReady(true);
  };

  React.useEffect(() => {
    setTimeout(onGetState, 500);
  }, [getInitialState]);

  const value = React.useMemo(
    () => ({ initialState }),
    [initialState],
  );

  const onNavigationReady = () => {
    RNBootSplash.hide({ fade: true });
  };

  if (!isReady) return null;

  return (
    <NavigationContainer
      ref={ref}
      theme={theme.navigationTheme}
      initialState={initialState}
      onReady={onNavigationReady}
    >
      <NavigationContext.Provider value={value}>
        {children}
      </NavigationContext.Provider>
    </NavigationContainer>
  );
};
