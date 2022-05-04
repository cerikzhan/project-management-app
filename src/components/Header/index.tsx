import React from 'react';
import cl from './header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className={cl.header}>
    <div className="container">
      <nav className={cl.header__navbar}>
        <Link className={cl.header__navbar_link} to="/">
          Home
        </Link>
        <Link className={cl.header__navbar_link} to="/login">
          Login
        </Link>
        <Link className={cl.header__navbar_link} to="/projects">
          Projects
        </Link>
        <Link className={cl.header__navbar_link} to="/projects/1">
          Single Project
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
