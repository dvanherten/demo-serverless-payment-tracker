import React from 'react';

import PageHeader from './PageHeader';
import MonthlyViewItem, {
  MonthlyViewItemLoading
} from './monthly-view/MonthlyViewItem';
import { Grid } from '@material-ui/core';

const MonthlyViewPage = ({ isLoading, monthlyViewItems, onSave }) => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <PageHeader headerText="August 2019" />
        </Grid>
        {isLoading && (
          <React.Fragment>
            <Grid item xs>
              <MonthlyViewItemLoading />
            </Grid>
            <Grid item xs>
              <MonthlyViewItemLoading />
            </Grid>
            <Grid item xs>
              <MonthlyViewItemLoading />
            </Grid>
            <Grid item xs>
              <MonthlyViewItemLoading />
            </Grid>
          </React.Fragment>
        )}
        {!isLoading &&
          monthlyViewItems.map(x => (
            <Grid item xs>
              <MonthlyViewItem key={x.id} {...x} changePaidStatus={onSave} />
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
};

export default MonthlyViewPage;
