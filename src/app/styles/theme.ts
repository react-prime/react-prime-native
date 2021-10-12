import { DefaultTheme } from '@react-navigation/native';

export default {
  colors: {
    blue: '#2916BA',
    lightPrime: '#D7ECA1',
    prime: '#e7ff00',
    gray: '#dddddd',
    black: '#000000',
    white: '#ffffff',
  },
  fonts: {
    regular: 'Helvetica',
  },
  navigationTheme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFFFFF',
    },
  },
};
