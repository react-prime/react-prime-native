import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import theme from 'styles/theme';
import { isIphoneX } from 'services/deviceInfo';

import { Dashboard, Overview } from 'screens/general';
import { Bolt } from 'common/svg';

const TabNavigator = createBottomTabNavigator(
  {
    DashboardTab: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => ( // eslint-disable-line
          <Bolt width="24" height="35" fill={tintColor} />
        ),
        tabBarLabel: 'Dashboard',
      }),
    },
    OverviewTab: {
      screen: Overview,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => ( // eslint-disable-line
          <Bolt width="24" height="35" fill={tintColor} />
        ),
        tabBarLabel: 'Overview',
      }),
    },
  },
  {
    initialRouteName: 'DashboardTab',
    tabBarOptions: {
      activeTintColor: theme.colors.prime,
      inactiveTintColor: theme.colors.gray,
      style: {
        height: 75,
        paddingBottom: isIphoneX ? 24 : 12,
        paddingTop: 12,
        paddingHorizontal: 8,
        backgroundColor: theme.colors.black,
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
