import React, { ReactElement, useState, useEffect } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/auth';
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

const schema = Yup.object().shape({
  name: Yup.string().required().required('Nome é obrigatório!'),
  amount: Yup.number()
    .typeError('Informe um valor númerico')
    .positive('O valor não pode ser negativo')
    .required()
    .required('Preço é obrigatório!'),
});

interface FormData {
  name: string;
  amount: string;
}

export default function Register(): ReactElement {
  // const navigation = useNavigation();

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleTransactionTypeSelect(type: 'positive' | 'negative') {
    setTransactionType(type);
  }

  function handleOpenModalSelectCategory() {
    setTimeout(() => {
      setCategoryModalOpen(true);
    }, 1000);
  }

  function handleCloseModalSelectCategory() {
    setCategoryModalOpen(false);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) {
      Alert.alert('Selecione o Tipo da Transação');
      return;
    }

    if (category.key === 'category') {
      Alert.alert('Selecione uma Categoria');
      return;
    }

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const dataKey = `@gofinance:transactions_user:${user.id}`;
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransaction];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'Category',
      });

      // navigation.navigate('Listagem');
    } catch (error) {
      console.error(error);
      Alert.alert('Não foi possível salvar os dados.');
    }
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
                isActive={transactionType === 'positive'}
                onPress={() => handleTransactionTypeSelect('positive')}
              />
              <TransactionTypeButton
                title="Outcome"
                type="down"
                isActive={transactionType === 'negative'}
                onPress={() => handleTransactionTypeSelect('negative')}
              />
            </TransactionsType>

            <CategorySelectButton
              testID="button-category"
              title={category.name}
              onPress={handleOpenModalSelectCategory}
            />
          </Fields>

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal testID="modal-category" visible={categoryModalOpen}>
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
