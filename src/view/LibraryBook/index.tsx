import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, Card, H1 } from '@sqd-ffrog/components';

function LibraryBook() {
  const [loading, setLoading] = useState();
  return (
    <ScrollView title="도서상세">
      <Card>
        <H1>hihi</H1>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default LibraryBook;
