import request from './request';
import { LoginDTO } from '../types/DTO/LoginDTO';
import { User } from '../types/Entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { decodeToken } from 'react-jwt';

export const login = createAsyncThunk('user/login', async (userdata: LoginDTO) => {
  const response = await request.post<{ token: string }>('signin', userdata);
  const { token } = response.data;
  const decodeUserData = decodeToken(token) as User;
  const { userId, login } = decodeUserData;
  return { userId, login };
});
