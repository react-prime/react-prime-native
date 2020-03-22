import React from 'react';
import { Path } from 'react-native-svg';

import { SvgWrapper } from './SvgWrapper';

export const Bolt: React.FC<BoltProps> = (props) => (
  <SvgWrapper {...props} viewBox="0 0 28 35">
    <Path d="M27.5 12.9l-25 24.3L10 19.4H0L7.5 0h20L15 12.9z" fill={props.fill} />
  </SvgWrapper>
);

type BoltProps = {
  width?: number;
  height?: number;
  fill: string;
};
