import * as i from 'types';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading } from 'screens/general';
import MainNavigator from './MainNavigator';

const RootStack = createStackNavigator<i.RootStack>();

const RootNavigator: React.FC = () => (
  <RootStack.Navigator
    initialRouteName="Loading"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <RootStack.Screen
      name="Loading"
      component={Loading}
    />
    <RootStack.Screen
      name="Main"
      component={MainNavigator}
    />
  </RootStack.Navigator>
);

export default RootNavigator;
