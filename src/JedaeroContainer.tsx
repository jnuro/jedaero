import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { JedaeroStackNavigator } from '@sqd-ffrog/jedaero-navigator';

function JedaeroContainer() {
  return (
    <NavigationContainer>
      <JedaeroStackNavigator />
    </NavigationContainer>
  );
}

export default JedaeroContainer;
