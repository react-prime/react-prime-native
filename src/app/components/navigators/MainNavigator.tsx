import * as i from 'types';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabs from './MainTabs';

const MainStack = createStackNavigator<i.MainTabBar>();

const MainNavigator: React.FC = () => (
  <MainStack.Navigator
    initialRouteName="MainTabs"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <MainStack.Screen name="MainTabs" component={MainTabs} />
  </MainStack.Navigator>
);

export default MainNavigator;
