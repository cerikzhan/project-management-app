import { decodeToken } from 'react-jwt';
import { User } from '../types/Entities/User';
import { StatusCodes } from 'http-status-codes';

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

export const checkCodeResponse = (code: string) => {
  return Number(code) !== StatusCodes.FORBIDDEN && Number(code) !== StatusCodes.CONFLICT;
};

export const isLoginError = (code: string) => {
  return Number(code) === StatusCodes.FORBIDDEN;
};

export const isSignUpError = (code: string) => {
  return Number(code) === StatusCodes.CONFLICT;
};
