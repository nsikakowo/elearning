const Feature = ({ code, title, sub, author, image }) => {
  return (
    <div className="box">
      <div className="course_image">
        <img src={image} alt="course background" />
      </div>
      <div className="course-content">
        <p className="courseKey">{code}</p>
        <p className="courseTitle">{title}</p>
        <p className="subtext">{sub || 'Text here'}</p>
        <p className="autor">{author || 'Name here'}</p>
      </div>
      <div className="boxBottom">
        <p className="details">See Details</p>
        <p className="wish">Wishlist</p>
        <p className="buy">Buy</p>
      </div>
    </div>
  );
};

export default Feature;
