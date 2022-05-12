import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger';
import Toggle from '@choco-cat/react-toggle';
import cl from './menu.module.scss';
import { useTranslation } from 'react-i18next';
import { boardSlice } from './../../store/reducers/boardsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import i18n from 'i18next';

const Menu = () => {
  const { user } = useAppSelector((state) => state);
  const { lang } = useAppSelector((state) => state.boards);
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  const { setLang } = boardSlice.actions;
  const dispatch = useAppDispatch();

  const chooseLang = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await dispatch(setLang(e.target.checked ? 'en' : 'ru'));
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div ref={node}>
      <nav className={`${cl.usermenu} ${open ? cl['usermenu-open'] : ''}`}>
        {!user.user.userId && (
          <>
            <Link onClick={() => close()} className={cl.usermenu_button} to="/signup">
              {t('menu.signup')}
            </Link>
            <Link onClick={() => close()} className={cl.usermenu_button} to="/login">
              {t('menu.login')}
            </Link>
          </>
        )}
        {user.user.userId && (
          <>
            <Link onClick={() => close()} className={cl.usermenu_button} to="/profile">
              {t('menu.edit_profile')}
            </Link>
            <Link onClick={() => close()} className={cl.usermenu_button} to="">
              {t('menu.new_board')}
            </Link>
          </>
        )}
        <label className="react-toggle-label">
          <Toggle
            defaultChecked={lang === 'en'}
            icons={{ checked: 'en', unchecked: 'ru' }}
            onChange={chooseLang}
          />
        </label>
      </nav>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
