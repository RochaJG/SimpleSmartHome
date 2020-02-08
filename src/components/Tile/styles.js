import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.white};
  border-radius: 16px;
  height: ${props => (props.height || 75) + 'px'};
  width: ${props => (props.width || 75) + 'px'};
  padding: 15px;
`;
