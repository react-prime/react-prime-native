import { MotiView } from 'moti';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const DasboardContainer = styled(Animated.ScrollView)`
  padding: 48px 16px;
`;

export const DashboardItem = styled(MotiView)`
  width: 100%;
  height: 75px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
