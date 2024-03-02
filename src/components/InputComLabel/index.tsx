import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

import { styles } from './styles';

type InputComLabelProps = {
  label: string;
  placeholder: string;
  secureTextEntry: 'true' | 'false';
}

export function InputComLabel( { label, placeholder, secureTextEntry}: InputComLabelProps) {

  const [blur, setBlur] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={[styles.input, blur ? {} : styles.inputFocus ]}
        placeholder={placeholder || 'Digite aqui'}
        secureTextEntry={secureTextEntry === 'true' ? true : false}
        onFocus={ () => setBlur(true)}
        onBlur={ () => setBlur(false)}
      />
    </View>
  );
}