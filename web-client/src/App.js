import React from 'react';
import './App.sass';
import { ExpenseTableView } from './components/ExpenseTableView';

export const App = () => (
  <section className="section">
    <div className="container">
      <div className="notification">
        <ExpenseTableView expenses={[]} />
      </div>
    </div>
  </section>
);
