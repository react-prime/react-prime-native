import * as i from 'types';
import * as React from 'react';
import { View, Text } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { StackScreenProps } from '@react-navigation/stack';

import { SharedView } from './styled';

export const DashboardDetail: React.FC<StackScreenProps<i.DashboardStack>> = ({ route }) => {
  const shareId = route.params?.shareId;

  if (!shareId) return null;

  return (
    <View>
      <SharedElement id={shareId}>
        <SharedView />
      </SharedElement>
      <Text>DashboardDetail</Text>
    </View>
  );
};
