import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger';
import Toggle from '@choco-cat/react-toggle';
import cl from './menu.module.scss';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);
  const chooseLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('choose Lang', e.target.checked);
  };

  return (
    <div ref={node}>
      <nav className={`${cl.usermenu} ${open ? cl['usermenu-open'] : ''}`}>
        <Link onClick={() => close()} className={cl.usermenu_button} to="/login">
          {t('menu.login')}
        </Link>
        <Link onClick={() => close()} className={cl.usermenu_button} to="/signup">
          {t('menu.signup')}
        </Link>
        <Link onClick={() => close()} className={cl.usermenu_button} to="/profile">
          {t('menu.edit_profile')}
        </Link>
        <Link onClick={() => close()} className={cl.usermenu_button} to="">
          {t('menu.new_board')}
        </Link>
        <label className="react-toggle-label">
          <Toggle
            defaultChecked={false}
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
