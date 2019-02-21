import React from 'react';
import './App.sass';
import { ExpenseTableView } from './components/ExpenseTableView';

const expenses = [
  {
    id: '1',
    name: 'Rent'
  },
  {
    id: '2',
    name: 'Cogeco'
  },
  {
    id: '3',
    name: 'Bell'
  }
];

export const App = () => (
  <section className="section">
    <div className="container">
      <div className="notification">
        <ExpenseTableView expenses={expenses} />
      </div>
    </div>
  </section>
);
