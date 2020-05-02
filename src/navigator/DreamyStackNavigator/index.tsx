import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { rootScreenOptions } from '@sqd-ffrog/jedaero-navigator';
import { Dreamy } from '@sqd-ffrog/view';
import { MainRightHeaderTitle } from '@sqd-ffrog/components';

const Stack = createStackNavigator();

const homeOptions: StackNavigationOptions = {
  headerRight: MainRightHeaderTitle,
};

function DreamyStackNavigator() {
  return (
    <Stack.Navigator screenOptions={rootScreenOptions}>
      <Stack.Screen name="Dreamy" component={Dreamy} options={homeOptions} />
    </Stack.Navigator>
  );
}

export default DreamyStackNavigator;
