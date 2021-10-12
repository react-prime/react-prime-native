import * as React from 'react';
import Animated from 'react-native-reanimated';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

import { useScrollContext } from 'modules/general';
import { SnSLogo } from 'common/svg';

import { ScreenHeaderContainer } from './styled';

export const ScreenHeader: React.FC<BottomTabHeaderProps> = () => {
  const { headerStyle, logoStyle } = useScrollContext();

  return (
    <ScreenHeaderContainer style={headerStyle}>
      <Animated.View style={logoStyle}>
        <SnSLogo width={119} height={24} fill="#FFFFFF" />
      </Animated.View>
    </ScreenHeaderContainer>
  );
};
