import * as i from 'types';
import React from 'react';
import Svg from 'react-native-svg';
import styled from 'styled-components';

const IconWrapper = styled.view`
  display: flex;
  justify-content: center;
`;

export const SvgWrapper: React.FC<SvgWrapperProps> = ({
  width, height, fill, stroke, viewBox, ...props
}) => {
  return (
    <IconWrapper>
      <Svg
        width={width}
        height={height}
        viewBox={viewBox}
      >
        {React.cloneElement(props.children, { fill, stroke })}
      </Svg>
    </IconWrapper>
  );
};

type SvgWrapperProps = {
  children: React.DetailedReactHTMLElement<i.AnyObject, HTMLElement>;
  fill?: string;
  stroke?: string;
  height?: number;
  width?: number;
  viewBox: string;
};
