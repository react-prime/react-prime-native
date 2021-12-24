<<<<<<< HEAD
import * as React from 'react';
=======
import * as React from 'react';
>>>>>>> a34cf2cd8dbe3ae5d1fca808ba6cf1220b65dc4c
import { Platform, Text } from 'react-native';

import { Container } from 'common/general';

const instructions = Platform.select({
  ios: 'Welcome to React Native Prime on iOS',
  android: 'Welcome to React Native Prime on Android',
});

export const Dashboard: React.FC = () => {
<<<<<<< HEAD
=======
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);

  React.useEffect(() => {
    dispatch(getData());
  }, [getData]);

>>>>>>> a34cf2cd8dbe3ae5d1fca808ba6cf1220b65dc4c
  return (
    <Container>
      <Text>Android</Text>
      <Text>{instructions}</Text>
    </Container>
  );
};
