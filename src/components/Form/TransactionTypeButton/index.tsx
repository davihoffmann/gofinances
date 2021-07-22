import React, { ReactElement } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Button, Icon, Title } from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface Props extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export default function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props): ReactElement {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon name={icons[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}
