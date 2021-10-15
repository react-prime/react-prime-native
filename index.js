import 'regenerator-runtime/runtime';
import 'react-native-reanimated';

import { AppRegistry } from 'react-native';

import App from './src/app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
