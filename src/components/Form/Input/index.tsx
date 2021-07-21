import React, { ReactElement } from 'react';
import { TextInputProps } from 'react-native';
import {
  Container
} from './styles';

type Props = TextInputProps;
 
export default function Input({...rest}: Props): ReactElement {
  return (
    <Container {...rest} />
  );
}
 