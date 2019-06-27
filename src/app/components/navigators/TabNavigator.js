import { createBottomTabNavigator } from 'react-navigation';

import theme from 'styles/theme';
import { isIphoneX } from 'services/deviceInfo';
import { Dashboard, Overview } from 'screens/general';

const TabNavigator = createBottomTabNavigator(
  {
    DashboardTab: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarLabel: 'Dashboard',
      }),
    },
    OverviewTab: {
      screen: Overview,
      navigationOptions: () => ({
        tabBarLabel: 'Overview',
      }),
    },
  },
  {
    initialRouteName: 'DashboardTab',
    tabBarOptions: {
      activeTintColor: theme.colors.lightSeaGreen,
      inactiveTintColor: theme.colors.darkSlateGray,
      style: {
        height: 83,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)',
        paddingBottom: isIphoneX ? 24 : 14,
        paddingTop: 12,
        paddingHorizontal: 8,
        backgroundColor: theme.colors.white,
      },
      labelStyle: {
        fontSize: 12,
        lineHeight: 20,
        fontFamily: theme.fonts.regular,
      },
    },
  },
);

export default TabNavigator;
