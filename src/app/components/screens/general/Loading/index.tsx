import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { withNavigation } from 'react-navigation';

import { LoadingContainer } from './styled';

const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }, [navigation]);

  return (
    <LoadingContainer>
      <Text>Loading screen</Text>
    </LoadingContainer>
  );
};

type LoadingScreenProps = NavigationInjectedProps;

export default withNavigation(LoadingScreen);
