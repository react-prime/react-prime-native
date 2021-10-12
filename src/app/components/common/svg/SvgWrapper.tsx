import React from 'react';
import Svg from 'react-native-svg';
import styled from 'styled-components/native';

const IconWrapper = styled.View`
  display: flex;
  justify-content: center;
`;

export const SvgWrapper: React.FC<SvgWrapperProps> = ({
  children, width, height, fill, stroke, viewBox,
}) => {
  return (
    <IconWrapper>
      <Svg
        width={width}
        height={height}
        viewBox={viewBox}
      >
        {React.cloneElement(children as React.ReactElement, { fill, stroke })}
      </Svg>
    </IconWrapper>
  );
};

type SvgWrapperProps = {
  fill?: string;
  stroke?: string;
  height?: number;
  width?: number;
  viewBox: string;
};
