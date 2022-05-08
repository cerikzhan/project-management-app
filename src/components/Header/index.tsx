import React from 'react';
import cl from './header.module.scss';
import { Link } from 'react-router-dom';
import Toggle from '@choco-cat/react-toggle/';
import './../../assets/library/toggle.css';
import Menu from './../Menu';

const Header: React.FC = () => {
  const chooseLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('choose Lang', e.target.checked);
  };
  return (
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
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
