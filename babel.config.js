module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "babel-plugin-styled-components",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    [
      "module-resolver",
      {
        "alias": {
          "components": "./src/app/components",
          "common": "./src/app/components/common",
          "navigators": "./src/app/components/navigators",
          "modules": "./src/app/components/modules",
          "screens": "./src/app/components/screens",
          "ducks": "./src/app/ducks",
          "services": "./src/app/services",
          "styles": "./src/app/styles",
          "static": "./src/app/static",
          "config": "./src/config",
          "app": "./src/app"
        },
        "cwd": "babelrc"
      }
    ]
  ]
};
