import { createSwitchNavigator } from 'react-navigation';

import { Loading } from 'screens/general';
import MainNavigator from './MainNavigator';

const RootNavigator = createSwitchNavigator({
  Loading: Loading,
  Main: MainNavigator,
}, {
  initialRouteName: 'Loading',
  headerMode: 'none',
});

export default RootNavigator;
