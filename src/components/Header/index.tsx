import React, { useEffect, useState } from 'react';
import cl from './header.module.scss';
import './../../assets/library/toggle.css';
import UserMenu from './../Menu';
import { useAppDispatch } from '../../hooks/redux';
import { authUser } from './../../store/reducers/actionCreators';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = (e: Event) => {
      const doc = e.target as HTMLDocument;
      setSticky(doc.documentElement.scrollTop > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [dispatch]);

  useEffect(() => {
    dispatch(authUser());
  }, [dispatch]);

  return (
    <header className={`${cl.header} ${isSticky ? cl['header-sticky'] : ''}`}>
      <div className="container">
        <div className={cl.header__container}>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
