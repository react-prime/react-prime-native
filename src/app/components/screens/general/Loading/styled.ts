import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.prime};
`;
