import React from 'react';

export const PageHeader = ({ children }) => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
    </section>
  );
};
