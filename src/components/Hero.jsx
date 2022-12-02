import React from 'react';
import home from '../assests/images/home.png';

const Hero = () => {
  return (
    <section className="hero_container">
      <div className="hero_image">
        <img src={home} alt="girl sitting" />
        <div className="block"></div>
      </div>
      <div className="hero_content">
        <h2>Accelerate your quest, learn anywhere, anytime</h2>
        <p>
          Acquire new knowledge and skills, train for certification diplomas and
          degrees from world-class instituitions at your own pace and space.
        </p>
        <div>
          <p className="login">Log In</p>
          <p className="register">Sign Up</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
