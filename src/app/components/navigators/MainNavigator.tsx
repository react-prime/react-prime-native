import * as i from 'types';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingNavigator from './OnboardingNavigator';
import TabNavigator from './TabNavigator';

const MainStack = createStackNavigator<i.MainStack>();

const MainNavigator: React.FC = () => (
  <MainStack.Navigator
    initialRouteName="Onboarding"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <MainStack.Screen
      name="Onboarding"
      component={OnboardingNavigator}
    />
    <MainStack.Screen
      name="Tabs"
      component={TabNavigator}
    />
  </MainStack.Navigator>
);

export default MainNavigator;
