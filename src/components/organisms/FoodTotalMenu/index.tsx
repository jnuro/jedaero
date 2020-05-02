import React, { Fragment } from 'react';
import { ItemCard } from '@sqd-ffrog/components';

interface ItemProps {
  imageUri: string;
  title: string;
  subtitle?: string;
}

const data: ItemProps[] = [
  {
    imageUri:
      'https://github.com/sqd-ffrog/database/blob/master/foodbg/rice.png?raw=true',
    title: '한식',
    subtitle: '제주대 한식당이 뭐가 있을까?',
  },
  {
    imageUri:
      'https://github.com/sqd-ffrog/database/blob/master/foodbg/steak.png?raw=true',
    title: '중•일•양식',
    subtitle: '아니 이 산중턱에 배달이 된다고?',
  },
  {
    imageUri:
      'https://github.com/sqd-ffrog/database/blob/master/foodbg/turkey.png?raw=true',
    title: '치킨',
    subtitle: '제대도 시켜먹을 수 있다!',
  },
];

function FoodTotalMenu() {
  return <Fragment>{data.map(ItemCard)}</Fragment>;
}

export default FoodTotalMenu;
