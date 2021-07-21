import React, { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { 
  Container,
  Title
} from './styles';

type Props = {
  title: string;
} & TouchableOpacityProps;
 
export default function Button({title, ...rest}: Props): ReactElement {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
 