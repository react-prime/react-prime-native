import styled from 'styled-components';
import { View } from 'react-native';

export const LoadingContainer = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${props => props.theme.colors.lightSeaGreen};
`;