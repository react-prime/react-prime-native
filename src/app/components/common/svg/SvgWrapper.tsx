import React from 'react';
import styled from 'styled-components';
import Svg from 'react-native-svg';

const IconWrapper = styled.View`
  display: flex;
  justify-content: center;
`;

const SvgWrapper: React.FC<SvgWrapperProps> = ({ width, height, children }) => {
  const viewBoxRatio = width / height;

  return (
    <IconWrapper>
      <Svg
        width={width || (height && height * viewBoxRatio)}
        height={height || (width && width / viewBoxRatio)}
        viewBox={`0 0 ${width} ${height}`}
      >
        {children}
      </Svg>
    </IconWrapper>
  );
};

type SvgWrapperProps = {
  height: number;
  width: number;
}

export default SvgWrapper;
