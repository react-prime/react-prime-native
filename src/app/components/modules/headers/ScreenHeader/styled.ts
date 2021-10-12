import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const ScreenHeaderContainer = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const FILTER_BAR_WIDTH = Dimensions.get('window').width - 32;

export const FilterBar = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding: 0 24px;
  position: absolute;
  bottom: -24px;
  left: 16px;
  height: 48px;
  width: ${FILTER_BAR_WIDTH}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 40px;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.29;
  shadow-radius: 5px;
  elevation: 7;
`;
