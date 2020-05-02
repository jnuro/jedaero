import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Card } from '../../atoms/Cards';
import { SearchButton, CloseButton } from '../../atoms/Buttons';
import { LightColor } from '../../atoms/colors';
import Input from '../../atoms/TextInput';

interface SearchBarProps {
  onPress: (arg0: string) => void;
  tintColor: string;
}

function SearchBar({ onPress, tintColor }: SearchBarProps) {
  const inputRef = useRef<TextInput>(null);
  const [value, setValue] = useState<string>('');

  const onChange = (text: string) => {
    setValue(text);
  };

  const onSubmit = () => onPress(value);

  const onPressCloseButton = () => {
    inputRef?.current?.clear();
    setValue('');
  };

  return (
    <Card style={styles.cardStyle}>
      <Input
        ref={inputRef}
        editable
        onChangeText={onChange}
        style={styles.inputStyle}
        placeholder="도서를 검색하세요"
        onSubmitEditing={onSubmit}
        returnKeyLabel="search"
      />
      {!!value && (
        <CloseButton
          color={LightColor.disabledColor}
          style={styles.closeStyle}
          onPress={onPressCloseButton}
        />
      )}
      <SearchButton color={tintColor} onPress={onSubmit} />
    </Card>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  inputStyle: {
    flex: 1,
  },
  closeStyle: {
    marginHorizontal: 4,
  },
});

export default SearchBar;
