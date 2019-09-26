<p align="center">
  <img src="https://github.com/JBostelaar/react-prime/blob/master/src/static/images/prime-logo.png" alt="prime-logo" width="250px" />
</p>

# React Native Prime

This boilerplate is based on the core principles of [React Prime](https://github.com/JBostelaar/react-prime/).

Install all dependencies as described in the [React Native docs under the "React Native CLI Quickstart" section](https://facebook.github.io/react-native/docs/getting-started "React Native Docs"). Also install Xcode and Android Studio as suggested in the docs.

## Installation
To install the project we recommend to use our [NPX command create-react-prime](https://github.com/react-prime/create-react-prime). To create a React Native project you can run `npx create-react-prime CUSTOMNAME --type native`.

Before you start, install the project dependencies with `npm install`.
Next run the React Native metro bundler in a terminal tab (1). In a seperate terminal tab you have to run the project for the platform of choice (2):
1. `npm run start start -- --reset-cache`
2. `npm run ios` or `npm run android`

This will start the project with the correct emulator.

## Environments


## Packages
How to use packages:
`react-native-config`
`react-native-bootsplash`
`@react-native-community/async-storage`

## Debugging


## Packages
This boilerplate for React Native is build with:
* [React Native](https://github.com/facebook/react-native)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk) to handle async actions
* [React Navigation](https://github.com/react-navigation/react-navigation)
* [Styled-Components](https://www.styled-components.com)
* [Babel](http://babeljs.io) for ES6 and ES7
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation DX (developer experience).
* [ESLint](http://eslint.org) to maintain a consistent code style
* Refer to `package.json` for more details