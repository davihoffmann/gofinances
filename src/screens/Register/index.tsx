import React, { ReactElement, useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import InputForm from '../../components/Form/InputForm';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import Button from '../../components/Form/Button';

import CategorySelect from '../CategorySelect';

const schema = Yup.object().shape({
  name: Yup.string().required().required('Nome é obrigatório!'),
  amount: Yup.number()
    .typeError('Informe um valor númerico')
    .positive('O valor não pode ser negativo')
    .required()
    .required('Preço é obrigatório!'),
});

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
    if (!transactionType) {
      Alert.alert('Selecione o Tipo da Transação');
      return;
    }

    if (category.key === 'category') {
      Alert.alert('Selecione uma Categoria');
      return;
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              error={errors.name && errors.name.message}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
            />
            <InputForm
              name="amount"
              control={control}
              error={errors.amount && errors.amount.message}
              placeholder="Preço"
              keyboardType="numeric"
            />

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
    </TouchableWithoutFeedback>
  );
}
