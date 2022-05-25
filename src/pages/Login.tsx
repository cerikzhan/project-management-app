import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/reducers/actionCreators';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import UserFrom from '../components/Form';
import cl from '../components/Form/form.module.scss';
import { userSlice } from '../store/reducers/userSlice';
import Spinner from './../components/Spinner';
import { checkCodeResponse } from './../services/userService';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { user, error } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const { resetError } = userSlice.actions;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(login({ login: username, password }));
  };

  useEffect(() => {
    dispatch(resetError());
  }, [user.id, navigate, dispatch, resetError]);

  useEffect(() => {
    if (user.id) {
      navigate('/boards');
    }
    if (error && checkCodeResponse(error.code)) {
      throw new Error(error.message);
    }
  }, [user.id, navigate, error]);

  return (
    <Spinner>
      <UserFrom
        password={password}
        login={username}
        setPassword={setPassword}
        setLogin={setUsername}
        submitHandler={handleLogin}
        submitValue={'user.login'}
        title={'user.login_page'}
      />
      {error ? <p className={cl.form__error}>{t(`user.user_login_error`)}</p> : null}
    </Spinner>
  );
};

export default Login;
