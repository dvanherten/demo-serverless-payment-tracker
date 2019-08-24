import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MonthlyViewItem from './MonthlyViewItem';

export const paidItem = {
  id: '1',
  name: 'Rent',
  status: 'Paid'
};

export const notPaidItem = {
  id: '2',
  name: 'Cable',
  status: 'Not Paid'
};

export const naitem = {
  id: '3',
  name: 'Car Payment',
  status: 'N/A'
};

export const actions = {
  changePaidStatus: action('changePaidStatus')
};

storiesOf('Monthly View Item', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()} </div>)
  .add('Paid', () => <MonthlyViewItem {...paidItem} {...actions} />)
  .add('UnPaid', () => <MonthlyViewItem {...notPaidItem} {...actions} />)
  .add('N/A', () => <MonthlyViewItem {...naitem} {...actions} />);
