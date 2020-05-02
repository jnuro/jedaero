import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { NewBook } from '@sqd-ffrog/services';
import H6 from '../../atoms/H6';

interface NewBookItemProps {
  item: NewBook;
  index: number;
  onPressItem: (id: number) => void;
}

function NewBookItem({
  item: { thumbnailUri, title, author, id },
  onPressItem,
}: NewBookItemProps) {
  const onPressNewBookItem = () => {
    console.debug(`onPressNewBook, item was clicked. id: ${id}`);
    onPressItem(id);
  };

  return (
    <TouchableOpacity
      style={styles.containerStyle}
      onPress={onPressNewBookItem}
    >
      <FastImage source={{ uri: thumbnailUri }} style={styles.imageStyle} />
      <H6 style={styles.titleStyle} numberOfLines={2}>
        {title}
      </H6>
      <H6>{author}</H6>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    maxWidth: 90,
    marginHorizontal: 8,
  },
  imageStyle: {
    width: 90,
    height: 120,
  },
  titleStyle: {
    fontWeight: '700',
    marginVertical: 4,
  },
});

export default NewBookItem;
