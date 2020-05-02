import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SettingsButton, UserButton, LightColor } from '@sqd-ffrog/components';
import { useNavigation } from '@react-navigation/native';

function MainRightHeaderTitle() {
  const navigation = useNavigation();
  const onPressUserButton = () => navigation.navigate('Food');
  const onPressSettingsButton = () => navigation.navigate('Dreamy');
  return (
    <View style={styles.style}>
      <UserButton onPress={onPressUserButton} color={LightColor.accentColor} />
      <SettingsButton onPress={onPressSettingsButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  style: {
    flexDirection: 'row',
    marginHorizontal: 8,
  },
});

export default MainRightHeaderTitle;
