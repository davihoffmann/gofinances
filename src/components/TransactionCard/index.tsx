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

interface Category {
  name: string;
  icon: string;
}

interface DataTransaction {
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: DataTransaction;
}
 
export default function TransactionCard({ data }: Props): ReactElement {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount>
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
 