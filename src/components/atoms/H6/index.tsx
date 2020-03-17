import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import styles from "./styles";

interface Props {
  children: string;
  style?: StyleProp<TextStyle>;
}

function H6({ children, style }: Props) {
  return <Text style={[styles.textStyle, style]}>{children}</Text>;
}

export default H6;
