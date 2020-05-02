import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import styles from './styles';

interface Props {
  children: string;
  style?: StyleProp<TextStyle>;
}

function H2({ children, style }: Props) {
  return (
    <Text style={[styles.textStyle, style]} numberOfLines={1}>
      {children}
    </Text>
  );
}

export default H2;
