import React from 'react';
import { Platform, Text } from 'react-native';

import { Container } from 'common/general';

const instructions = Platform.select({
  ios: 'Welcome to React Native Prime on iOS',
  android: 'Welcome to React Native Prime on Android',
});

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Text>{instructions}</Text>
    </Container>
  );
};
