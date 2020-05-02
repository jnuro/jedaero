import React, { Fragment } from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

import FastImage, { Source } from 'react-native-fast-image';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { LightColor } from '@sqd-ffrog/components';
import styles from './styles';

interface ImageBackgroundCardProps {
  source: Source;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  onPress?: (event: GestureResponderEvent) => void;
}

function ImageBackgroundCard({
  source,
  children,
  style,
  onLoadStart,
  onLoadEnd,
  onPress,
}: ImageBackgroundCardProps) {
  const childrenItem = () => (
    <Fragment>
      <FastImage
        style={[StyleSheet.absoluteFill, styles.imageCardInnerStyle]}
        source={source}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
      />
      {children}
    </Fragment>
  );
  return onPress ? (
    <TouchableHighlight
      style={[styles.cardStyle, style]}
      activeOpacity={0.7}
      underlayColor={LightColor.backgroundColor}
      onPress={onPress}
    >
      {childrenItem()}
    </TouchableHighlight>
  ) : (
    <View style={[styles.cardStyle, style]}>{childrenItem()}</View>
  );
}

export default ImageBackgroundCard;
