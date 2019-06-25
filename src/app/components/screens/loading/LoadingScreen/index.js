import React from 'react';
import PT from 'prop-types';
import { withNavigation } from 'react-navigation';

import { LoadingContainer } from './styled';

class LoadingScreen extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;

    setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);
  }

  render() {
    return (
      <LoadingContainer>
        Loading screen
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
