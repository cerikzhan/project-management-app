import React, { useEffect, useState } from 'react';
import cl from './header.module.scss';
import { Link } from 'react-router-dom';
import './../../assets/library/toggle.css';
import UserMenu from './../Menu';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = (e: Event) => {
      const doc = e.target as HTMLDocument;
      setSticky(doc.documentElement.scrollTop > 50);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${cl.header} ${isSticky ? cl['header-sticky'] : ''}`}>
      <div className="container">
        <div className={cl.header__container}>
          <nav className={cl.header__navbar}>
            <Link className={cl.header__navbar_link} to="/">
              {t('menu.home')}
            </Link>
            <Link className={cl.header__navbar_link} to="/projects">
              {t('menu.projects')}
            </Link>
            <Link className={cl.header__navbar_link} to="/projects/1">
              {t('menu.project')}
            </Link>
          </nav>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
