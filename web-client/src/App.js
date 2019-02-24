import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.sass';
import { NavBar } from './components/NavBar';
import { ExpensePage } from './components/ExpensePage';
import { TrackerPage } from './components/TrackerPage';
import { registerIcons } from './icons';

const routes = [
  {
    path: '/',
    exact: true,
    component: TrackerPage
  },
  { path: '/expenses/', component: ExpensePage }
];

registerIcons();

export const App = () => (
  <BrowserRouter>
    <Fragment>
      <NavBar />
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Fragment>
  </BrowserRouter>
);
