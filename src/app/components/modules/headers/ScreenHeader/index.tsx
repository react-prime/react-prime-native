import * as React from 'react';
import Animated from 'react-native-reanimated';
import { StackHeaderProps } from '@react-navigation/stack';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

import { useScrollContext } from 'modules/general';
import { SnSLogo } from 'common/svg';

import { FilterBar } from './components';
import { ScreenHeaderContainer } from './styled';

export const ScreenHeader: React.FC<BottomTabHeaderProps | StackHeaderProps> = () => {
  const { headerStyle, logoStyle } = useScrollContext();

  return (
    <ScreenHeaderContainer style={headerStyle}>
      <Animated.View style={logoStyle}>
        <SnSLogo width={119} height={24} fill="#FFFFFF" />
      </Animated.View>
      <FilterBar />
    </ScreenHeaderContainer>
  );
};
