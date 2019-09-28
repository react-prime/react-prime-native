import React, { useEffect } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { Platform, Text } from 'react-native';

import { getData } from 'ducks/data';

import { DashboardContainer } from './styled';

const instructions = Platform.select({
  ios: 'Welcome to React Native Prime on iOS',
  android: 'Welcome to React Native Prime on Android',
});

const Dashboard = ({ getData, loading, success }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <DashboardContainer>
      <Text>{instructions}</Text>

      {loading && <Text>Loading</Text>}
      {success && <Text>Data from Redux is loaded</Text>}
    </DashboardContainer>
  );
};

Dashboard.propTypes = {
  getData: PT.func.isRequired,
  loading: PT.bool.isRequired,
  success: PT.bool.isRequired,
};

export default connect(
  (state) => ({
    success: state.data.success,
    loading: state.data.loading,
  }),
  { getData },
)(Dashboard);
