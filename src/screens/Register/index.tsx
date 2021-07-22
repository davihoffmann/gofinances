import React, { ReactElement, useState } from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';

import InputForm from '../../components/Form/InputForm';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import Button from '../../components/Form/Button';

import CategorySelect from '../CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType,
} from './styles';

interface FormData {
  name: string;
  amount: string;
}

export default function Register(): ReactElement {
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const { control, handleSubmit } = useForm();

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenModalSelectCategory() {
    setCategoryModalOpen(true);
  }

  function handleCloseModalSelectCategory() {
    setCategoryModalOpen(false);
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm name="name" control={control} placeholder="Nome" />
          <InputForm name="amount" control={control} placeholder="Preço" />

          <TransactionsType>
            <TransactionTypeButton
              title="Income"
              type="up"
              isActive={transactionType === 'up'}
              onPress={() => handleTransactionTypeSelect('up')}
            />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              isActive={transactionType === 'down'}
              onPress={() => handleTransactionTypeSelect('down')}
            />
          </TransactionsType>

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenModalSelectCategory}
          />
        </Fields>

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseModalSelectCategory}
        />
      </Modal>
    </Container>
  );
}
