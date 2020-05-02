import { StyleSheet } from 'react-native';
import { normalize } from '@sqd-ffrog/tools';

const styles = StyleSheet.create({
  inputStyle: {
    // 기본 폰트사이즈는 H4 기반으로 진행합니다.
    fontSize: normalize(16),
    padding: 0,
  },
});

export default styles;
