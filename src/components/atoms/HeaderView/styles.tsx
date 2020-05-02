import { StyleSheet, Platform } from 'react-native';
import { LightColor } from '@sqd-ffrog/components';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: LightColor.backgroundColor,
    opacity: Platform.select({
      ios: 0.8,
      android: 1,
    }),
  },
});

export default styles;
