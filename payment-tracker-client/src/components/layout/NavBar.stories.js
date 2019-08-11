import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavBar from './NavBar';

export const actions = {
  onRowClick: action('onRowClick')
};

storiesOf('NavBar', module).add('default', () => <NavBar {...actions} />);
