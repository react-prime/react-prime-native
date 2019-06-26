import { createStackNavigator } from 'react-navigation';

import { HomeScreen } from 'screens/general';
// import TabNavigator from './TabNavigator';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    // Tabs: {
    //   screen: TabNavigator,
    // },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default MainNavigator;
