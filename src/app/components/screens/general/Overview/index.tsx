import React from 'react';
import { Platform, Text } from 'react-native';

import { setStatusBar } from 'services';
import { Container } from 'common/general';

const instructions = Platform.select({
  ios: 'Overview screen on iOS',
  android: 'Overview screen on Android',
});

export const Overview: React.FC = () => {
  React.useEffect(() => {
    setStatusBar('light');
  }, []);

  return (
    <Container>
      <Text>{instructions}</Text>
    </Container>
  );
};
