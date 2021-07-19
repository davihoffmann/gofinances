import React, { ReactElement } from 'react';
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Data
} from './styles';
 
export default function TransactionCard(): ReactElement {
  return (
    <Container>
      <Title>Desenvolvimento de Site</Title>

      <Amount>
        R$ 12.000,00
      </Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Data>13/04/2020</Data>
      </Footer>
    </Container>
  );
}
 