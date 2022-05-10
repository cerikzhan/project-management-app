import React from 'react';
import cl from './footer.module.scss';

const Footer: React.FC = () => (
  <footer className={cl.footer}>
    <div className={`${cl.footer__container} container`}>
      <div className={cl.footer__links}>
        <a
          className={`${cl.footer__link} link`}
          href="https://github.com/iamserik"
          target="_blank"
          rel="noreferrer"
        >
          <span className={cl.footer__github} />
          iamserik
        </a>
        <a
          className={`${cl.footer__link} link`}
          href="https://github.com/choco-cat"
          target="_blank"
          rel="noreferrer"
        >
          <span className={cl.footer__github} />
          choco-cat
        </a>
        <a
          className={`${cl.footer__link} link`}
          href="https://github.com/arteemm"
          target="_blank"
          rel="noreferrer"
        >
          <span className={cl.footer__github} />
          arteemm
        </a>
      </div>
      <a
        className={`${cl.footer__rss} link`}
        href="https://rs.school/react/"
        target="_blank"
        rel="noreferrer"
      >
        <div className={cl.footer__logo}></div>
      </a>
      <p className={cl.footer__year}>2022</p>
    </div>
  </footer>
);

export default Footer;
