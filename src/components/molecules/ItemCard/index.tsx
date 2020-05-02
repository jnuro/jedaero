import React from 'react';
import { View, GestureResponderEvent } from 'react-native';
import { Card, H4, H6 } from '@sqd-ffrog/components';
import FastImage from 'react-native-fast-image';
import styles from './styles';

interface ItemCardProps {
  imageUri: string;
  title: string;
  subtitle?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

function ItemCard({ imageUri, title, subtitle, onPress }: ItemCardProps) {
  return (
    <Card key={title} style={styles.cardStyle} onPress={onPress}>
      <FastImage source={{ uri: imageUri }} style={styles.cardImageStyle} />
      <View>
        <H4>{title}</H4>
        {subtitle && <H6 style={styles.subtitleStyle}>{subtitle}</H6>}
      </View>
    </Card>
  );
}

export default ItemCard;
