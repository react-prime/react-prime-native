import * as i from 'types';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Screen1, Screen2 } from 'screens/onboarding';

const OnboardignStack = createStackNavigator<i.OnboardingStack>();

const OnboardingNavigator: React.FC = () => (
  <OnboardignStack.Navigator
    initialRouteName="Screen1"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <OnboardignStack.Screen name="Screen1" component={Screen1} />
    <OnboardignStack.Screen name="Screen2" component={Screen2} />
  </OnboardignStack.Navigator>
);

export default OnboardingNavigator;
