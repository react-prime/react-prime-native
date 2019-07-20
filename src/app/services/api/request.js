import 'cross-fetch/polyfill';
import triggerErrorMessage from './triggerErrorMessage';
import handleStatusCodes from './handleStatusCodes';

export default ({
  path, options, file, errorConfig = {},
}) => new Promise(async (resolve, reject) => {
  fetch(path, options)
    .then((response) => {
      if (handleStatusCodes(response.status)) return;

      if (response.ok) {
        if (file) return response.blob();
        return response.json();
      }

      return Promise.reject(response.json());
    })
    .then((json) => { resolve(json); })
    .catch((json) => {
      try {
        json.then((err) => {
          triggerErrorMessage(errorConfig, err);
          reject(err);
        }).catch();
      } catch (err) {
        triggerErrorMessage(errorConfig, json);
        reject(json);
      }
    });
});
