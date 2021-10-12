import * as i from 'types';
import React from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

import { Pressable } from 'react-native';
import { setStatusBar } from 'services';
import { useScrollContext } from 'modules/general';

import { DasboardContainer, DashboardItem } from './styled';

export const DashboardOverview: React.FC = () => {
  const { scrollHandler } = useScrollContext();
  const navigation = useNavigation<i.DashboardNavigation>();

  useFocusEffect(React.useCallback(() => {
    setStatusBar('dark');
  }, []));

  return (
    <DasboardContainer
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {[...Array(10)].map((_, index) => {
        const id = `share_item_${index}`;

        return (
          <Pressable
            key={id}
            onPress={() => navigation.navigate('DashboardDetail', {
              shareId: id,
            })}
          >
            <SharedElement id={id}>
              <DashboardItem
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
            </SharedElement>
          </Pressable>
        );
      })}
    </DasboardContainer>
  );
};
