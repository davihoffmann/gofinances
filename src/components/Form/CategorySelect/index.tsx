import React, { ReactElement } from 'react';
import { Container, Category, Icon } from './styles';

interface Props {
  title: string;
}

export default function CategorySelect({ title }: Props): ReactElement {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
