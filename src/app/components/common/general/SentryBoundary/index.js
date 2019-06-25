import React from 'react';
import PT from 'prop-types';
import Sentry from 'sentry-expo';

import { Container, Title, Message } from './styled';

class SentryBoundary extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    });

    if (!__DEV__) Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    const { children, t } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <Container>
          <Title>Er heeft zich een error voorgedaan</Title>
          <Message>Probeer de app te herladen</Message>
        </Container>
      );
    }

    return children;
  }
}

SentryBoundary.propTypes = {
  children: PT.oneOfType([PT.arrayOf(PT.node), PT.node]).isRequired,
};

export default SentryBoundary;
