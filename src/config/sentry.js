import ENV from 'services/getEnv';

const getSentryEndpoint = () => {
  switch (ENV) {
    case 'production':
      return '';

    case 'dev':
      return '';

    default:
      return '';
  }
};

export default getSentryEndpoint();
