import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';
import Svg from 'react-native-svg';

const IconWrapper = styled(View)`
  display: flex;
  justify-content: center;
`;

const SvgWrapper = ({ width, height, ...props }) => {
  const viewBoxWidth = width;
  const viewBoxHeight = height;
  const viewBoxRatio = viewBoxWidth / viewBoxHeight;

  return (
    <IconWrapper>
      <Svg
        width={width || (height && parseInt(height * viewBoxRatio, 10))}
        height={height || (width && parseInt(width / viewBoxRatio, 10))}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      >
        {props.children}
      </Svg>
    </IconWrapper>
  );
};

SvgWrapper.propTypes = {
  children: PT.node.isRequired,
  height: PT.string.isRequired,
  width: PT.string.isRequired,
};

export default SvgWrapper;
