import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Tabs"
    headerMode="none"
    screenOptions={{
      gestureEnabled: false,
    }}
  >
    <Stack.Screen
      name="Tabs"
      component={TabNavigator}
    />
  </Stack.Navigator>
);

export default MainNavigator;
