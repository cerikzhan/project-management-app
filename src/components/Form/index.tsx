import React from 'react';
import { useTranslation } from 'react-i18next';
import cl from './form.module.scss';

type FormProps = {
  name: string;
  login: string;
  password: string;
  SetName: (name: string) => void;
  SetLogin: (login: string) => void;
  SetPassword: (password: string) => void;
  submitHandler: (e: React.FormEvent) => void;
  submitValue: string;
};

const UserFrom: React.FC<FormProps> = (props) => {
  const { t } = useTranslation();

  return (
    <form className={cl.form} onSubmit={props.submitHandler}>
      <legend className={cl.form__legend}>{t('user.profile_page')}</legend>
      <label className={cl.form__label}>
        {t('user.user_name')}
        <input
          className={cl.form__input}
          type="text"
          value={props.name}
          onChange={(e) => props.SetName(e.target.value)}
          required
          minLength={3}
          maxLength={8}
        />
      </label>
      <label className={cl.form__label}>
        {t('user.user_login')}
        <input
          className={cl.form__input}
          type="text"
          value={props.login}
          onChange={(e) => props.SetLogin(e.target.value)}
          required
          minLength={3}
          maxLength={8}
        />
      </label>
      <label className={cl.form__label}>
        {t('user.user_password')}
        <input
          className={cl.form__input}
          type="password"
          value={props.password}
          onChange={(e) => props.SetPassword(e.target.value)}
          required
          minLength={3}
          maxLength={12}
        />
      </label>
      <input className={cl.form__submit} type="submit" value={t(props.submitValue)} />
    </form>
  );
};

export default UserFrom;
