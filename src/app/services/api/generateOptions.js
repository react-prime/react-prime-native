import qs from 'qs';
import API_ENDPOINT from 'config/api';

// Will fix withAuth when api is ready
export default ({
  method, path, query, body, withAuth = true, file = false, error,
}) => ({
  path: `${API_ENDPOINT}${path}${query ? `?${query ? `&${qs.stringify(query, { encode: false })}` : ''}` : ''}`,
  options: {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    },
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
  },
  file,
  errorConfig: error,
});
