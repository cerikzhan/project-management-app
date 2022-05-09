//source https://webformyself.com/reaktivnoe-react-gamburger-menyu/
import React, { useState, useRef } from 'react';

import Hamburger from '../Hamburger';
import { StyledMenu, StyledLink } from './Menu.styled';
import cl from '../Header/header.module.scss';
import Toggle from '@choco-cat/react-toggle';

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  const chooseLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('choose Lang', e.target.checked);
  };

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledLink onClick={() => close()} className={cl.header__usermenu_button} href="/login">
          Login
        </StyledLink>
        <StyledLink onClick={() => close()} className={cl.header__usermenu_button} href="">
          Logout
        </StyledLink>
        <StyledLink onClick={() => close()} className={cl.header__usermenu_button} href="/profile">
          Edit profile
        </StyledLink>
        <StyledLink onClick={() => close()} className={cl.header__usermenu_button} href="">
          New board
        </StyledLink>
        <label className="react-toggle-label">
          <Toggle
            defaultChecked={false}
            icons={{ checked: 'en', unchecked: 'ru' }}
            onChange={chooseLang}
          />
        </label>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
