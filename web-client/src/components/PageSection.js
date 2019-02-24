import React from 'react';

export const PageSection = ({ children }) => {
  return (
    <section className="section">
      <div className="container">{children}</div>
    </section>
  );
};
