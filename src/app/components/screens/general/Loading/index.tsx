import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LoadingContainer } from './styled';

export const Loading: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
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
