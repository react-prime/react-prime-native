import React from 'react';
import { Path } from 'react-native-svg';

import SvgWrapper from './SvgWrapper';

const Bolt: React.FC<BoltProps> = ({ fill, height, width }) => (
  <SvgWrapper {...{ height, width }}>
    <Path d="M27.5 12.9l-25 24.3L10 19.4H0L7.5 0h20L15 12.9z" fill={fill} />
  </SvgWrapper>
);

type BoltProps = {
  fill: string;
  height: number;
  width: number;
}

export default Bolt;
