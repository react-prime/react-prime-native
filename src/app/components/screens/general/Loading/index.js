import React from 'react';
import { Text } from 'react-native';
import PT from 'prop-types';
import { withNavigation } from 'react-navigation';

import { LoadingContainer } from './styled';

class LoadingScreen extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;

    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }

  render() {
    return (
      <LoadingContainer>
        <Text>Loading screen</Text>
      </LoadingContainer>
    );
  }
}

LoadingScreen.propTypes = {
  navigation: PT.shape({
    navigate: PT.func,
  }).isRequired,
};

export default withNavigation(LoadingScreen);
