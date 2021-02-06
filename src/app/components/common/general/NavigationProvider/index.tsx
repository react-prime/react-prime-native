import * as React from 'react';
import {
  NavigationContainer,
  InitialState,
  useLinking,
} from '@react-navigation/native';

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

  React.useEffect(() => {
    const getState = () => {
      getInitialState()
        .then((state: InitialStateType) => {
          if (state) {
            setInitialState(state);
          }
          setIsReady(true);
        });
    };

    setTimeout(getState, 500);
  }, [getInitialState]);

  const value = React.useMemo(
    () => ({ initialState }),
    [initialState],
  );

  if (!isReady) return null;

  return (
    <NavigationContainer
      ref={ref}
      theme={theme.navigationTheme}
      initialState={initialState}
    >
      <NavigationContext.Provider value={value}>
        {children}
      </NavigationContext.Provider>
    </NavigationContainer>
  );
};
