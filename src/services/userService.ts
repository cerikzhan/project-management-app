import { User } from '../types/Entities/User';
import { decodeToken } from 'react-jwt';

export const getUserFromToken = () => {
  const token = document.cookie.split('token=')[1];
  if (token) {
    const decodeUserData = decodeToken(token) as User;
    const { userId, login } = decodeUserData;
    return { userId, login };
  }
  return false;
};

export const resetToken = () => {
  document.cookie = 'token=; Max-Age=-99999999;';
};
