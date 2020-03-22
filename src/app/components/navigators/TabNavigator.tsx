import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeArea } from 'react-native-safe-area-context';

import theme from 'styles/theme';

import { hasNotch } from 'services';
import { Dashboard, Overview } from 'screens/general';
import { Bolt } from 'common/svg';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const insets = useSafeArea();

  return (
    <Tab.Navigator
      initialRouteName="DashboardTab"
      tabBarOptions={{
        activeTintColor: theme.colors.prime,
        inactiveTintColor: theme.colors.gray,
        style: {
          height: hasNotch ? 90 : 55,
          paddingTop: hasNotch ? 16 : 8,
          paddingBottom: insets.bottom,
          paddingHorizontal: 8,
          backgroundColor: theme.colors.black,
        },
        labelStyle: {
          fontSize: 12,
          lineHeight: 20,
          fontFamily: theme.fonts.regular,
        },
      }}
    >
      <Tab.Screen
        name="DashboardTab"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Bolt width={16} height={22} fill={color || theme.colors.white} />
          ),
          tabBarLabel: 'Dashboard',
        }}
      />
      <Tab.Screen
        name="OverviewTab"
        component={Overview}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Bolt width={16} height={22} fill={color || theme.colors.white} />
          ),
          tabBarLabel: 'Overview',
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
