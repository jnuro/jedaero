import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

interface IconProps {
  color: string;
}

function HomeIcon({ color }: IconProps) {
  return <Icon name="home" size={24} color={color} />;
}

export default HomeIcon;
