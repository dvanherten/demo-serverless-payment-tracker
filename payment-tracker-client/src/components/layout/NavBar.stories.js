import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavBar from './NavBar';
import ProfileButton from './ProfileButton';
import Layout from './Layout';

export const actions = {
  setTab: action('setTab')
};

storiesOf('NavBar', module)
  .add('default', () => <Wrapper />)
  .add('withFakePages', () => (
    <Layout
      monthlyViewPage={<span>Monthly View Page</span>}
      expensesPage={<span>Expenses Page</span>}
      initials="DV"
    />
  ));

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
