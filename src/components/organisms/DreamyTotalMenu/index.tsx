import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import H2 from '../../atoms/H2';
import DreamyTile from '../../molecules/DreamyTile';

interface MenuItemProps {
  name: string;
  title: string;
}

const data: MenuItemProps[] = [
  {
    name: 'paperclip',
    title: '강의 게시판',
  },
  {
    name: 'carryout',
    title: '생활관 합격조회',
  },
  {
    name: 'solution1',
    title: '교수계획서 조회',
  },
];

function DreamyTotalMenu() {
  return (
    <Fragment>
      <H2 style={styles.titleStyle}>전체 메뉴</H2>
      <View style={styles.tileContainerStyle}>{data.map(DreamyTile)}</View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 24,
  },
  tileContainerStyle: {
    flexDirection: 'column',
  },
});

export default DreamyTotalMenu;
