import 'isomorphic-fetch';

import getAsyncHeaders from './getAsyncHeaders';
import redirectToLogin from './redirectToLogin';

export default ({
  path, options,
}) => new Promise((resolve, reject) => {
  const extendedOptions = Object.assign({}, options);
  getAsyncHeaders()
    .then((headers) => {
      if (headers) {
        extendedOptions.headers = Object.assign(extendedOptions.headers, headers);
      }
      if (__DEV__) console.log('options: ', extendedOptions); // eslint-disable-line no-console
      fetch(path, extendedOptions)
        .then((response) => {
          if (__DEV__) console.log('REQUEST RESPONSE: ', response); // eslint-disable-line no-console
          if (!response.ok) {
            reject(new Error(response._bodyInit));
          } else {
            const json = JSON.parse(response._bodyInit);
            resolve(json);
          }
        })
        .catch(({ json }) => {
          try {
            json
              .then(() => {
                reject(redirectToLogin);
              })
              .catch();
          } catch (err) {
            reject(redirectToLogin);
          }
        });
    })
    .catch(() => {
      reject(redirectToLogin);
    });
});
