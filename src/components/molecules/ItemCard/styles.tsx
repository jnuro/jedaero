import { StyleSheet } from 'react-native';
import { LightColor } from '@sqd-ffrog/components';

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardImageStyle: {
    width: 45,
    height: 45,
    marginRight: 16,
  },
  subtitleStyle: {
    color: LightColor.mainColor,
  },
});

export default styles;
