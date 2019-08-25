import React from 'react';

import MonthPicker from './monthly-view/MonthPicker';
import MonthlyViewItem, {
  MonthlyViewItemLoading
} from './monthly-view/MonthlyViewItem';
import { Grid } from '@material-ui/core';

const MonthlyViewPage = ({
  isLoading,
  monthlyViewItems,
  onSave,
  onDateChanged
}) => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <MonthPicker onDateChanged={onDateChanged} />
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
