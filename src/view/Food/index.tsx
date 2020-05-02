import React from 'react';
import {
  ScrollView,
  FoodCardCarousel,
  H2,
  FoodTotalMenu,
} from '@sqd-ffrog/components';

function Food() {
  return (
    <ScrollView title="뭐먹을까" nestedScrollEnabled={true}>
      <FoodCardCarousel />
      <H2>학식이 별로야?</H2>
      <FoodTotalMenu />
    </ScrollView>
  );
}

export default Food;
