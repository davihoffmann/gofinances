import React, { ReactElement } from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';
 
export default function HighlightCard(): ReactElement {
  return (
    <Container>

      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>

    </Container>
  );
}
 