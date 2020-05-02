import React from 'react';
import { StyleSheet } from 'react-native';
import H6 from '../../atoms/H6';

function NewBookEmpty() {
  return <H6 style={styles.textStyle}>현재 신착 자료가 없습니다. 🙏</H6>;
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default NewBookEmpty;
