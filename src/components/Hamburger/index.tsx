import React from 'react';
import hb from './hamburger.module.scss';

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const MyHamburger = (props: Props) => {
  const classNameButton = props.open ? hb['hamburger-open'] : hb.hamburger;
  const classNameLine = props.open ? hb['hamburger__line-open'] : hb.hamburger__line;
  return (
    <button className={classNameButton} onClick={() => props.setOpen(!props.open)}>
      <div className={classNameLine}></div>
      <div className={classNameLine}></div>
      <div className={classNameLine}></div>
    </button>
  );
};

export default MyHamburger;
