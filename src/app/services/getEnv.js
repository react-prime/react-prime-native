const getEnv = () => {
  // const env = Constants.manifest.releaseChannel;

  // if (env === null || env === undefined || env === '') return 'dev';
  // if (env.indexOf('test') !== -1) return 'test';
  // if (env.indexOf('acceptation') !== -1) return 'acceptation';

  // return 'production';

  return 'dev';
};

export default getEnv();
