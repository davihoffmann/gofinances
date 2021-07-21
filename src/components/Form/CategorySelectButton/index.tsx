import React, { ReactElement } from 'react';
import { Container, Category, Icon } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export default function CategorySelectButton({
  title,
  onPress,
}: Props): ReactElement {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
