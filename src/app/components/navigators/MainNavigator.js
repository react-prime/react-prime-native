import { createStackNavigator } from 'react-navigation';

import { HomeScreen } from 'screens/general';
// import TabNavigator from './TabNavigator';

const MainNavigator = createStackNavigator(
  {
    // Tabs: {
    //   screen: TabNavigator,
    // },
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Tabs',
    headerMode: 'none',
  },
);

export default MainNavigator;
