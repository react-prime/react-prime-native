import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { setStatusBar } from 'services';
import { useScrollContext } from 'modules/general';

import { DasboardContainer, DashboardItem } from './styled';

export const Dashboard: React.FC = () => {
  const { scrollHandler } = useScrollContext();

  useFocusEffect(React.useCallback(() => {
    setStatusBar('dark');
  }, []));

  return (
    <DasboardContainer
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {[...Array(10)].map((_, index) => {
        return (
          <DashboardItem
            key={`item_${index}`}
            from={{
              opacity: 0,
              translateY: 20,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 350,
              delay: 100 * index,
            }}
          />
        );
      })}
    </DasboardContainer>
  );
};
