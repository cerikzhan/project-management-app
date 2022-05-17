import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { authUser, login } from '../store/reducers/actionCreators';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import UserFrom from '../components/Form';
import cl from '../components/Form/form.module.scss';
import { userSlice } from '../store/reducers/userSlice';
import { getUserFromToken } from '../services/userService';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { error } = useAppSelector((state) => state.user);
  const { user } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const { setError } = userSlice.actions;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(login({ login: username, password }));
    const { id } = getUserFromToken();
    if (id) {
      await dispatch(authUser());
    }
  };

  useEffect(() => {
    if (user.id) {
      navigate('/boards');
    }
  }, [user.id]);

  useEffect(() => {
    dispatch(setError());
  }, []);

  return (
    <>
      <UserFrom
        password={password}
        login={username}
        setPassword={setPassword}
        setLogin={setUsername}
        submitHandler={handleLogin}
        submitValue={'user.login'}
        title={'user.login_page'}
      />
      {error ? <p className={cl.form__error}>{t('user.user_login_error')}</p> : null}
    </>
  );
};

export default Login;
