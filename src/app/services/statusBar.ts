import { StatusBar, Platform, NativeModules } from 'react-native';

import theme from 'styles/theme';
import { hasNotch } from 'services/deviceInfo';

type StatusBarMode = 'light' | 'dark';

const { StatusBarManager } = NativeModules;

const setStatusBackgroundColor = (mode: StatusBarMode) => {
  const backgroundColor = mode === 'light' ? theme.colors.white : theme.colors.black;

  StatusBar.setBackgroundColor(backgroundColor);
};

const setStatusBarStyle = (mode: StatusBarMode) => {
  const bar = mode === 'light' ? 'dark-content' : 'light-content';

  StatusBar.setBarStyle(bar);
};

const notSupportedOS = () => {
  throw new Error(`Not supported OS: ${Platform.OS}`);
};

export const setStatusBar = Platform.select({
  ios: setStatusBarStyle,
  android: (mode) => {
    setStatusBarStyle(mode);
    setStatusBackgroundColor(mode);
  },
  default: notSupportedOS,
});

export const getStatusBarHeight = Platform.select({
  ios: () => hasNotch ? 44 : 20,
  android: () => StatusBarManager.HEIGHT,
  default: notSupportedOS,
});
