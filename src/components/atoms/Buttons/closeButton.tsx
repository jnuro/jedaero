import React from 'react';
import {
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { normalize } from '@sqd-ffrog/tools';

export interface CloseButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  color?: string | undefined;
  style?: StyleProp<TextStyle>;
}

function CloseButton({ onPress, color, style }: CloseButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        size={normalize(16)}
        name="closecircle"
        color={color}
        style={style}
      />
    </TouchableOpacity>
  );
}

export default CloseButton;
