import React from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { HeaderHeightContext } from '@react-navigation/stack';
import Title from '../../molecules/Title';

interface SimpleListProps {
  title: string;
}

function SimpleList<ItemT = any>(
  props: FlatListProps<ItemT> & SimpleListProps,
) {
  const ListHeaderComponent = () => <Title>{props.title}</Title>;

  return (
    <HeaderHeightContext.Consumer>
      {headerHeight => (
        <FlatList<ItemT>
          {...props}
          ListHeaderComponent={ListHeaderComponent}
          contentContainerStyle={[
            props.contentContainerStyle,
            { marginTop: headerHeight, paddingBottom: 56 },
          ]}
        />
      )}
    </HeaderHeightContext.Consumer>
  );
}

export default SimpleList;
