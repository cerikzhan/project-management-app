import request from './request';
import { LoginDTO } from '../types/DTO/LoginDTO';
import { User } from '../types/Entities/User';
import { decodeToken } from 'react-jwt';
import { UserCreateDTO } from '../types/DTO/UserCreateDTO';

type UserData = {
  user: UserCreateDTO;
  userId: string;
};

export const fetchLogin = async (userdata: LoginDTO) => {
  const response = await request.post<{ token: string }>('signin', userdata);
  const { token } = response.data;
  localStorage.setItem('access_token', response.data.token);
  const decodeUserData = decodeToken(token) as User;
  const { userId, login } = decodeUserData;
  return { userId, login };
};

export const fetchChangeUser = async (userData: UserData) => {
  const response = await request.put(`users/${userData.userId}`, userData.user);

  return response.data as User;
};

export const fetchDeleteUser = async (userId: string) => {
  await request.delete(`users/${userId}`);
};
