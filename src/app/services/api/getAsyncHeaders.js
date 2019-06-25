import { AsyncStorage } from 'react-native';
import { Localization } from 'expo';

import { getSecureToken } from 'services/secureToken';
import getLanguage from 'services/getLanguage';

const getAsyncHeaders = () => new Promise((resolve) => {
  getSecureToken().then((token) => {
    AsyncStorage.getItem('@LanguageStore:selected').then((lng) => {
      resolve({
        'x-lang': getLanguage(lng || Localization.locale.split('-')[0]),
        Authorization: token,
      });
    });
  });
});

export default getAsyncHeaders;
