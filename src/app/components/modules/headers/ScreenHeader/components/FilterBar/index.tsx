import * as React from 'react';
import { Pressable } from 'react-native';

import { useLayout } from 'hooks';

import { FilterBarContainer, FilterBarList, FilterBarListItem } from './styled';

export const FilterBar: React.FC = () => {
  const [{ height }, onLayout] = useLayout();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <FilterBarContainer
      isOpen={isOpen}
      animate={{ height }}
      transition={{ type: 'timing' }}
    >
      <Pressable onPress={() => setIsOpen(!isOpen)}>
        <FilterBarList
          onLayout={onLayout}
          isOpen={isOpen}
        >
          <FilterBarListItem weight={600}>Amsterdam</FilterBarListItem>
          {isOpen && (
            <>
              <FilterBarListItem weight={600}>Eindhoven</FilterBarListItem>
              <FilterBarListItem weight={600}>Rotterdam</FilterBarListItem>
              <FilterBarListItem weight={600}>Utrecht</FilterBarListItem>
            </>
          )}
        </FilterBarList>
      </Pressable>
    </FilterBarContainer>
  );
};
