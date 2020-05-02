import React from 'react';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from '@react-navigation/material-bottom-tabs';
import {
  HomeStackNavigator,
  FoodStackNavigator,
  DreamyStackNavigator,
  LibraryStackNavigator,
  AcademyScheduleStackNavigator,
} from '@sqd-ffrog/jedaero-navigator';
import {
  LightColor,
  HomeIcon,
  FoodIcon,
  DreamyIcon,
  LibraryIcon,
  AcademyScheduleIcon,
} from '@sqd-ffrog/components';
import styles from './styles';

const BottomTab = createMaterialBottomTabNavigator();

const screenOptions: MaterialBottomTabNavigationOptions = {
  tabBarColor: LightColor.backgroundColor,
};

function JedaeroBottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={screenOptions}
      sceneAnimationEnabled={false} // 안드로이드에서 그림자가 깜빡이는 이슈가 있음.
      backBehavior="none"
      shifting={true}
      labeled={true}
      activeColor={LightColor.mainColor}
      inactiveColor={LightColor.disabledColor}
      barStyle={styles.tabBarStyle}
    >
      <BottomTab.Screen
        name="_Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: HomeIcon,
        }}
      />
      <BottomTab.Screen
        name="_Food"
        component={FoodStackNavigator}
        options={{
          tabBarLabel: '뭐먹을까',
          tabBarIcon: FoodIcon,
        }}
      />
      <BottomTab.Screen
        name="_Dreamy"
        component={DreamyStackNavigator}
        options={{
          tabBarLabel: '하영드리미',
          tabBarIcon: DreamyIcon,
        }}
      />
      <BottomTab.Screen
        name="_Library"
        component={LibraryStackNavigator}
        options={{
          tabBarLabel: '도서관',
          tabBarIcon: LibraryIcon,
        }}
      />
      <BottomTab.Screen
        name="_AcademySchedule"
        component={AcademyScheduleStackNavigator}
        options={{
          tabBarLabel: '학사일정',
          tabBarIcon: AcademyScheduleIcon,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default JedaeroBottomTabNavigator;
