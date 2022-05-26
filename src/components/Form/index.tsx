import React from 'react';
import { useTranslation } from 'react-i18next';
import cl from './form.module.scss';
import { isLoginError, isSignUpError } from './../../services/userService';

type FormProps = {
  name?: string;
  login: string;
  password: string;
  setName?: (name: string) => void;
  setLogin: (login: string) => void;
  setPassword: (password: string) => void;
  submitHandler: (e: React.FormEvent) => void;
  submitValue: string;
  title: string;
  error?: string;
  secondButtonHandler?: (e: React.FormEvent) => void;
};

const UserFrom: React.FC<FormProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t(props.title)}</h1>
      <div className="paper">
        <form className={cl.form} onSubmit={props.submitHandler}>
          {typeof props.name !== 'undefined' ? (
            <label className={cl.form__label}>
              {t('user.user_name')}
              <input
                className={cl.form__input}
                type="text"
                value={props.name}
                onChange={(e) => (props.setName ? props.setName(e.target.value) : null)}
                required
                minLength={3}
                maxLength={15}
              />
            </label>
          ) : null}
          <label className={cl.form__label}>
            {t('user.user_login')}
            <input
              className={
                typeof props.error !== 'undefined' &&
                (isLoginError(props.error) || isSignUpError(props.error))
                  ? `${cl['form__input-error']} ${cl.form__input}`
                  : cl.form__input
              }
              type="text"
              value={props.login}
              onChange={(e) => props.setLogin(e.target.value)}
              required
              minLength={3}
              maxLength={12}
            />
          </label>
          <label className={cl.form__label}>
            {t('user.user_password')}
            <input
              className={
                typeof props.error !== 'undefined' && isLoginError(props.error)
                  ? `${cl['form__input-error']} ${cl.form__input}`
                  : cl.form__input
              }
              type="password"
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
              required
              minLength={3}
              maxLength={12}
            />
          </label>
          <div>
            <input
              className="btn color-button big-button"
              type="submit"
              value={t(props.submitValue)}
            />
            {props.secondButtonHandler && (
              <button
                className="space-top white-button btn big-button"
                type="button"
                onClick={props.secondButtonHandler}
              >
                {t('user.user_delete')}
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default UserFrom;
