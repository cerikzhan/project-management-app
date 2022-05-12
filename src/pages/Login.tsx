import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth.api';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state: RootState) => state);
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ login: username, password }));
  };

  useEffect(() => {
    if (user.user.userId) {
      navigate('/boards');
    }
  }, [user.user.userId]);

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
