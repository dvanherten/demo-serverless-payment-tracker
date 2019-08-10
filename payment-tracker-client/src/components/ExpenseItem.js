import React from 'react';

const ExpenseItem = () => {
  return (
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">Name goes here</p>
        </div>
      </div>
      <div class="level-right">
        <p class="level-item">Mark as:</p>
        <p class="level-item">
          <a>Paid</a>
        </p>
        <p class="level-item">
          <a>Not Paid</a>
        </p>
        <p class="level-item">
          <a>N/A</a>
        </p>
      </div>
    </nav>
  );
};

export default ExpenseItem;
