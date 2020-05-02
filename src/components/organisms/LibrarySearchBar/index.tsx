import React, { useState, Fragment } from 'react';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../molecules/SearchBar';
import SearchTopTab from '../../molecules/SearchTopTab';
import { LightColor } from '../../atoms/colors';

export enum LibrarySearchType {
  COLLECTION,
  ARTICLES,
  EJOURNAL,
  KCI,
}

interface TabProps {
  title: string;
  value: LibrarySearchType;
  tintColor: string;
}

const tabs: TabProps[] = [
  {
    title: '소장도서',
    value: LibrarySearchType.COLLECTION,
    tintColor: LightColor.accentColor,
  },
];

function LibrarySearchBar() {
  const navigation = useNavigation();
  const [type, setType] = useState<LibrarySearchType>(
    LibrarySearchType.COLLECTION,
  );
  const [tintColor, setTintColor] = useState<string>(LightColor.mainColor);

  const onPress = (value: string) => {
    navigation.navigate('LibrarySearchResult', { type, value });
  };

  const callback = (tab: string) => {
    console.debug('Library tab: ', tab);

    const { value, tintColor } = tabs.find(tabs => tabs.title === tab) ?? {
      value: LibrarySearchType.COLLECTION,
      tintColor: LightColor.mainColor,
    };

    console.debug(`value: ${value}, tintColor: ${tintColor}`);

    setType(value);
    setTintColor(tintColor);
  };

  return (
    <Fragment>
      <SearchTopTab tabs={tabs.map(tab => tab.title)} callback={callback} />
      <SearchBar onPress={onPress} tintColor={tintColor} />
    </Fragment>
  );
}

export default LibrarySearchBar;
