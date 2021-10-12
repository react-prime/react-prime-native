import { MotiView } from 'moti';
import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const DasboardContainer = styled(Animated.ScrollView)`
  padding: 48px 16px 0;
`;

export const DashboardItem = styled(MotiView)<DashboardItemProps>`
  width: 100%;
  height: 75px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.lightPrime};

  ${({ isLast }) => isLast && css`
    margin-bottom: 60px;
  `};
`;

type DashboardItemProps = {
  isLast?: boolean;
};
