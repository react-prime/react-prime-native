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
      activeTintColor: theme.colors.black,
      inactiveTintColor: theme.colors.gray,
      style: {
        height: 70,
        borderTopWidth: 1,
        borderTopColor: theme.colors.prime,
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
