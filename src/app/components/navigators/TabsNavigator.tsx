import * as i from 'types';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from 'styles/theme';
import { hasNotch } from 'services';
import { Dashboard } from 'screens/general/Dashboard';
import { Overview } from 'screens/general/Overview';
import { Bolt } from 'common/svg';

const TabsStack = createBottomTabNavigator<i.TabsStack>();

const TabNavigator: React.FC = () => {
  return (
    <TabsStack.Navigator
      initialRouteName="DashboardTab"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.prime,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarStyle: {
          height: hasNotch ? 84 : 56,
          paddingTop: hasNotch ? 12 : 0,
          paddingHorizontal: 8,
          backgroundColor: theme.colors.black,
        },
      }}
    >
      <TabsStack.Screen
        name="DashboardTab"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Bolt width={16} height={22} fill={color || theme.colors.white} />
          ),
          tabBarLabel: 'Dashboard',
        }}
      />
      <TabsStack.Screen
        name="OverviewTab"
        component={Overview}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Bolt width={16} height={22} fill={color || theme.colors.white} />
          ),
          tabBarLabel: 'Overview',
        })}
      />
    </TabsStack.Navigator>
  );
};

export default TabNavigator;
