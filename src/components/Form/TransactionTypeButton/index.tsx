import React, { ReactElement } from 'react';
import {
  Container,
  Icon,
  Title
} from './styles';

interface Props {
  title: string;
  type: 'up' | 'down';
}

export default function TransactionTypeButton({ title, type }: Props): ReactElement {
  return (
    <Container>
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  );
}
 