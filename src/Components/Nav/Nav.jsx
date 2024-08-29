import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div id='routerNav'>

      <p>Profile</p>
      <p>User</p>
      <Link to='messages'>Messages</Link>
      <Link to='blog'>Blog</Link>
      <Link to='/'>Home</Link>

    </div>
  );
};

export default Nav;