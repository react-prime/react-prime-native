import * as React from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  cancelAnimation,
} from 'react-native-reanimated';

import { getStatusBarHeight, isIphone } from 'services';

const statusBarHeight = getStatusBarHeight();

const STATUS_BAR = isIphone ? statusBarHeight + 24 : statusBarHeight;

const MAX_HEADER_HEIGHT = 55 + STATUS_BAR;
const MIN_HEADER_HEIGHT = 10 + STATUS_BAR;

export const ScrollContext = React.createContext<ScrollContextProps>(
  {} as ScrollContextProps,
);

export const useScrollContext = () => {
  const context = React.useContext(ScrollContext);
  if (!context) throw new Error('ScrollContext cannot be rendered outside the Questionnaire component');
  return context;
};

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const scrollPosition = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollPosition.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    cancelAnimation(scrollPosition);
    return {
      height: withTiming(
        interpolate(scrollPosition.value,
          [0, MIN_HEADER_HEIGHT],
          [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
          Extrapolate.CLAMP,
        ),
        { duration: 10 },
      ),
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(
        interpolate(scrollPosition.value,
          [0, MAX_HEADER_HEIGHT],
          [1, 0],
          Extrapolate.CLAMP,
        ),
        { duration: 10 },
      ),
    };
  });

  const filterStyle = useAnimatedStyle(() => {
    return {
      top: interpolate(scrollPosition.value,
        [0, MAX_HEADER_HEIGHT],
        [100, 53],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <ScrollContext.Provider value={{
      scrollHandler,
      headerStyle,
      logoStyle,
      filterStyle,
    }}>
      {children}
    </ScrollContext.Provider>
  );
};

type ScrollContextProps = {
  scrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  headerStyle: {
    height: number;
  };
  logoStyle: {
    opacity: number;
  };
  filterStyle: {
    top: number;
  };
};

type ScrollProviderProps = {
  children: React.ReactNode;
};
