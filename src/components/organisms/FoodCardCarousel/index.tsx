import React from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { FoodCard, LightColor } from '@sqd-ffrog/components';
import { Source } from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

interface FoodCardDataProps {
  cardTitle: string;
  source: Source;
  routeName: string;
  subtitle: string;
}

const data: FoodCardDataProps[] = [
  {
    cardTitle: '백두관 식당',
    source: {
      uri:
        'https://github.com/sqd-ffrog/database/blob/master/foodbg/baekdu.jpg?raw=true',
    },
    routeName: 'Baekdu',
    subtitle: '역시 밥은 학식이지',
  },
  {
    cardTitle: '기숙사 식당',
    source: {
      uri:
        'https://github.com/sqd-ffrog/database/blob/master/foodbg/dormImage.jpg?raw=true',
    },
    routeName: 'Dormitory',
    subtitle: '기숙사 밥을 알아보자구요',
  },
];

function FoodCardCarousel() {
  const navigation = useNavigation();
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      activeDotColor={LightColor.mainColor}
    >
      {data.map(({ cardTitle, source, routeName, subtitle }) => (
        <FoodCard
          key={cardTitle}
          source={source}
          onPress={() => navigation.navigate(routeName)}
          cardTitle={cardTitle}
          subtitle={subtitle}
        />
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 240,
  },
});

export default FoodCardCarousel;
