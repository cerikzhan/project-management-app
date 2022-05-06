import React from 'react';
import cl from './header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className={cl.header}>
    <div className="container">
      <div className={cl.header__container}>
        <nav className={cl.header__navbar}>
          <Link className={cl.header__navbar_link} to="/">
            Home
          </Link>
          <Link className={cl.header__navbar_link} to="/projects">
            Projects
          </Link>
          <Link className={cl.header__navbar_link} to="/projects/1">
            Single Project
          </Link>
        </nav>
        <div className={cl.header__usermenu}>
          <Link className={cl.header__usermenu_button} to="/login">
            Login
          </Link>
          <Link className={cl.header__usermenu_button} to="">
            Logout
          </Link>
          <Link className={cl.header__usermenu_button} to="/profile">
            Edit profile
          </Link>
          <Link className={cl.header__usermenu_button} to="">
            New board
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
