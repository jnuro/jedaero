import React from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { normalize } from '@sqd-ffrog/tools';

export interface BackButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  color?: string;
}

function BackButton({ onPress, color }: BackButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon size={normalize(24)} name="left" color={color} />
    </TouchableOpacity>
  );
}

export default BackButton;
