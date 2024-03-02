import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { styles } from './styles';
import { InputComLabel } from '../../components/InputComLabel';
import { Button } from '../../components/Button';
import JardimFacape from '../../assets/jardimFacape.png';

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

      <View style={styles.buttonContainer}>
        <Button buttonName='Entrar' />
      </View>
    </View>
  );
}