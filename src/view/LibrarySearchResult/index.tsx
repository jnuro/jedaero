import React, { useState, useEffect } from 'react';
import { SimpleList } from '@sqd-ffrog/components';
import { LibrarySearchType } from '@sqd-ffrog/components/organisms/LibrarySearchBar';
import BookItem from '@sqd-ffrog/components/molecules/BookItem';
import { getCollectedBooksByKeywordApi, Book } from '@sqd-ffrog/services';
import { useNavigation } from '@react-navigation/native';

interface LibrarySearchResultProps {
  route: {
    params: {
      type: LibrarySearchType;
      value: string;
    };
  };
}

function LibrarySearchResult({ route }: LibrarySearchResultProps) {
  const SIZE = 20;

  const navigation = useNavigation();
  const [data, setData] = useState<Book[]>([]);
  const [totalCount, setTotalCount] = useState<number>(-1); // 초기 세팅은 -1로 잡게 하자.
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const { type, value: keyword } = route.params;

  const getCollectedBooksByKeyword = async () => {
    try {
      if (totalCount === -1 || (page - 1) * SIZE <= totalCount) {
        console.debug(`getCollectedBooksByKeyword, page: ${page}`);
        // TODO: 나중에 type에 따라서 api 다르게 호출하게 하기.
        const searchedData = await getCollectedBooksByKeywordApi(
          keyword,
          page,
          SIZE,
        );
        if (totalCount === -1) {
          setTotalCount(searchedData.totalCount!!);
        }
        setData([...data, ...searchedData.data!!]);
        setPage(page + 1);
        setLoading(false);
      } else {
        // just debugging.
        console.debug(
          `Calling getCollectedBooksByKeywordApi was ignored. totalCount: ${totalCount}, page: ${page}, size: ${SIZE}`,
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    const getData = () => {
      getCollectedBooksByKeyword();
    };
    loading && getCollectedBooksByKeyword();
    return getData;
  }, [loading]);

  return (
    <SimpleList
      title={keyword}
      data={data}
      renderItem={props => (
        <BookItem
          {...props}
          onPressItem={id => navigation.navigate('LibraryBook', { id })}
        />
      )}
      onEndReached={() => setLoading(true)}
    />
  );
}

export default LibrarySearchResult;
