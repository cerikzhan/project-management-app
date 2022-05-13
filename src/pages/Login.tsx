import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/reducers/actionCreators';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ login: username, password }));
  };

  useEffect(() => {
    console.log('user', user);
    if (user.id) {
      navigate('/boards');
    }
  }, [user.id]);

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
