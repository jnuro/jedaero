import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';

interface CardProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

function Card({ children, style, onPress }: CardProps) {
  return onPress ? (
    <TouchableHighlight style={[styles.cardStyle, style]} onPress={onPress}>
      {children}
    </TouchableHighlight>
  ) : (
    <View style={[styles.cardStyle, style]}>{children}</View>
  );
}

export default Card;
