import React from 'react';
import { View, Pressable, Text } from 'react-native';

import { styles } from './styles';

type ButtonProps = {
  buttonName: string;

}

export function Button( {buttonName}: ButtonProps ) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}
      
      >
        <Text style={styles.textButton}>{buttonName}</Text>
      </Pressable>
    </View>
  );
}