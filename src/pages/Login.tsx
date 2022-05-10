import React, { useState } from 'react';
import { login } from '../api/auth.api';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await login({ login: username, password });
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" onChange={(event) => setUsername(event.target.value)} value={username} />
      <input type="text" onChange={(event) => setPassword(event.target.value)} value={password} />
      <button type="submit">login</button>
    </form>
  );
};

export default Login;
