import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 5px 16px rgba(50, 132, 229, 0.16);
  height: ${props => props.height || '75px'};
  width: ${props => props.width || '75px'};
  padding: 15px;
`;
