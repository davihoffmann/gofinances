import React, { ReactElement } from 'react';

import Input from '../../components/Form/Input';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import Button from '../../components/Form/Button';

import { 
  Container, Header, Title, Form, Fields
} from './styles';
 
export default function Register(): ReactElement {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypeButton />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
 