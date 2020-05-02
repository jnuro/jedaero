import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './styles';

function HeaderView() {
  return <View style={[StyleSheet.absoluteFill, styles.backgroundStyle]} />;
}

export default HeaderView;
