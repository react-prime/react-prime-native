<p align="center">
  <img src="https://github.com/JBostelaar/react-prime/blob/master/src/static/images/prime-logo.png" alt="prime-logo" width="250px" />
</p>

# React Native Prime
This boilerplate is based on the core principles of [React Prime](https://github.com/JBostelaar/react-prime/).

Install all dependencies as described in the [React Native docs under the "React Native CLI Quickstart" section](https://facebook.github.io/react-native/docs/getting-started "React Native Docs"). Also install Xcode and Android Studio as suggested in the docs.


## Installation
To install the project we recommend to use our [NPX command create-react-prime](https://github.com/react-prime/create-react-prime) (Don't forget to select the "React Native CLI Quickstart" tab instead of "Expo CLI Quickstart"). To create a React Native project you can run `npx create-react-prime PROJECT-NAME --type native`.

Before you start, install the project dependencies (1/2). Next run the React Native metro bundler in a terminal tab (3). In a seperate terminal tab you have to run the project for the platform of choice (4):
1. `npm install`
2. `cd ios && pod install`
3. `npm run start start -- --reset-cache`
4. `npm run ios` or `npm run android`

This will start the project with the correct emulator.


## Environments


### App icons


## Packages
How to use packages:
`react-native-config`
`react-native-bootsplash`
`@react-native-community/async-storage`
`react-native-device-info` (with ThemeProvider in App.js)


## Debugging
[Flipper](https://github.com/facebook/flipper)


## Setup
1. Github repository
2. Bitrise
3. App Store Connect / App Signing
4. Crashlytics / Fabric.io / buildConfig
5. Bitrise