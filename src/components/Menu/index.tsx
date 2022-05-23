import React, { useState, useRef, useEffect } from 'react';
import i18n from 'i18next';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger';
import Toggle from '@choco-cat/react-toggle';
import cl from './menu.module.scss';
import { useTranslation } from 'react-i18next';
import { userSlice } from './../../store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import BoardForm from '../AddBoardForm';

const Menu: React.FC = () => {
  const { user, lang } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const close = () => setOpen(false);
  const { setLang, logoutUser } = userSlice.actions;
  const [showModal, setShowModal] = useState(false);

  const logout = async () => {
    await dispatch(logoutUser());
    close();
  };

  const chooseLang = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await dispatch(setLang(e.target.checked ? 'en' : 'ru'));
  };

  const handleOpenModal = async () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    //throw new Error('Division by zero!');
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <div ref={node}>
        <nav className={`${cl.usermenu} ${open ? cl['usermenu-open'] : ''}`}>
          {!user.id && (
            <>
              <Link onClick={close} className={cl.usermenu_button} to="/signup">
                {t('menu.signup')}
              </Link>
              <Link onClick={close} className={cl.usermenu_button} to="/signin">
                {t('menu.login')}
              </Link>
            </>
          )}
          {user.id && (
            <>
              <Link className={cl.usermenu_button} to="/boards">
                {t('menu.boards')}
              </Link>
              <Link onClick={close} className={cl.usermenu_button} to="/profile">
                {t('menu.edit_profile')}
              </Link>
              <button onClick={handleOpenModal} className={cl.usermenu_button}>
                {t('menu.new_board')}
              </button>
              <div className={cl.usermenu_username}>{user.login}</div>
              <Link onClick={logout} className={cl.usermenu_button} to="/">
                {t('menu.logout')}
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
      <BoardForm onClose={handleClose} show={showModal} />
    </>
  );
};

export default Menu;
