import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [burgerMenuActive, setBurgerMenuToggle] = useState(false);

  const isBurgerMenuActiveClass = burgerMenuActive ? 'is-active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <span className="title navbar-item is-uppercase">
            Payment Tracker
          </span>
        </Link>
        <div
          className={`navbar-burger burger ${isBurgerMenuActiveClass}`}
          onClick={() => setBurgerMenuToggle(!burgerMenuActive)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>

      <div className={`navbar-menu ${isBurgerMenuActiveClass}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Tracker
          </Link>
          <Link to="/expenses/" className="navbar-item">
            Expenses
          </Link>
        </div>
      </div>
    </nav>
  );
};
