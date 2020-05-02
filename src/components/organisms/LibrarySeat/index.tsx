import React, { Fragment, useState, useEffect } from 'react';
import { LibrarySeatsApiResponse } from '@sqd-ffrog/react-native-jnu/src/library';
import { getLibrarySeatsApi } from '@sqd-ffrog/services';
import H2 from '../../atoms/H2';
import LibrarySeatItem from '../../molecules/LibrarySeatItem';

function LibrarySeat() {
  const [data, setData] = useState<LibrarySeatsApiResponse>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = () => {
      (async function() {
        const res = await getLibrarySeatsApi();
        if (res.success) {
          await setData(res);
          await setLoading(false);
        }
      })();
    };
    isLoading && getData();
    return getData;
  }, [isLoading]);
  return (
    <Fragment>
      <H2>도서관 좌석 수</H2>
      {(data?.data ?? []).map(LibrarySeatItem)}
    </Fragment>
  );
}

export default LibrarySeat;
