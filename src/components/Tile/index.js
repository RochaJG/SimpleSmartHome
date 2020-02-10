import React from 'react';
import { Container } from './styles';

const Tile = props => {
  return (
    <Container mrg={props.margin} height={props.height} width={props.width}>
      {props.children}
    </Container>
  );
};

export default Tile;
