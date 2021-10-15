import * as i from 'types';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabs from './MainTabs';

const MainStack = createNativeStackNavigator<i.MainTabBar>();

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
