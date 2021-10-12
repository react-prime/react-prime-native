import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Screen1, Screen2 } from 'screens/onboarding';

const Stack = createStackNavigator();

const OnboardingNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Screen1"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
  </Stack.Navigator>
);

export default OnboardingNavigator;
