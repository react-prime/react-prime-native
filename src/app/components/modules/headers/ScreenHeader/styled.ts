import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const ScreenHeaderContainer = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.colors.blue};
`;
