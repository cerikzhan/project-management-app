import React, { useEffect } from 'react';
import cl from './header.module.scss';
import { Link } from 'react-router-dom';
import './../../assets/library/toggle.css';
import UserMenu from './../Menu';

const Header: React.FC = () => {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector(`.${cl.header}`);
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= 250
        ? header.classList.add(cl['header-sticky'])
        : header.classList.remove(cl['header-sticky']);
    }
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
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
