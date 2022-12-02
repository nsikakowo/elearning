import React from 'react';

const SectionTitle = ({ title, children }) => {
  return (
    <div className="section_title">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default SectionTitle;
