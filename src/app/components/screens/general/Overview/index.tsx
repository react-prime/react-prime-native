import React from 'react';
import { Platform, Text } from 'react-native';

import { OverviewContainer } from './styled';

const instructions = Platform.select({
  ios: 'Overview screen on iOS',
  android: 'Overview screen on Android',
});

const Overview: React.FC = () => (
  <OverviewContainer>
    <Text>{instructions}</Text>
  </OverviewContainer>
);

export default Overview;
