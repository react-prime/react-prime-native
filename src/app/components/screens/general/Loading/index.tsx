import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LoadingContainer } from './styled';

export const Loading: React.FC = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }, []);

  return (
    <LoadingContainer>
      <Text>Loading screen</Text>
    </LoadingContainer>
  );
};
