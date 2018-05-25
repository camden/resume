import React from 'react';

const Section = props => {
  const { title, children } = props;
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Section;
