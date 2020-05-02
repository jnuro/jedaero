import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { BookResponse, NewBook, getNewBooksApi } from '@sqd-ffrog/services';
import { useNavigation } from '@react-navigation/native';
import H2 from '../../atoms/H2';

import NewBookItem from '../../molecules/NewBooksItem';
import NewBookEmpty from '../../molecules/NewBookEmpty';

function LibraryNewBook() {
  const navigation = useNavigation();
  const [data, setData] = useState<BookResponse<NewBook>>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.debug('LibraryNewBook loading : ', isLoading);
    const getData = function() {
      (async function() {
        // 기본 20개 콜하는 걸로 놓고 본다.
        if (isLoading) {
          await setData(await getNewBooksApi());
          await setLoading(true);
        }
      })();
    };
    getData();
    return getData;
  }, [isLoading]);

  useEffect(() => {
    console.debug(data);
  }, [data]);

  return (
    <Fragment>
      <H2>신간도서</H2>
      <FlatList
        data={data?.data}
        renderItem={props => (
          <NewBookItem
            {...props}
            onPressItem={id => navigation.navigate('LibraryBook', { id })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={NewBookEmpty}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
});

export default LibraryNewBook;
