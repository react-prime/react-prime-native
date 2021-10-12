import styled from 'styled-components/native';
import { MotiView } from 'moti';

import { getStatusBarHeight, isIphone } from 'services';

const statusBarHeight = getStatusBarHeight();

export const ScreenHeaderContainer = styled(MotiView)`
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: ${isIphone ? statusBarHeight + 24 : statusBarHeight}px;
  padding-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
