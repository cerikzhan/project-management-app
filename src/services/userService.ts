import { decodeToken } from 'react-jwt';

export const getUserFromToken = () => {
  const token = document.cookie.split('token=')[1];
  if (token) {
    const { userId, login } = decodeToken(token) as { userId: string; login: string };
    return { id: userId, login };
  }
  return {};
};

export const resetToken = () => {
  document.cookie = 'token=; Max-Age=-99999999;';
};
