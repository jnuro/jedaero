import React, { Fragment } from 'react';
import { ItemCard } from '@sqd-ffrog/components';

interface DreamyMainMenuProps {
  imageUri: string;
  title: string;
  subtitle: string;
}

const data: DreamyMainMenuProps[] = [
  {
    imageUri:
      'https://github.com/sqd-ffrog/database/blob/master/foodbg/schedule.png?raw=true',
    title: '지금 내 시간표는?',
    subtitle: '시간표를 확인하실 수 있습니다.',
  },
  {
    imageUri:
      'https://github.com/sqd-ffrog/database/blob/master/foodbg/grade.png?raw=true',
    title: '내 평점 확인',
    subtitle: '전체 성적을 조회하실 수 있습니다.',
  },
];

function DreamyMainMenu() {
  return (
    <Fragment>
      {data.map(({ imageUri, title, subtitle }) => (
        <ItemCard
          key={title}
          imageUri={imageUri}
          title={title}
          subtitle={subtitle}
        />
      ))}
    </Fragment>
  );
}

export default DreamyMainMenu;
