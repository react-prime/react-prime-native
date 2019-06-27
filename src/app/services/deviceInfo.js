import { Dimensions, Platform } from 'react-native';

export const isIphone = Platform.OS === 'ios';

export const isIphoneX = (() => {
  const dimen = Dimensions.get('window');
  return (
    isIphone
    && !Platform.isPad
    && !Platform.isTVOS
    && (dimen.height === 812
      || dimen.width === 812
      || (dimen.height === 896 || dimen.width === 896))
  );
})();
