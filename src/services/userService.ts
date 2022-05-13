import { User } from '../types/Entities/User';
import { decodeToken } from 'react-jwt';

export const getUserFromToken = () => {
  const token = localStorage.getItem('access_token');
  if (token) {
    const decodeUserData = decodeToken(token) as User;
    const { userId, login } = decodeUserData;
    return { userId, login };
  }
  return false;
};

export const resetToken = () => {
  localStorage.removeItem('access_token');
};
