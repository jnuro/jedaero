import React from 'react';
import { action } from '@storybook/addon-actions';
import { BackButton } from '../../atoms/Buttons';

export default {
  component: BackButton,
  title: 'BackButton',
};

export const back = () => (
  <BackButton
    onPress={() => {
      action('Clicked.');
    }}
  />
);
