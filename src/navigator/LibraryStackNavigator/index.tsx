import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { rootScreenOptions } from '@sqd-ffrog/jedaero-navigator';
import { Library, LibrarySearchResult, LibraryBook } from '@sqd-ffrog/view';
import { MainRightHeaderTitle } from '@sqd-ffrog/components';

const Stack = createStackNavigator();

const homeOptions: StackNavigationOptions = {
  headerRight: MainRightHeaderTitle,
};

function LibraryStackNavigator() {
  return (
    <Stack.Navigator screenOptions={rootScreenOptions} mode="modal">
      <Stack.Screen name="Library" component={Library} options={homeOptions} />
      <Stack.Screen
        name="LibrarySearchResult"
        component={LibrarySearchResult}
      />
      <Stack.Screen name="LibraryBook" component={LibraryBook} />
    </Stack.Navigator>
  );
}

export default LibraryStackNavigator;
