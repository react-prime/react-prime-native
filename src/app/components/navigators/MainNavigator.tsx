import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingNavigator from './OnboardingNavigator';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Onboarding"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <Stack.Screen
      name="Onboarding"
      component={OnboardingNavigator}
    />
    <Stack.Screen
      name="Tabs"
      component={TabNavigator}
    />
  </Stack.Navigator>
);

export default MainNavigator;
