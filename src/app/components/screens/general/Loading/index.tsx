import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LoadingContainer } from './styled';

type LoadingNavigationProps = {
  Loading: undefined;
  Main: undefined;
};

export const Loading: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<LoadingNavigationProps, 'Loading'>>();

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
