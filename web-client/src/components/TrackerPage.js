import React, { Fragment } from 'react';
import { PageHeader } from './PageHeader';
import { PageSection } from './PageSection';

export const TrackerPage = () => {
  return (
    <Fragment>
      <PageHeader>
        <h1 className="title">MONTH</h1>
      </PageHeader>
      <PageSection>
        <span>Stuff</span>
      </PageSection>
    </Fragment>
  );
};
