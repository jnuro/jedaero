import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { ImageBackgroundCard, H4, H6 } from '@sqd-ffrog/components';
import { Source } from 'react-native-fast-image';
import styles from './styles';

interface FoodCardProps {
  source: Source;
  onPress?: (event: GestureResponderEvent) => void;
  cardTitle: string;
  subtitle: string;
}

function FoodCard({ source, onPress, cardTitle, subtitle }: FoodCardProps) {
  const [isLoading, setLoading] = useState<boolean>(false);

  const onLoadStart = () => {
    setLoading(true);
  };

  const onLoadEnd = () => {
    setLoading(false);
  };

  return (
    <ImageBackgroundCard
      source={source}
      style={styles.style}
      onLoadStart={onLoadStart}
      onLoadEnd={onLoadEnd}
      onPress={onPress}
    >
      <H4
        style={isLoading ? styles.loadingTitleStyle : styles.loadedtitleStyle}
      >
        {cardTitle}
      </H4>
      <H6
        style={
          isLoading ? styles.loadingSubtitleStyle : styles.loadedSubtitleStyle
        }
      >
        {subtitle}
      </H6>
    </ImageBackgroundCard>
  );
}

export default FoodCard;
