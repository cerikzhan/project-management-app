import { decodeToken } from 'react-jwt';
import { User } from '../types/Entities/User';

export const getUserFromToken = () => {
  const token = document.cookie.split('token=')[1];
  if (token) {
    const { userId, login } = decodeToken(token) as { userId: string; login: string };
    return { id: userId, login } as User;
  }
  return {} as User;
};

export const resetToken = () => {
  document.cookie = 'token=; Max-Age=-99999999;';
};
