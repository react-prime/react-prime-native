import React, { useEffect } from 'react';
import { Text } from 'react-native';
import PT from 'prop-types';
import { withNavigation } from 'react-navigation';

import { LoadingContainer } from './styled';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  });

  return (
    <LoadingContainer>
      <Text>Loading screen</Text>
    </LoadingContainer>
  );
};

LoadingScreen.propTypes = {
  navigation: PT.shape({
    navigate: PT.func,
  }).isRequired,
};

export default withNavigation(LoadingScreen);
