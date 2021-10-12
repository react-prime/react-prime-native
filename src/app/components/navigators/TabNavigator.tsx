import * as i from 'types';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { hasNotch } from 'services';
import theme from 'styles/theme';
import { ScreenHeader } from 'modules/headers';
import { Dashboard, Overview } from 'screens/general';
import { Bolt } from 'common/svg';

const TabsStack = createBottomTabNavigator<i.TabsStack>();

const TabNavigator: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <TabsStack.Navigator
      initialRouteName="DashboardTab"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.prime,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarStyle: {
          height: hasNotch ? 84 : 56,
          paddingTop: hasNotch ? 12 : 0,
          paddingBottom: insets.bottom,
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
          header: (props) => <ScreenHeader {...props} />,
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
