import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MotiView } from 'moti';

import { TextContent } from 'common/typography';

const FILTER_BAR_WIDTH = Dimensions.get('window').width - 32;

export const FilterBarContainer = styled(MotiView)<FilterBarIsOpen>`
  overflow: hidden;
  position: absolute;
  top: 100px;
  left: 16px;
  width: ${FILTER_BAR_WIDTH}px;

  /* ${({ isOpen }) => isOpen && css`
    bottom: -86px;
  `}; */
`;

export const FilterBarList = styled.View<FilterBarIsOpen>`
  align-items: flex-start;
  justify-content: center;
  padding: 0 24px;
  height: 48px;
  width: ${FILTER_BAR_WIDTH}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  ${({ isOpen }) => isOpen && css`
    height: 172px;
  `};
`;

// shadow-color: ${({ theme }) => theme.colors.black};
// shadow-opacity: 0.29;
// shadow-radius: 5px;
// elevation: 7;

type FilterBarIsOpen = {
  isOpen: boolean;
};

export const FilterBarListItem = styled(TextContent)`
  width: 100%;
  height: 40px;
  padding: 10px 0;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
