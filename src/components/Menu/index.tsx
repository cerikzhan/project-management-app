import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger';
import Toggle from '@choco-cat/react-toggle';
import mn from './menu.module.scss';

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);
  const chooseLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('choose Lang', e.target.checked);
  };

  return (
    <div ref={node}>
      <nav className={`${mn.usermenu} ${open && mn['usermenu-open']}`}>
        <Link onClick={() => close()} className={mn.usermenu_button} to="/login">
          Login
        </Link>
        <Link onClick={() => close()} className={mn.usermenu_button} to="">
          Logout
        </Link>
        <Link onClick={() => close()} className={mn.usermenu_button} to="/profile">
          Edit profile
        </Link>
        <Link onClick={() => close()} className={mn.usermenu_button} to="">
          New board
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
