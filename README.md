<p align="center">
  <img src="https://github.com/JBostelaar/react-prime/blob/master/src/static/images/prime-logo.png" alt="prime-logo" width="250px" />
</p>

# React Native Prime
This boilerplate is based on the core principles of [React Prime](https://github.com/JBostelaar/react-prime/).

Install all dependencies as described in the [React Native docs](https://facebook.github.io/react-native/docs/getting-started "React Native Docs") (Don't forget to select the "React Native CLI Quickstart" tab instead of "Expo CLI Quickstart"). Also install Xcode and Android Studio as suggested in the docs.

## 📖 Installation
To install the project we recommend to use our [NPX command create-react-prime](https://github.com/react-prime/create-react-prime). To create a React Native project you can run `npx create-react-prime PROJECT --type native`.

Before you start, install the project dependencies (1/2; Make sure Cocoapods is installed as well). Next run the React Native metro bundler in a terminal tab (3). In a seperate terminal tab you have to run the project for the platform of choice (4):
1. `npm install`
2. `cd ios && pod install`
3. `npm run start start -- --reset-cache`
4. `npm run ios` or `npm run android`
5. Add your app to App Store Connect and to Fabric.io (both with code signing)

This will start the project with the correct simulator. You can also run you project on physical devices. Connect your device via usb. For iOS you will have to open `ios/PROJECT.xcworkspace` in Xcode and select your device in the top left corner. For Android you have to look into using [`adb`](https://developer.android.com/studio/command-line/adb). List your connected device by running `adb devices`. With a device connected `npm run android` will automatically open the project on your device.

#### TypeScript
This repository support TypeScript. Create your project using `npx create-react-prime PROJECT --type native --typescript`.


## Environments
The different environments are managed via productFlavors for Android and schemes for iOS. The Android productFlavors can be found in `android/app/build.gradle`. For iOS you can find the schemes by opening the `ios/PROJECT.xcworkspace` file. The schemes will be shown in the top left corner.

#### App icons
The app icons can be changed. For Android you can find the icons in `android/app/src/main/res/mipmap-*`. You can just replace the icons. For iOS you can replace the files in `ios/PROJECT/Images.xcassets`. Although you can edit the images via Xcode as well.


## 🚀 Releasing
I recommend using a version branch as used in [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). For example create a branch called `release/1.0.1`. On this bracnh, do not forget to bump your version- and build numbers. For iOS open `ios/PROJECT.xcworkspace` and bump the numbers in the Info tab. For Android open `android/app/build.gradle` and look for `versionCode` and `versionName`.


## ⚡️ Animations
React Native runs, separately from Native code, on a JS thread instead of the UI thread. Between these threads there is a "Bridge" to communicate. This communication is mostly expensive and slow. To run animations on 60FPS you can use declarative animations on the UI thread using the third-party libraries [`react-native-gesture-handler`](https://github.com/kmagiera/react-native-gesture-handler) and [`react-native-reanimated`](https://github.com/kmagiera/react-native-reanimated). This talk [Declarative future of gestures and animations in React Native](https://www.youtube.com/watch?v=kdq4z2708VM) explains more about declarative animations.


## 📱 Testing
If you want to extend your application with tests I recommend to look into [`react-native-testing-library`](https://github.com/callstack/react-native-testing-library) for unit testing or [`detox`](https://github.com/wix/Detox) for end-to-end testing.


## 🔍 Debugging
The upcoming React Native version 0.62.x will include a new debugging tool by default called [Flipper](https://fbflipper.com/). This seems like a promising library, but for now I can recommend to check out [react-native-debugger](https://github.com/jhen0409/react-native-debugger). This let's you debug for example the Redux Store and Network Requests.


## 💚 Third-party libraries
#### `react-native-config`
To manage different variables for the different environments we use [`react-native-config`](https://github.com/luggit/react-native-config). It loads an `.env.*` file via productFlavors on Android and schemes on iOS. This is all setup and works out of the box. You can add secrets in your environment files. It's up to you if you add them to your `.gitignore`.

#### `react-native-bootsplash`
For creating a custom splashscreen we use [`react-native-bootsplash`](https://github.com/zoontek/react-native-bootsplash). This packages is created to design your launch screen using the platform depended tools [Xcode layout editor](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/) and [Android drawable resource](https://developer.android.com/guide/topics/resources/drawable-resource). You can find how to create splash screens over there.

#### `@react-native-community/async-storage`
To handle your locale storage you have to use [`@react-native-community/async-storage`](https://github.com/react-native-community/async-storage). This package let you handle local data based on a Promise API. Note that you can only store strings inside local data, just as on web.

#### `react-native-device-info`
If you want detect certain devices it's recommended to use [`react-native-device-info`](https://github.com/react-native-community/react-native-device-info). This package offers a great Promise based API which let's you get all different kinds of data from the devices. Note the differences between Android and iOS.

To use the data inside your styled components you can combine you data with the `<ThemeProvider />` in `App.js`. You can also use the data inside React Components using the React Context API. Both situations are provided in the example below:
```javascript
import theme from 'styles/theme';
import { deviceIsIphoneXModel, deviceHasNotch } from 'services/deviceInfo';

export const DeviceContext = React.createContext(null);

const App = () => {
  const [isIphoneXModel, setIsIphoneXModel] = useState(false);
  const [hasNotch, setHasNotch] = useState(false);

  useEffect(async () => {
    const checkIsXModel = await deviceIsIphoneXModel();
    const checkHasNotch = await deviceHasNotch();

    setIsIphoneXModel(checkIsXModel);
    setHasNotch(checkHasNotch);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={{ ...theme, ...this.state }}>
        <DeviceContext.Provider value={this.state}>
          <App />
        </DeviceContext.Provider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
```