import React from 'react';
import cl from './footer.module.scss';

const Footer: React.FC = () => (
  <footer className={cl.footer}>
    <div className={cl.footer__container + ' container'}>
      <div className={cl.footer__links}>
        <a className="link" href="https://github.com/iamserik" target="_blank" rel="noreferrer">
          iamserik
        </a>
        <a className="link" href="https://github.com/choco-cat" target="_blank" rel="noreferrer">
          choco-cat
        </a>
        <a className="link" href="https://github.com/arteemm" target="_blank" rel="noreferrer">
          arteemm
        </a>
      </div>
      <p className={cl.footer__year}>2022</p>
      <a
        className={cl.footer__rss + ' link'}
        href="https://rs.school/react/"
        target="_blank"
        rel="noreferrer"
      >
        <div className={cl.footer__logo}></div>
      </a>
    </div>
  </footer>
);

export default Footer;
