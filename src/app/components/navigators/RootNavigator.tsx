import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading } from 'screens/general';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName="Loading"
    headerMode="none"
    screenOptions={{
      gestureEnabled: false,
    }}
  >
    <Stack.Screen
      name="Loading"
      component={Loading}
    />
    <Stack.Screen
      name="Main"
      component={MainNavigator}
    />
  </Stack.Navigator>
);

export default RootNavigator;
