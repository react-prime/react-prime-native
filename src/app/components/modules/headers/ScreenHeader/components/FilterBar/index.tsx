import * as React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MotiView } from 'moti';
import {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';

import { useAnimateFilterItems } from 'services';
import { useScrollContext } from 'modules/general';

import { FilterBarHeader, FilterBarListItem } from './styled';

const OTHER_CITIES = ['Rotterdam', 'Utrecht', 'Eindhoven'];

export const FilterBar: React.FC = () => {
  const [didAnimate, setDidAnimate] = React.useState(false);
  const fadeIn = useAnimateFilterItems();
  const { filterStyle } = useScrollContext();

  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withSpring(1) : withTiming(0),
  );

  const filterBarStyle = useAnimatedStyle(() => ({
    height: interpolate(
      progress.value,
      [0, 1],
      [48, 170],
      Extrapolate.CLAMP,
    ),
  }), [progress.value]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        fadeIn.transitionTo((state) => state === 'open' ? 'close' : 'open');
        open.value = !open.value;
      }}
    >
      <FilterBarHeader style={[filterStyle, filterBarStyle]}>
        <FilterBarListItem weight={600}>
          Amsterdam
        </FilterBarListItem>
        {OTHER_CITIES.map((city, index) => {
          return (
            <MotiView
              key={`filter_item_${index}`}
              state={fadeIn}
              animateInitialState={false}
              transition={{ delay: 50 * index }}
            >
              <FilterBarListItem weight={600}>{city}</FilterBarListItem>
            </MotiView>
          );
        })}
      </FilterBarHeader>
    </TouchableWithoutFeedback>
  );
};
