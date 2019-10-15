import React from 'react';
import styled from 'styled-components';
import Svg from 'react-native-svg';

const IconWrapper = styled.View`
  display: flex;
  justify-content: center;
`;

const SvgWrapper: React.FC<SvgWrapperProps> = ({ width, height, children }) => {
  const viewBoxWidth = width;
  const viewBoxHeight = height;
  const viewBoxRatio = viewBoxWidth / viewBoxHeight;

  return (
    <IconWrapper>
      <Svg
        width={width || (height && height * viewBoxRatio)}
        height={height || (width && width / viewBoxRatio)}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      >
        {children}
      </Svg>
    </IconWrapper>
  );
};

type SvgWrapperProps = {
  height?: number;
  width?: number;
}

export default SvgWrapper;
