import React, { ReactElement } from 'react';
import { View,Text, TextInput, Button } from 'react-native';

export default function Profile(): ReactElement {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>

      <TextInput
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value="Davi"
      />

      <TextInput
        testID="input-surname"
        placeholder="Sobrenome"  
        value="Hoffmann"
      />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}
