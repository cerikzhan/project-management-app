import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { login } from '../api/auth.api';
import { useAppDispatch } from '../hooks/redux';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(login({ login: username, password }));
  };

  return (
    <>
      <div>{t('user.login_page')}</div>
      <form onSubmit={handleLogin}>
        <input type="text" onChange={(event) => setUsername(event.target.value)} value={username} />
        <input type="text" onChange={(event) => setPassword(event.target.value)} value={password} />
        <button type="submit">{t('user.login')}</button>
      </form>
    </>
  );
};

export default Login;
