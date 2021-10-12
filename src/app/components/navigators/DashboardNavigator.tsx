import * as i from 'types';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { ScreenHeader } from 'modules/headers';

import { DashboardOverview, DashboardDetail } from 'screens/dashboard';

const DashboardStack = createSharedElementStackNavigator<i.DashboardStack>();

const DashboardNavigator: React.FC = () => (
  <DashboardStack.Navigator
    initialRouteName="DashboardOverview"
    screenOptions={{
      gestureEnabled: false,
    }}
  >
    <DashboardStack.Screen
      name="DashboardOverview"
      component={DashboardOverview}
      options={{
        header: (props) => <ScreenHeader {...props} />,
      }}
    />
    <DashboardStack.Screen
      name="DashboardDetail"
      component={DashboardDetail}
      options={{
        headerShown: false,
      }}
      sharedElements={(route) => {
        const { shareId } = route.params;
        return [shareId];
      }}
    />
  </DashboardStack.Navigator>
);

export default DashboardNavigator;
