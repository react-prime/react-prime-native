import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import theme from 'styles/theme';

import { hasNotch } from 'services';
import { Dashboard, Overview } from 'screens/general';
import { Bolt } from 'common/svg';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="DashboardTab"
      tabBarOptions={{
        activeTintColor: theme.colors.prime,
        inactiveTintColor: theme.colors.gray,
        style: {
          height: hasNotch ? 84 : 56,
          paddingTop: hasNotch ? 12 : 0,
          paddingBottom: insets.bottom,
          paddingHorizontal: 8,
          backgroundColor: theme.colors.black,
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
