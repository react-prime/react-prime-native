<p align="center">
  <img src="https://github.com/JBostelaar/react-prime/blob/master/src/static/images/prime-logo.png" alt="prime-logo" width="250px" />
</p>

# React Native Prime

This boilerplate is based on the core principles of [React Prime](https://github.com/JBostelaar/react-prime/).

Install all dependencies as described in the [React Native docs under the "React Native CLI Quickstart" section](https://facebook.github.io/react-native/docs/getting-started "React Native Docs"). Also install Xcode and Android Studio as suggested in the docs.

Before you start install the project dependencies with `npm install`.
Next you have to run the metro bundler in a terminal tab and run the project for the platform of choice:
1. `react-native start -- --reset-cache`
2. `react-native run-ios` / `react-native run-android`

You can also chose to use npm commands:
1. `npm run start -- --reset-cache`
2. `npm run ios` / `npm run android`

This will start the project with the correct emulator. To properly rename your project you should use `react-native-rename` [See react-native-rename on NPM](https://www.npmjs.com/package/react-native-rename). This will rename your app correctly throughout all files.

The NPM commands will become interesting when you add more complex startup scripts with for example environments:

## Environments
If you want to create different environments use `react-native-schemes-manager` to create Xcode schemes [See scheme manager Github page](https://github.com/thekevinbrown/react-native-schemes-manager). On Android you have to manually configure build types. You can read more about build types on [this Android developer page](https://developer.android.com/studio/build/build-variants?utm_source=android-studio#build-types).

## Tips
1. Use debugging tools like `react-native-debugger` [See react-native-debugger Github page](https://github.com/jhen0409/react-native-debugger) or `reactotron` [See reactotron Github page](https://github.com/infinitered/reactotron).
2. For SVG's use `react-native-svg`, easily convert SVG's with [this SVGR tool](https://www.smooth-code.com/open-source/svgr/playground/).
3. Don't forget to test on real devices every now and then.

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
