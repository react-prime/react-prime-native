import { AsyncStorage } from 'react-native';
import qs from 'qs';
import config from './config';

const getTokenAsync = async () => {
  return await AsyncStorage.getItem('x-access-token');
}

export default ({
  method, path, query, body, withAuth = config.defaultWithAuth, file = false, error,
}) => ({
  path: `${config.apiUrl}${path}${query ? `?${qs.stringify(query, { encode: false })}` : ''}`,
  options: {
    headers: {
      'Content-Type': 'application/json',
      ...(withAuth ? { 'x-access-token': getTokenAsync() } : {}),
    },
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
  },
  file,
  errorConfig: error,
});
