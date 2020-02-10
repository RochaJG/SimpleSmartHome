import styled from 'styled-components/native';

const valueToPX = (value = 0) => {
  return `${value}px`;
};

const setupMargin = (margin = '0') => {
  margin = margin.split(',');
  switch (margin.length) {
    case 1:
      return `margin: ${margin[0]}px;`;
    case 2:
      return `
        margin-top: ${margin[0]}px;
        margin-bottom: ${margin[0]}px;
        margin-left: ${margin[1]}px;
        margin-right: ${margin[1]}px;
      `;
    case 4:
      return `
        margin-top: ${margin[0]}px;
        margin-bottom: ${margin[1]}px;
        margin-left: ${margin[2]}px;
        margin-right: ${margin[3]}px;
      `;
  }
};

export const Container = styled.View`
  background-color: ${props => props.theme.colors.white};
  border-radius: 16px;
  height: ${props => `${props.height}` || `80px`};
  width: ${props => `${props.width}` || `80px`};
  padding: 15px;
  ${props => setupMargin(props.mrg)};
`;
