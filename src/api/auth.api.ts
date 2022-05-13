import request from './request';
import { LoginDTO } from '../types/DTO/LoginDTO';
import { User } from '../types/Entities/User';
import { getUserFromToken } from '../services/userService';
const MAX_EXPIRED = 60 * 60 * 1000;

export const fetchLogin = async (userdata: LoginDTO) => {
  const response = await request.post<{ token: string }>('signin', userdata);
  const date = new Date(Date.now() + MAX_EXPIRED);
  document.cookie = `token=${response.data.token}; expires=` + date.toUTCString();
  return getUserFromToken() as User;
};

export const fetchChangeUser = async (userData: User) => {
  const response = await request.put(`users/${userData.userId}`, userData);

  return response.data;
};

export const fetchDeleteUser = async (userId: string) => {
  await request.delete(`users/${userId}`);
};
