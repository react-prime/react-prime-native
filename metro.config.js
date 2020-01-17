module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
        resetCache: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-typescript-transformer'),
  },
};
