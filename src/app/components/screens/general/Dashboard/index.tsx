import * as React from 'react';
import { Platform, Text } from 'react-native';

import { useDispatch, useSelector } from 'hooks';
import { getData } from 'ducks/data';
import { Container } from 'common/general';

const instructions = Platform.select({
  ios: 'Welcome to React Native Prime on iOS',
  android: 'Welcome to React Native Prime on Android',
});

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);

  React.useEffect(() => {
    dispatch(getData());
  }, [getData]);

  return (
    <Container>
      <Text>Android</Text>
      <Text>{instructions}</Text>
      {loading && <Text>Loading</Text>}
      {data && <Text>Data from Redux is loaded</Text>}
    </Container>
  );
};
