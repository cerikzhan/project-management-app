import React from 'react';
import cl from './hamburger.module.scss';

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const MyHamburger = (props: Props) => {
  return (
    <button
      className={`${cl.hamburger} ${props.open ? cl['hamburger-open'] : ''}`}
      onClick={() => props.setOpen(!props.open)}
    >
      <div className={`${cl.hamburger__line} ${props.open && cl['hamburger__line-open']}`}></div>
      <div className={`${cl.hamburger__line} ${props.open && cl['hamburger__line-open']}`}></div>
      <div className={`${cl.hamburger__line} ${props.open && cl['hamburger__line-open']}`}></div>
    </button>
  );
};

export default MyHamburger;
