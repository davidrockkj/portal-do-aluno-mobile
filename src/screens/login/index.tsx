import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';

import { styles } from './styles';
import { InputComLabel } from '../../components/InputComLabel';
import { Button } from '../../components/Button';
import JardimFacape from '../../assets/jardimFacape.png';
import LogoFacape from '../../assets/logoFacape.png'

export default function login() {
  return (
    <View style={styles.container}>
      <Image source={JardimFacape} style={styles.background}/>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={LogoFacape} style={styles.logo}/>
        </View>

        <InputComLabel 
          label='Matrícula' 
          placeholder='00000' 
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

    </View>
  );
}