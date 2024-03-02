import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { InputComLabel } from '../../components/InputComLabel';
import { Button } from '../../components/Button';

export default function login() {
  return (
    <View style={styles.container}>
      <InputComLabel 
        label='Matrícula' 
        placeholder='Digite sua matrícula' 
        secureTextEntry='false'
      />

      <InputComLabel 
        label='Senha' 
        placeholder='Digite sua senha' 
        secureTextEntry='true'
      />

      <Button buttonName='Entrar' />
    </View>
  );
}