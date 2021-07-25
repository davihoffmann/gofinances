import React, { ReactElement } from 'react';
import { 
  Container, 
  Title,
  Amount
} from './styles';

interface Props {
  title: string;
  amount: string;
  color: string;
}
 
export default function HistoryCard({title, amount, color}: Props): ReactElement {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
 