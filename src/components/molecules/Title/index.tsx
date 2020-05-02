import React from 'react';
import { StyleSheet } from 'react-native';
import { H1 } from '@sqd-ffrog/components';

interface TitleProps {
  children: string;
}

function Title({ children }: TitleProps) {
  return <H1 style={styles.titleStyle}>{children}</H1>;
}

const styles = StyleSheet.create({
  titleStyle: {
    marginHorizontal: 16,
    marginVertical: 8,
    fontWeight: '700',
  },
});

export default Title;
