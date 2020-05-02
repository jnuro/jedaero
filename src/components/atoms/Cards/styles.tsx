import { StyleSheet } from 'react-native';
import { elevationShadow } from '@sqd-ffrog/tools';
import { LightColor } from '../colors';

const styles = StyleSheet.create({
  cardStyle: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    padding: 16,
    backgroundColor: LightColor.backgroundColor,
    ...elevationShadow(8),
  },
  imageCardInnerStyle: {
    borderRadius: 16,
  },
});

export default styles;
