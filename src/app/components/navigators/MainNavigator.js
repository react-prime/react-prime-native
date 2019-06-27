import { createStackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';

const MainNavigator = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: 'Tabs',
    headerMode: 'none',
  },
);

export default MainNavigator;
