/**
 * 제대로 가자 for React Native
 * 작성자 - 이청길
 * 작성일 - 2018.07.26
 */

import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import JedaeroContainer from './components/JedaeroContainer';

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content')
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#f7f7f7ff');
      StatusBar.setTranslucent(false);
    }
  }, []);
  return <JedaeroContainer />
}

export default App;
