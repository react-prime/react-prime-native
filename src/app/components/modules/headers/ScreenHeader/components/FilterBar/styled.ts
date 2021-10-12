import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

import { TextContent } from 'common/typography';

const FILTER_BAR_WIDTH = Dimensions.get('window').width - 32;

export const FilterBarHeader = styled(Animated.View)`
  position: absolute;
  left: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${FILTER_BAR_WIDTH}px;
  height: 48px;
  padding: 3px 24px 0;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.29;
  shadow-radius: 5px;
  elevation: 7;
`;

export const FilterBarListItem = styled(TextContent)`
  width: 100%;
  height: 40px;
  padding: 10px 0;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
