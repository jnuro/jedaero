import React from 'react';
import {
  ScrollView,
  DreamyMainMenu,
  DreamyTotalMenu,
} from '@sqd-ffrog/components';

function Dreamy() {
  return (
    <ScrollView title="하영드리미">
      <DreamyMainMenu />
      <DreamyTotalMenu />
    </ScrollView>
  );
}

export default Dreamy;
