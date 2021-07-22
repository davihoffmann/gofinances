import React, { ReactElement } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({
  title,
  onPress,
  ...rest
}: Props): ReactElement {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
