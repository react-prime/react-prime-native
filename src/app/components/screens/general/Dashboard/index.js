import React from 'react';
import { Platform, Text } from 'react-native';

import { DashboardContainer } from './styled';

const instructions = Platform.select({
  ios: 'Welcome to React Native Prime on iOS',
  android: 'Welcome to React Native Prime on Android',
});

const Dashboard = () => (
  <DashboardContainer>
    <Text>{instructions}</Text>
  </DashboardContainer>
);

export default Dashboard;
