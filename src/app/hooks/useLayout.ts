import * as React from 'react';
import { View } from 'react-native';

export const useLayout = () => {
  const [layout, setLayout] = React.useState({
    height: 0,
  });

  const onLayout: React.ComponentProps<typeof View>['onLayout'] = ({
    nativeEvent,
  }) => {
    setLayout(nativeEvent.layout);
  };

  return [layout, onLayout] as const;
};
