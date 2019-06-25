import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled(Text)`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.darkSlateGray};
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 8px;
  text-align: center;
`;

export const Message = styled(Text)`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.darkSlateGray};
  font-size: 16px;
  padding-bottom: 12px;
  line-height: 24px;
  text-align: center;
`;
