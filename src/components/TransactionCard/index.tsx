import React, { ReactElement } from 'react';
import { categories } from '../../utils/categories';
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
  const [ category ] = categories.filter(
    item => item.key === data.category
  );

  return (
    <Container>
      <Title>{data.name}</Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Data>{data.date}</Data>
      </Footer>
    </Container>
  );
}
 