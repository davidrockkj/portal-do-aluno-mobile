import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

import { styles } from './styles';

type InputComLabelProps = {
  label: string;
  placeholder: string;
  secureTextEntry: 'true' | 'false';
}

export function InputComLabel( { label, placeholder, secureTextEntry }: InputComLabelProps) {

  const [blur, setBlur] = useState(false);
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={[
            styles.input,
            blur ? styles.inputFocus : {},
            text ? styles.inputFocus : {}
          ]
        }
        placeholder={placeholder || 'Digite aqui'}
        placeholderTextColor={blur ? 'white' : 'grey'}
        secureTextEntry={secureTextEntry === 'true' ? true : false}
        onFocus={ () => setBlur(true)}
        onBlur={ () => setBlur(false)}
        value={text}
        onChangeText={ (text)=> setText(text) }
      />
    </View>
  );
}