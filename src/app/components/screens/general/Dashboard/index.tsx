import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Platform, Text } from 'react-native';
import * as i from 'types';

import { getData } from 'ducks/data';
import { Container } from 'common/general';

const instructions = Platform.select({
  ios: 'Welcome to React Native Prime on iOS',
  android: 'Welcome to React Native Prime on Android',
});

const Dashboard: React.FC<DashboardProps> = ({ getData, loading, data }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container>
      <Text>{instructions}</Text>
      {loading && <Text>Loading</Text>}
      {data && <Text>Data from Redux is loaded</Text>}
    </Container>
  );
};

type DashboardProps = {
  data?: boolean;
  getData: i.GetData['action'];
  loading: boolean;
};

export default connect(
  (state: i.ReduxState) => ({
    data: state.data.data,
    loading: state.data.loading,
  }),
  { getData },
)(Dashboard);
