import { createSwitchNavigator } from 'react-navigation';

import { Loading } from 'screens/general';
import MainNavigator from './MainNavigator';

const RootNavigator = createSwitchNavigator({
  Loading,
  Main: MainNavigator,
}, {
  initialRouteName: 'Loading',
});

export default RootNavigator;
