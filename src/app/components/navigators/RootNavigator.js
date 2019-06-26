import { createSwitchNavigator } from 'react-navigation';

import { LoadingScreen } from 'screens/general';
import MainNavigator from './MainNavigator';

const RootNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  Main: MainNavigator,
}, {
  initialRouteName: 'Loading',
  headerMode: 'none',
});

export default RootNavigator;
