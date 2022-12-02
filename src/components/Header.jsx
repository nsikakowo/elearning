import React from 'react';

const menuList = [
  {
    id: 1,
    title: 'Courses',
    link: '/courses',
  },
  {
    id: 2,
    title: 'Programs',
    link: '/programs',
  },
  {
    id: 3,
    title: 'Learning Pathway',
    link: '/pathway',
  },
  {
    id: 5,
    title: 'Partnerships',
    link: '/partnerships',
  },
];

const MenuItem = ({ item }) => {
  return <li>{item}</li>;
};

const Header = () => {
  return (
    <header>
      <div className="logo">
        <p>E Learning</p>
        <nav>
          <ul>
            {menuList.map((menu) => (
              <MenuItem item={menu.title} key={menu.id} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="header_right_side">
        <p> &#128269;</p>
        <p className="login">Log In</p>
        <p className="register">Sign Up</p>
      </div>
    </header>
  );
};

export default Header;
