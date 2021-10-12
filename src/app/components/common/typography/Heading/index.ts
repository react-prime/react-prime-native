import * as i from 'types';
import styled, { css } from 'styled-components/native';

export const Heading = styled.Text<HeadingProps>`
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  font-size: ${({ size }) => size || 28}px;
  font-weight: bold;

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`;

type HeadingProps = {
  uppercase?: boolean;
  margin?: string;
  color?: i.ColorsFromTheme<'black' | 'white' | 'prime' | 'gray'>;
  size?: 18 | 22 | 24 | 28;
};
