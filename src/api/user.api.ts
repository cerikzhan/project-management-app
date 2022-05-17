import request from './request';
import { LoginDTO } from '../types/DTO/LoginDTO';
import { getUserFromToken, resetToken } from '../services/userService';
import { UserCreateDTO } from '../types/DTO/UserCreateDTO';
import { User } from '../types/Entities/User';
const MAX_EXPIRED = 60 * 60 * 1000;

export const fetchLogin = async (userdata: LoginDTO) => {
  const responseLogin = await request.post<{ token: string }>('signin', userdata);
  const date = new Date(Date.now() + MAX_EXPIRED);
  document.cookie = `token=${responseLogin.data.token}; expires=` + date.toUTCString();
};

export const fetchUserAfterLogin = async () => {
  const { id } = getUserFromToken();
  if (id) {
    const responseProfile = await request.get<User>(`users/${id}`);
    return responseProfile.data;
  }
  return {};
};

export const fetchChangeUser = async (userData: UserCreateDTO) => {
  const response = await request.put(`users/${userData.id}`, {
    name: userData.name,
    login: userData.login,
    password: userData.password,
  });
  return response.data;
};

export const fetchDeleteUser = async (userId: string) => {
  await request.delete(`users/${userId}`);
  resetToken();
};
