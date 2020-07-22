const path = require('path');

module.exports = {
  getSourceExts() {
    return ['ts', 'tsx'];
  },
  extraNodeModules: {
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    'react': path.resolve(__dirname, 'node_modules/react'),
  },
};
