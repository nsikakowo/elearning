import React from 'react';

const CategoryCard = ({ course, subjects }) => {
  return (
    <section className="cat">
      <div className="cat-text">
        <h5>{course}</h5>
        <div className="subjects">{subjects}</div>
      </div>
      <div className="cat-bottom">
        <p>category</p>
        <p>Details</p>
      </div>
    </section>
  );
};

export default CategoryCard;
