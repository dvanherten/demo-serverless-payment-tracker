import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProfileButton from './ProfileButton';

export const actions = {
  setTab: action('setTab')
};

storiesOf('ProfileButton', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()} </div>)
  .add('default', () => <ProfileButton initials={'DV'} />);
