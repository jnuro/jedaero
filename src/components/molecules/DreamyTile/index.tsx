import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { H6, LightColor } from '@sqd-ffrog/components';
import { normalize } from '@sqd-ffrog/tools';

interface DreamyTileProps {
  name: string;
  title: string;
}

function DreamyTile({ name, title }: DreamyTileProps) {
  return (
    <TouchableOpacity key={name} style={styles.containerStyle}>
      <Icon
        name={name}
        size={normalize(30)}
        style={styles.iconStyle}
        color={LightColor.mainColor}
      />
      <H6 style={styles.titleStyle}>{title}</H6>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 12,
  },
  iconStyle: {
    marginRight: 12,
  },
  titleStyle: {
    fontWeight: '700',
  },
});

export default DreamyTile;
