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
      <div>
        {user.id && (
          <nav className={`${cl.usermenu} ${open ? cl['usermenu-open'] : ''}`}>
            <Link className={cl.usermenu_button} to="/boards">
              {t('menu.boards')}
            </Link>
            <Link onClick={close} className={cl.usermenu_button} to="/profile">
              {t('menu.edit_profile')}
            </Link>
            <Link onClick={handleOpenModal} className="color-button" to="#">
              {t('menu.new_board')}
            </Link>
          </nav>
        )}
      </div>
      <nav className={cl['usermenu-right']}>
        {!user.id && (
          <>
            <Link onClick={close} className="button" to="/signin">
              {t('menu.login')}
            </Link>
            <Link className="color-button" to="/signup">
              {t('menu.signup')}
            </Link>
          </>
        )}
        {user.id && (
          <>
            <Link className={cl.usermenu_username} title={user.login} to="#">
              {user.login[0]}
            </Link>
            <Link onClick={logout} className="button" to="/">
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
      <BoardForm onClose={handleClose} show={showModal} />
    </>
  );
};

export default Menu;
