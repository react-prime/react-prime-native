import React from 'react';
import Svg from 'react-native-svg';
import styled from 'styled-components';

const IconWrapper = styled.View`
  display: flex;
  justify-content: center;
`;

const SvgWrapper: React.FC<SvgWrapperProps> = ({
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
  children: any;
  fill?: string;
  stroke?: string;
  height?: number;
  width?: number;
  viewBox: string;
};

export default SvgWrapper;
