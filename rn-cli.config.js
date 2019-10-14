const path = require("path");

module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
  extraNodeModules: {
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    'react': path.resolve(__dirname, 'node_modules/react'),
  },
  getProjectRoots() {
    return [
      path.resolve(__dirname),
      path.resolve(__dirname, '../native'),
    ];
  }
};