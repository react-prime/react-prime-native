import * as React from 'react';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

import { TextContent } from 'common/typography';

import { ScreenHeaderContainer } from './styled';

export const ScreenHeader: React.FC<BottomTabHeaderProps> = () => {
  return (
    <ScreenHeaderContainer>
      <TextContent>
        Dashboard
      </TextContent>
    </ScreenHeaderContainer>
  );
};
