import React, { ReactElement } from 'react';
import { TextInputProps } from 'react-native';
import {
  Container
} from './styles';

interface Props extends TextInputProps {
  active?: boolean
}
 
export default function Input({active = false, ...rest}: Props): ReactElement {
  return (
    <Container 
      active={active}
      {...rest} 
    />
  );
}
 