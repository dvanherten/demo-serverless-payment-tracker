import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MonthPicker from './MonthPicker';

export const actions = {
  onDateChanged: action('onDateChanged')
};

storiesOf('Monthly Picker', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()} </div>)
  .add('default', () => <MonthPicker {...actions} />);
