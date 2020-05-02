import React from 'react';
import {
  ScrollView,
  LibrarySearchBar,
  LibraryNewBook,
  LibrarySeat,
} from '@sqd-ffrog/components';

function Library() {
  return (
    <ScrollView title="도서관">
      <LibrarySearchBar />
      <LibraryNewBook />
      <LibrarySeat />
    </ScrollView>
  );
}

export default Library;
