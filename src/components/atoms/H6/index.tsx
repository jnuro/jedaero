import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import styles from './styles';

interface Props {
  children: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

function H6({ children, style, numberOfLines = 1 }: Props) {
  return (
    <Text style={[styles.textStyle, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

export default H6;
