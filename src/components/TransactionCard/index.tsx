import React, { ReactElement } from 'react';
import { Props } from './types';
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
 
export default function TransactionCard({ data }: Props): ReactElement {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Data>{data.date}</Data>
      </Footer>
    </Container>
  );
}
 