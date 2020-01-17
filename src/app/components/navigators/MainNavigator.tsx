import { createStackNavigator } from 'react-navigation-stack';

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
