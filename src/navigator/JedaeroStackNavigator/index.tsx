import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  JedaeroBottomTabNavigator,
  rootScreenOptions,
} from '@sqd-ffrog/jedaero-navigator';

const Stack = createStackNavigator();

function JedaeroStackNavigator() {
  return (
    <Stack.Navigator screenOptions={rootScreenOptions}>
      <Stack.Screen
        name="Main"
        component={JedaeroBottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default JedaeroStackNavigator;
