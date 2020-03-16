import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { rootScreenOptions } from "@sqd-ffrog/jedaero-navigator";
import { Home } from "@sqd-ffrog/view";
import { MainRightHeaderTitle } from "@sqd-ffrog/components";

const Stack = createStackNavigator();

const homeOptions = {
  headerRight: () => <MainRightHeaderTitle />
};

function LibraryStackNavigator() {
  return (
    <Stack.Navigator screenOptions={rootScreenOptions}>
      <Stack.Screen name="Home" component={Home} options={homeOptions} />
    </Stack.Navigator>
  );
}

export default LibraryStackNavigator;
