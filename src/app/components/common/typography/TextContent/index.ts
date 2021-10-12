import * as i from 'types';
import styled, { css } from 'styled-components/native';

export const TextContent = styled.Text<TextContentProps>`
  color: ${({ theme, color }) => theme.colors[color || 'black']};
  font-size: ${({ size }) => size || 16}px;
  text-align: ${({ align }) => align || 'left'};

  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`;

type TextContentProps = {
  uppercase?: boolean;
  margin?: string;
  align?: 'left' | 'center';
  color?: i.ColorsFromTheme<'black' | 'white' | 'prime' | 'gray'>;
  size?: 10 | 12 | 14 | 18 | 22;
};
