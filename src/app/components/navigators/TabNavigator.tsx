import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import theme from 'styles/theme';

import { Dashboard, Overview } from 'screens/general';
import { Bolt } from 'common/svg';

const TabNavigator = createBottomTabNavigator(
  {
    DashboardTab: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Bolt width={22} height={28} fill={tintColor || theme.colors.white} />
        ),
        tabBarLabel: 'Dashboard',
      }),
    },
    OverviewTab: {
      screen: Overview,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Bolt width={22} height={28} fill={tintColor || theme.colors.white} />
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
        paddingBottom: 12,
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
