import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LibrarySeatProps } from '@sqd-ffrog/react-native-jnu/src/library';

import H6 from '../../atoms/H6';
import { LightColor } from '../../atoms/colors';

function LibrarySeatItem({
  id,
  capacity,
  available,
  sectionName,
}: LibrarySeatProps) {
  const seat = `${capacity - available}/${capacity}`;
  return (
    <View key={id.toString()} style={styles.containerStyle}>
      <H6>{sectionName}</H6>
      <H6 style={styles.seatTextStyle}>{seat}</H6>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seatTextStyle: {
    fontWeight: '700',
    color: LightColor.mainColor,
    textAlign: 'center',
  },
});

export default LibrarySeatItem;
