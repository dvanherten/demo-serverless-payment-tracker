import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavBar from './NavBar';
import ProfileButton from './ProfileButton';

export const actions = {
  setTab: action('setTab')
};

storiesOf('NavBar', module).add('default', () => <Wrapper />);

const Wrapper = () => {
  const [activeTab, setTab] = React.useState(0);
  return (
    <NavBar
      activeTab={activeTab}
      setTab={setTab}
      avatar={<ProfileButton initials={'DV'} />}
    />
  );
};
