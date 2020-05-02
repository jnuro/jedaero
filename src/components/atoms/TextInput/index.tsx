import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, StyleProp, TextStyle } from 'react-native';
import styles from './styles';

interface InputProps {
  style?: StyleProp<TextStyle>;
}

function Input(props: TextInputProps & InputProps, ref: React.Ref<TextInput>) {
  return (
    <TextInput {...props} style={[styles.inputStyle, props.style]} ref={ref} />
  );
}

export default forwardRef(Input);
