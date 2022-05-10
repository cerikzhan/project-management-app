import request from './request';
import { LoginDTO } from '../types/DTO/LoginDTO';

export const login = async (payload: LoginDTO) => {
  const response = await request.post('signin', payload);
  console.log(response);
};
