import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Book } from '@sqd-ffrog/services';
import H4 from '../../atoms/H4';
import H6 from '../../atoms/H6';
import { LightColor } from '../../atoms/colors';

interface BookItemProps {
  item: Book;
  index: number;
  onPressItem: (id: number) => void;
}

function BookItem({
  item: { title, thumbnailUri, author, isbn, publisher, branchVolumes, id },
  onPressItem,
}: BookItemProps) {
  const onPressBookItem = () => {
    console.debug(`onPressBookItem. item was cliked. id: ${id}`);
    onPressItem(id);
  };

  return (
    <TouchableOpacity
      key={isbn}
      style={styles.containerStyle}
      onPress={onPressBookItem}
    >
      <FastImage source={{ uri: thumbnailUri }} style={styles.imageStyle} />
      <View style={styles.innerContainerStyle}>
        <H4 style={styles.titleStyle} numberOfLines={1}>
          {title}
        </H4>
        <H6>{author}</H6>
        <H6>{publisher}</H6>
        {branchVolumes.length > 0 && (
          <View style={styles.branchVolumeStyle}>
            <H6 style={styles.volumeTextStyle}>
              {`${branchVolumes[0].location}[${branchVolumes[0].volume}]`}
            </H6>
            <H6
              // TODO: 여기 color 나중에 다른로직 쓰기. hasItem, isSubscribed 혼합해서
              style={{
                color: /가능/.exec(branchVolumes[0].state)
                  ? LightColor.accentColor
                  : LightColor.mainColor,
                ...styles.volumeStateTextStyle,
              }}
            >
              {branchVolumes[0].state}
            </H6>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 8,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  innerContainerStyle: {
    flex: 1,
  },
  imageStyle: {
    width: 75,
    height: 100,
  },
  titleStyle: {
    fontWeight: '700',
    marginBottom: 4,
  },
  branchVolumeStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  volumeTextStyle: {
    flex: 1,
  },
  volumeStateTextStyle: {
    fontWeight: '700',
    marginHorizontal: 8,
  },
});

export default BookItem;
