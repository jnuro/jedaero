import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
import { HeaderHeightContext } from '@react-navigation/stack';
import Title from '../../molecules/Title';

interface JedaeroScrollViewProps {
  title: string;
  children?: React.ReactNode | undefined;
}

function JedaeroScrollView(props: ScrollViewProps & JedaeroScrollViewProps) {
  return (
    <HeaderHeightContext.Consumer>
      {headerHeight => (
        <ScrollView
          {...props}
          contentContainerStyle={[
            props.contentContainerStyle,
            { marginTop: headerHeight, paddingBottom: 56 },
          ]}
        >
          <Title>{props.title}</Title>
          {props.children}
        </ScrollView>
      )}
    </HeaderHeightContext.Consumer>
  );
}

export default JedaeroScrollView;
