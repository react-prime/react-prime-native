import * as i from 'types';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabsNavigator from './TabsNavigator';

const MainStack = createStackNavigator<i.MainStack>();

const MainNavigator: React.FC = () => (
  <MainStack.Navigator
    initialRouteName="TabNavigator"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <MainStack.Screen name="TabNavigator" component={TabsNavigator} />
  </MainStack.Navigator>
);

export default MainNavigator;
